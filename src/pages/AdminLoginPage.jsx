import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AdminLoginPage({ onLogin }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      onLogin(form.email, form.password);
      navigate("/admin");
    } catch (submitError) {
      setError(submitError.message);
    }
  };

  return (
    <div className="auth-shell">
      <section className="auth-card">
        <div className="hero-panel">
          <div className="brand-badge">ADMIN</div>
          <p className="eyebrow">Coach Access</p>
          <h1>Admin Console Login</h1>
          <p className="hero-copy">
            Sign in as the coach to view registered students, track performance, and manage question uploads.
          </p>
        </div>

        <form className="login-panel" onSubmit={handleSubmit}>
          <p className="eyebrow">Admin Login</p>
          <h2>Access control room</h2>

          <label className="field">
            <span>Admin Email</span>
            <input
              type="email"
              required
              value={form.email}
              onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
            />
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

          {error ? <p className="form-error">{error}</p> : null}

          <button className="primary-button" type="submit">
            Login as Admin
          </button>

          <div className="auth-links">
            <Link to="/login">Student login</Link>
            <Link to="/register">Student registration</Link>
          </div>
        </form>
      </section>
    </div>
  );
}

export default AdminLoginPage;
