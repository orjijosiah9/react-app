import { NavLink, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

function AppShell({ context, children }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    context.onLogout();
    navigate("/login");
  };

  return (
    <div className="page-shell">
      <Sidebar context={context} />

      <main className="main-stage">
        <header className="topbar">
          <div>
            <p className="eyebrow">Practice Interface</p>
            <h2>{context.questionBank.title}</h2>
          </div>

          <div className="topbar-actions">
            <nav className="topbar-nav">
              {context.isAdmin ? (
                <NavLink className="nav-link" to="/admin">
                  Admin Panel
                </NavLink>
              ) : (
                <>
                  <NavLink className="nav-link" to="/dashboard">
                    Dashboard
                  </NavLink>
                  <NavLink className="nav-link" to="/results">
                    Results
                  </NavLink>
                </>
              )}
            </nav>

            <button className="ghost-button" onClick={context.onToggleTheme}>
              Switch Theme
            </button>

            <button className="ghost-button" onClick={handleLogout}>
              Log Out
            </button>
          </div>
        </header>

        {children}
      </main>
    </div>
  );
}

export default AppShell;
