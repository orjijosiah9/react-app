import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginPage({ onLogin }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.email.trim() || !form.password) {
      return;
    }

    try {
      onLogin(form.email, form.password);
      navigate("/dashboard");
    } catch (submitError) {
      setError(submitError.message);
    }
  };

  return (
    <div className="auth-shell">
      <section className="auth-card">
        <div className="hero-panel">
          <div className="brand-badge">CBT</div>
          <p className="eyebrow">Mathematics Competition Prep</p>
          <h1>Math Arena</h1>
          <p className="hero-copy">
            Give your students a calm, exam-realistic space to practise speed,
            strategy, and confidence before competition day.
          </p>

          <div className="hero-stats">
            <div>
              <span className="meta-label">Mode</span>
              <strong>Secure Practice</strong>
            </div>
            <div>
              <span className="meta-label">Tracking</span>
              <strong>Saved Attempts</strong>
            </div>
            <div>
              <span className="meta-label">Admin</span>
              <strong>Question Upload</strong>
            </div>
          </div>
        </div>

        <form className="login-panel" onSubmit={handleSubmit}>
          <p className="eyebrow">Student Login</p>
          <h2>Welcome back</h2>

          <label className="field">
            <span>Email Address</span>
            <input
              type="email"
              placeholder="student@example.com"
              required
              value={form.email}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  email: event.target.value,
                }))
              }
            />
          </label>

          <label className="field">
            <span>Password</span>
            <input
              type="password"
              placeholder="Enter your password"
              required
              value={form.password}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  password: event.target.value,
                }))
              }
            />
          </label>

          {error ? <p className="form-error">{error}</p> : null}

          <button className="primary-button" type="submit">
            Login as Student
          </button>

          <div className="auth-links">
            <Link to="/register">Create student account</Link>
            <Link to="/admin-login">Admin login</Link>
          </div>
        </form>
      </section>
    </div>
  );
}

export default LoginPage;
