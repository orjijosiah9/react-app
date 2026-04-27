import { useEffect, useState } from "react";
import { CLASS_OPTIONS } from "../data/defaultQuestions";

function AdminUploadPage({ context }) {
  const [poolKey, setPoolKey] = useState("junior");
  const [title, setTitle] = useState(context.questionPools.junior.title);
  const [duration, setDuration] = useState(context.questionPools.junior.durationMinutes);
  const [jsonText, setJsonText] = useState("");
  const [message, setMessage] = useState("No new upload yet.");
  const [studentMessage, setStudentMessage] = useState("");
  const [studentForm, setStudentForm] = useState({
    displayName: "",
    email: "",
    group: "JSS1",
    password: "",
  });
  const studentRows = buildStudentRows(context.users, context.history);

  useEffect(() => {
    const activePool = context.questionPools[poolKey];
    setTitle(activePool.title);
    setDuration(activePool.durationMinutes);
  }, [poolKey, context.questionPools]);

  const handleImport = async () => {
    if (!jsonText.trim()) {
      setMessage("Paste a valid JSON question array first.");
      return;
    }

    try {
      const parsed = JSON.parse(jsonText);
      const imports = buildPoolImports(parsed, poolKey, title, duration);

      for (const item of imports) {
        await context.onSaveQuestionSet(item);
      }

      setMessage(formatImportMessage(imports));
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleFile = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const text = await file.text();
    setJsonText(text);
    event.target.value = "";
  };

  const handleStudentCreate = async (event) => {
    event.preventDefault();

    if (!studentForm.displayName.trim() || !studentForm.email.trim() || !studentForm.password) {
      setStudentMessage("Please provide name, email, and password for the student.");
      return;
    }

    try {
      await context.onAdminCreateStudent(studentForm);
      setStudentMessage("Student added successfully.");
      setStudentForm({
        displayName: "",
        email: "",
        group: "JSS1",
        password: "",
      });
    } catch (error) {
      setStudentMessage(error.message);
    }
  };

  const handleStudentRemove = async (email) => {
    const confirmed = window.confirm(`Remove ${email} and delete the saved scores for this student?`);
    if (!confirmed) {
      return;
    }

    try {
      await context.onAdminRemoveStudent(email);
      setStudentMessage("Student removed successfully.");
    } catch (error) {
      setStudentMessage(error.message);
    }
  };

  return (
    <div className="admin-layout">
      <section className="panel panel-page">
        <div className="panel-header">
          <p className="eyebrow">Admin Console</p>
          <h2>Registered Students</h2>
        </div>
        <p className="panel-copy">
          This table shows the students who have registered in this browser and their current performance record.
        </p>

        <div className="table-shell">
          <table className="score-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Group</th>
                <th>Pool</th>
                <th>Attempts</th>
                <th>Best Score</th>
                <th>Latest Score</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {studentRows.length ? (
                studentRows.map((student) => (
                  <tr key={student.email}>
                    <td>{student.displayName}</td>
                    <td>{student.email}</td>
                    <td>{student.group || "-"}</td>
                    <td>{student.poolLabel}</td>
                    <td>{student.attempts}</td>
                    <td>{student.bestScore}%</td>
                    <td>{student.latestScore}%</td>
                    <td>
                      <button
                        className="danger-button"
                        type="button"
                        onClick={() => handleStudentRemove(student.email)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8">No students have registered yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="admin-student-form">
          <div className="panel-header">
            <p className="eyebrow">Manual Entry</p>
            <h2>Add Student</h2>
          </div>
          <form className="inline-form" onSubmit={handleStudentCreate}>
            <label className="field">
              <span>Full Name</span>
              <input
                type="text"
                value={studentForm.displayName}
                onChange={(event) => setStudentForm((current) => ({ ...current, displayName: event.target.value }))}
              />
            </label>
            <label className="field">
              <span>Email</span>
              <input
                type="email"
                value={studentForm.email}
                onChange={(event) => setStudentForm((current) => ({ ...current, email: event.target.value }))}
              />
            </label>
            <label className="field">
              <span>Class</span>
              <select
                value={studentForm.group}
                onChange={(event) => setStudentForm((current) => ({ ...current, group: event.target.value }))}
              >
                {CLASS_OPTIONS.map((classLevel) => (
                  <option key={classLevel} value={classLevel}>
                    {classLevel}
                  </option>
                ))}
              </select>
            </label>
            <label className="field">
              <span>Temporary Password</span>
              <input
                type="text"
                value={studentForm.password}
                onChange={(event) => setStudentForm((current) => ({ ...current, password: event.target.value }))}
              />
            </label>
            <button className="primary-button" type="submit">
              Add Student
            </button>
          </form>
          {studentMessage ? <p className="hint-text">{studentMessage}</p> : null}
        </div>
      </section>

      <section className="panel panel-page">
        <div className="panel-header">
          <p className="eyebrow">Question Management</p>
          <h2>Upload Questions</h2>
        </div>

        <p className="panel-copy">
          You can upload a single JSS or SS array, or a combined JSON object with separate `junior` and `senior` sections.
        </p>

        <label className="field">
          <span>Target Pool</span>
          <select value={poolKey} onChange={(event) => setPoolKey(event.target.value)}>
            <option value="junior">JSS Pool</option>
            <option value="senior">SS Pool</option>
          </select>
        </label>

        <label className="field">
          <span>Question Set Title</span>
          <input value={title} onChange={(event) => setTitle(event.target.value)} type="text" />
        </label>

        <label className="field">
          <span>Duration in Minutes</span>
          <input
            value={duration}
            onChange={(event) => setDuration(event.target.value)}
            type="number"
            min="5"
            max="180"
          />
        </label>

        <label className="field">
          <span>Paste JSON</span>
          <textarea
            rows="12"
            value={jsonText}
            onChange={(event) => setJsonText(event.target.value)}
            placeholder='{"junior":[{"text":"2 + 2 = ?","options":["3","4","5","6"],"answer":1}],"senior":[{"text":"Solve 2x + 3 = 11","options":["2","3","4","5"],"answer":2}]}'
          />
        </label>

        <div className="admin-actions">
          <button className="ghost-button" onClick={handleImport}>
            Import Pasted Set
          </button>

          <label className="ghost-button file-button">
            Upload JSON File
            <input type="file" accept=".json" onChange={handleFile} />
          </label>

          <button className="primary-button" onClick={() => context.onRestoreDefaults(poolKey)}>
            Restore Default Set
          </button>
        </div>

        <p className="hint-text">{message}</p>
      </section>
    </div>
  );
}

function normalizeQuestions(parsed) {
  if (!Array.isArray(parsed) || !parsed.length) {
    throw new Error("Your upload must be a non-empty array of question objects.");
  }

  return parsed.map((item) => {
    if (
      !item ||
      typeof item.text !== "string" ||
      !Array.isArray(item.options) ||
      item.options.length !== 4 ||
      !Number.isInteger(item.answer) ||
      item.answer < 0 ||
      item.answer > 3
    ) {
      throw new Error("Each question needs text, exactly 4 options, and an answer index from 0 to 3.");
    }

    return {
      text: cleanImportedText(item.text),
      options: item.options.map((option) => cleanImportedText(String(option))),
      answer: item.answer,
    };
  });
}

function cleanImportedText(value) {
  return value
    .trim()
    .replace(/\\\(_\{two\}\\\)/gi, " (base 2)")
    .replace(/\\\(_\{ten\}\\\)/gi, " (base 10)")
    .replace(/\\\(_\{eight\}\\\)/gi, " (base 8)")
    .replace(/\\\(_\{sixteen\}\\\)/gi, " (base 16)")
    .replace(/\\\(_\{([a-z0-9+\-]+)\}\\\)/gi, " (base $1)")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function buildPoolImports(parsed, activePoolKey, title, duration) {
  if (Array.isArray(parsed)) {
    return [
      {
        poolKey: activePoolKey,
        config: {
          title: title.trim() || getDefaultPoolTitle(activePoolKey),
          durationMinutes: clampDuration(Number(duration) || 60),
          questions: normalizeQuestions(parsed),
        },
      },
    ];
  }

  if (!parsed || typeof parsed !== "object") {
    throw new Error("Upload a valid array or a JSON object with junior and senior question sections.");
  }

  const juniorSource = parsed.junior || parsed.jss;
  const seniorSource = parsed.senior || parsed.ss;

  if (!juniorSource && !seniorSource) {
    throw new Error("Combined JSON must contain a junior/jss section, a senior/ss section, or both.");
  }

  const imports = [];

  if (juniorSource) {
    imports.push({
      poolKey: "junior",
      config: normalizePoolSource(juniorSource, "JSS Mathematics Mock"),
    });
  }

  if (seniorSource) {
    imports.push({
      poolKey: "senior",
      config: normalizePoolSource(seniorSource, "SS Mathematics Mock"),
    });
  }

  return imports;
}

function normalizePoolSource(source, fallbackTitle) {
  if (Array.isArray(source)) {
    return {
      title: fallbackTitle,
      durationMinutes: 60,
      questions: normalizeQuestions(source),
    };
  }

  return {
    title: source.title?.trim() || fallbackTitle,
    durationMinutes: clampDuration(Number(source.durationMinutes) || 60),
    questions: normalizeQuestions(source.questions),
  };
}

function clampDuration(value) {
  return Math.min(180, Math.max(5, value));
}

function buildStudentRows(users, history) {
  return users
    .filter((user) => user.role === "student")
    .map((user) => {
      const attempts = history.filter((entry) => entry.studentEmail === user.email);
      const latestScore = attempts.length ? attempts[0].score : 0;
      const bestScore = attempts.length
        ? Math.max(...attempts.map((entry) => entry.score))
        : 0;

      return {
        displayName: user.displayName,
        email: user.email,
        group: user.group,
        poolLabel: user.group.startsWith("JSS") ? "JSS" : "SS",
        attempts: attempts.length,
        latestScore,
        bestScore,
      };
    });
}

function getDefaultPoolTitle(poolKey) {
  return poolKey === "junior" ? "JSS Mathematics Mock" : "SS Mathematics Mock";
}

function formatImportMessage(imports) {
  const labels = imports.map((item) => `${item.poolKey === "junior" ? "JSS" : "SS"} (${item.config.questions.length})`);
  return `Imported successfully into ${labels.join(" and ")}.`;
}

export default AdminUploadPage;
