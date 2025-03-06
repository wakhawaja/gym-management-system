import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar" aria-label="Sidebar Navigation">
      <ul>
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Settings
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/logout"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Logout
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
