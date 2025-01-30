import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <NavLink to="/dashboard" activeClassName="active">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" activeClassName="active">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" activeClassName="active">
            Settings
          </NavLink>
        </li>
        <li>
          <NavLink to="/logout" activeClassName="active">
            Logout
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
