import {
  DEFAULT_ADMIN,
  JUNIOR_CLASSES,
  defaultExamSettings,
  defaultQuestions,
  STORAGE_KEYS,
} from "../data/defaultQuestions";

export function loadSession() {
  return readJson(STORAGE_KEYS.session);
}

export function saveSession(session) {
  localStorage.setItem(STORAGE_KEYS.session, JSON.stringify(session));
}

export function clearStoredSession() {
  localStorage.removeItem(STORAGE_KEYS.session);
}

export function loadUsers() {
  return readJson(STORAGE_KEYS.users) || [];
}

export function registerStudent(payload) {
  const users = loadUsers();
  const email = payload.email.trim().toLowerCase();

  if (users.some((user) => user.email === email)) {
    throw new Error("A student with this email already exists.");
  }

  const nextUser = {
    id: createUserId(),
    displayName: payload.displayName.trim(),
    email,
    group: payload.group.trim(),
    password: payload.password,
    role: "student",
    createdAt: new Date().toLocaleString(),
  };

  const nextUsers = [...users, nextUser];
  localStorage.setItem(STORAGE_KEYS.users, JSON.stringify(nextUsers));

  return sanitizeUser(nextUser);
}

export function deleteStudent(email) {
  const normalized = email.trim().toLowerCase();
  const users = loadUsers();
  const nextUsers = users.filter((user) => user.email !== normalized);
  localStorage.setItem(STORAGE_KEYS.users, JSON.stringify(nextUsers));
  return nextUsers.map(sanitizeUser);
}

export function authenticateStudent(email, password) {
  const users = loadUsers();
  const normalized = email.trim().toLowerCase();
  const user = users.find((item) => item.email === normalized && item.role === "student");

  if (!user || user.password !== password) {
    throw new Error("Invalid student email or password.");
  }

  return sanitizeUser(user);
}

export function authenticateAdmin(email, password) {
  if (
    email.trim().toLowerCase() !== DEFAULT_ADMIN.email.toLowerCase() ||
    password !== DEFAULT_ADMIN.password
  ) {
    throw new Error("Invalid admin login details.");
  }

  return {
    email: DEFAULT_ADMIN.email,
    displayName: DEFAULT_ADMIN.displayName,
    group: "Administration",
    role: "admin",
  };
}

export function loadHistory() {
  return readJson(STORAGE_KEYS.history) || [];
}

export function saveHistoryEntry(entry) {
  const history = loadHistory();
  const next = [entry, ...history].slice(0, 20);
  localStorage.setItem(STORAGE_KEYS.history, JSON.stringify(next));
  return next;
}

export function deleteStudentHistory(email) {
  const normalized = email.trim().toLowerCase();
  const history = loadHistory();
  const next = history.filter((entry) => entry.studentEmail !== normalized);
  localStorage.setItem(STORAGE_KEYS.history, JSON.stringify(next));
  return next;
}

export function loadQuestionPools() {
  const stored = readJson(STORAGE_KEYS.customSet);
  return normalizeQuestionPools(stored);
}

export function saveQuestionPools(payload) {
  localStorage.setItem(STORAGE_KEYS.customSet, JSON.stringify(payload));
}

function readJson(key) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    return null;
  }
}

function sanitizeUser(user) {
  return {
    id: user.id,
    displayName: user.displayName,
    email: user.email,
    group: user.group,
    role: user.role,
    createdAt: user.createdAt,
  };
}

function createUserId() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }

  return `student-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

function normalizeQuestionPools(stored) {
  const defaults = createDefaultQuestionPools();

  if (!stored) {
    return defaults;
  }

  if (stored.junior && stored.senior) {
    return {
      junior: normalizePool(stored.junior, defaults.junior),
      senior: normalizePool(stored.senior, defaults.senior),
    };
  }

  return {
    junior: normalizePool(stored, defaults.junior),
    senior: normalizePool(stored, defaults.senior),
  };
}

function normalizePool(pool, fallback) {
  return {
    title: pool?.title || fallback.title,
    durationMinutes: Number(pool?.durationMinutes) || fallback.durationMinutes,
    questions: Array.isArray(pool?.questions) && pool.questions.length ? pool.questions : fallback.questions,
  };
}

function createDefaultQuestionPools() {
  return {
    junior: {
      title: "JSS Mathematics Mock",
      durationMinutes: defaultExamSettings.durationMinutes,
      questions: defaultQuestions,
    },
    senior: {
      title: "SS Mathematics Mock",
      durationMinutes: defaultExamSettings.durationMinutes,
      questions: defaultQuestions,
    },
  };
}
