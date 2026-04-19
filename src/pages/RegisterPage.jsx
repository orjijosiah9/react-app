import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CLASS_OPTIONS } from "../data/defaultQuestions";

function RegisterPage({ onRegister }) {
  const [form, setForm] = useState({
    displayName: "",
    email: "",
    group: "JSS1",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.displayName.trim() || !form.email.trim() || !form.password) {
      setSuccess("");
      setError("Please complete all required fields.");
      return;
    }

    if (form.password.length < 6) {
      setSuccess("");
      setError("Password must be at least 6 characters.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setSuccess("");
      setError("Passwords do not match.");
      return;
    }

    try {
      setError("");
      onRegister(form);
      setSuccess("Registration successful. Redirecting to login...");
      window.setTimeout(() => {
        navigate("/login");
      }, 1200);
    } catch (submitError) {
      setSuccess("");
      setError(submitError.message);
    }
  };

  return (
    <div className="auth-shell">
      <section className="auth-card">
        <div className="hero-panel">
          <div className="brand-badge">CBT</div>
          <p className="eyebrow">Student Registration</p>
          <h1>Join Math Arena</h1>
          <p className="hero-copy">
            Register your students with a proper login flow so their practice and scores can be tracked cleanly.
          </p>
        </div>

        <form className="login-panel" onSubmit={handleSubmit}>
          <p className="eyebrow">Register</p>
          <h2>Create student account</h2>

          <label className="field">
            <span>Full Name</span>
            <input
              type="text"
              required
              value={form.displayName}
              onChange={(event) => setForm((current) => ({ ...current, displayName: event.target.value }))}
            />
          </label>

          <label className="field">
            <span>Email Address</span>
            <input
              type="email"
              required
              value={form.email}
              onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
            />
          </label>

          <label className="field">
            <span>Class</span>
            <select
              value={form.group}
              onChange={(event) => setForm((current) => ({ ...current, group: event.target.value }))}
            >
              {CLASS_OPTIONS.map((classLevel) => (
                <option key={classLevel} value={classLevel}>
                  {classLevel}
                </option>
              ))}
            </select>
          </label>

          <label className="field">
            <span>Password</span>
            <input
              type="password"
              required
              value={form.password}
              onChange={(event) => setForm((current) => ({ ...current, password: event.target.value }))}
            />
          </label>

          <label className="field">
            <span>Confirm Password</span>
            <input
              type="password"
              required
              value={form.confirmPassword}
              onChange={(event) => setForm((current) => ({ ...current, confirmPassword: event.target.value }))}
            />
          </label>

          {error ? <p className="form-error">{error}</p> : null}
          {success ? <p className="form-success">{success}</p> : null}

          <button className="primary-button" type="submit">
            Register Student
          </button>

          <div className="auth-links">
            <Link to="/login">Back to student login</Link>
            <Link to="/admin-login">Admin login</Link>
          </div>
        </form>
      </section>
    </div>
  );
}

export default RegisterPage;
