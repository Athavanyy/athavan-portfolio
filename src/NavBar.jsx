import { NavLink } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

export default function NavBar() {
  const { isAuthenticated, user, signOut, isAdmin } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <header className="navbar">
      <div className="logo">
        <div className="logo-shape">
          <span className="logo-text">AY</span>
        </div>
        <span className="logo-name">Athavan Yokanathan</span>
      </div>

      <nav className="nav-links">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
        <NavLink to="/education" className="nav-link">Skills</NavLink>
        <NavLink to="/projects" className="nav-link">Works</NavLink>
        <NavLink to="/contact" className="nav-link">Contact</NavLink>

        {isAuthenticated() ? (
          <>
            <NavLink to="/project-form" className="nav-link">My Projects</NavLink>
            <NavLink to="/education-form" className="nav-link">My Education</NavLink>
            {isAdmin() && (
              <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
            )}
            <span className="nav-user">Hello, {user?.name}</span>
            <button onClick={handleSignOut} className="nav-link nav-button">
              Sign Out
            </button>
          </>
        ) : (
          <>
            <NavLink to="/signin" className="nav-link">Sign In</NavLink>
            <NavLink to="/signup" className="nav-link">Sign Up</NavLink>
          </>
        )}
      </nav>
    </header>
  );
}

