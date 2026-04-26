import {
  defaultExamSettings,
  defaultJuniorQuestions,
  defaultQuestions,
  STORAGE_KEYS,
} from "../data/defaultQuestions";
import { supabase } from "../lib/supabase";

export async function bootstrapAppData(authSession) {
  const questionPools = await loadQuestionPools();

  if (!authSession?.user) {
    return {
      session: null,
      users: [],
      history: [],
      questionPools,
    };
  }

  const profile = await fetchProfile(authSession.user.id);

  if (!profile) {
    await supabase.auth.signOut();
    throw new Error("No profile was found for this account.");
  }

  const session = mapProfile(profile);
  const users = session.role === "admin" ? await loadUsers() : [];
  const history = await loadHistory(session, users);

  return {
    session,
    users,
    history,
    questionPools,
  };
}

export async function registerStudent(payload) {
  const { error, data } = await supabase.auth.signUp({
    email: payload.email.trim().toLowerCase(),
    password: payload.password,
    options: {
      data: {
        display_name: payload.displayName.trim(),
        class_level: payload.group,
      },
    },
  });

  if (error) {
    throw new Error(error.message);
  }

  if (data.session) {
    await supabase.auth.signOut();
  }

  return { ok: true };
}

export async function authenticateStudent(email, password) {
  return authenticateWithRole(email, password, "student");
}

export async function authenticateAdmin(email, password) {
  return authenticateWithRole(email, password, "admin");
}

export async function clearStoredSession() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw new Error(error.message);
  }
}

export async function loadUsers() {
  const { data, error } = await supabase
    .from("profiles")
    .select("id, email, display_name, class_level, role, created_at")
    .eq("role", "student")
    .order("display_name", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return (data || []).map(mapProfile);
}

export async function deleteStudent(email) {
  const normalized = email.trim().toLowerCase();
  await invokeManageStudents({
    action: "delete",
    email: normalized,
  });

  return loadUsers();
}

export async function loadHistory(session, users = []) {
  if (!session) {
    return [];
  }

  let query = supabase
    .from("scores")
    .select("id, user_id, exam_title, pool_key, score, correct, attempted, flagged, total, created_at")
    .order("created_at", { ascending: false });

  if (session.role !== "admin") {
    query = query.eq("user_id", session.id);
  }

  const { data, error } = await query;

  if (error) {
    throw new Error(error.message);
  }

  const userMap = new Map(users.map((user) => [user.id, user]));
  if (session.role !== "admin") {
    userMap.set(session.id, session);
  }

  return (data || []).map((entry) => {
    const owner = userMap.get(entry.user_id) || session;

    return {
      id: entry.id,
      displayName: owner?.displayName || "Student",
      studentEmail: owner?.email || "",
      group: owner?.group || "",
      role: owner?.role || "student",
      poolKey: entry.pool_key,
      title: entry.exam_title,
      score: entry.score,
      correct: entry.correct,
      attempted: entry.attempted,
      flagged: entry.flagged,
      total: entry.total,
      completedAt: new Date(entry.created_at).toLocaleString(),
    };
  });
}

export async function saveHistoryEntry(session, entry) {
  const { data, error } = await supabase
    .from("scores")
    .insert({
      user_id: session.id,
      exam_title: entry.title,
      pool_key: entry.poolKey,
      score: entry.score,
      correct: entry.correct,
      attempted: entry.attempted,
      flagged: entry.flagged,
      total: entry.total,
    })
    .select("id, user_id, exam_title, pool_key, score, correct, attempted, flagged, total, created_at")
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return {
    id: data.id,
    displayName: session.displayName,
    studentEmail: session.email,
    group: session.group,
    role: session.role,
    poolKey: data.pool_key,
    title: data.exam_title,
    score: data.score,
    correct: data.correct,
    attempted: data.attempted,
    flagged: data.flagged,
    total: data.total,
    completedAt: new Date(data.created_at).toLocaleString(),
  };
}

export async function loadQuestionPools() {
  const defaults = createDefaultQuestionPools();
  const { data, error } = await supabase
    .from("question_pools")
    .select("pool_key, title, duration_minutes, questions");

  if (error) {
    return defaults;
  }

  const rows = data || [];

  return {
    junior: normalizePool(rows.find((item) => item.pool_key === "junior"), defaults.junior),
    senior: normalizePool(rows.find((item) => item.pool_key === "senior"), defaults.senior),
  };
}

export async function saveQuestionPools(payload) {
  const rows = Object.entries(payload).map(([poolKey, config]) => ({
    pool_key: poolKey,
    title: config.title,
    duration_minutes: config.durationMinutes,
    questions: config.questions,
  }));

  const { error } = await supabase.from("question_pools").upsert(rows, {
    onConflict: "pool_key",
  });

  if (error) {
    throw new Error(error.message);
  }
}

export async function createStudentFromAdmin(payload) {
  await invokeManageStudents({
    action: "create",
    payload,
  });
}

async function authenticateWithRole(email, password, expectedRole) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.trim().toLowerCase(),
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  const profile = await fetchProfile(data.user.id);

  if (!profile || profile.role !== expectedRole) {
    await supabase.auth.signOut();
    throw new Error(
      expectedRole === "admin"
        ? "This account is not allowed to access the admin panel."
        : "This account is not registered as a student."
    );
  }

  return mapProfile(profile);
}

async function fetchProfile(userId) {
  const { data, error } = await supabase
    .from("profiles")
    .select("id, email, display_name, class_level, role, created_at")
    .eq("id", userId)
    .maybeSingle();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

function mapProfile(profile) {
  return {
    id: profile.id,
    email: profile.email,
    displayName: profile.display_name,
    group: profile.class_level || "",
    role: profile.role,
    createdAt: profile.created_at,
  };
}

function normalizePool(pool, fallback) {
  return {
    title: pool?.title || fallback.title,
    durationMinutes:
      Number(pool?.duration_minutes || pool?.durationMinutes) || fallback.durationMinutes,
    questions:
      Array.isArray(pool?.questions) && pool.questions.length
        ? pool.questions
        : fallback.questions,
  };
}

function createDefaultQuestionPools() {
  return {
    junior: {
      title: "JSS Mathematics Mock",
      durationMinutes: defaultExamSettings.durationMinutes,
      questions: defaultJuniorQuestions,
    },
    senior: {
      title: "SS Mathematics Mock",
      durationMinutes: defaultExamSettings.durationMinutes,
      questions: defaultQuestions,
    },
  };
}

async function invokeManageStudents(body) {
  const { data, error } = await supabase.functions.invoke("manage-students", {
    body,
  });

  if (error) {
    throw new Error(error.message);
  }

  if (data?.error) {
    throw new Error(data.error);
  }

  return data;
}
