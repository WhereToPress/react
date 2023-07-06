import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <div>
        <NavLink to="/profile" className = { selectLink => selectLink.isActive ? style.active : style.item }>Profile</NavLink>
      </div>
      <div>
        <NavLink to="/dialogs" className = { selectLink => selectLink.isActive ? style.active : style.item }>Messages</NavLink>
      </div>
      <div>
        <NavLink to="/news" className = { selectLink => selectLink.isActive ? style.active : style.item }>News</NavLink>
      </div>
      <div>
        <NavLink to="/music" className = { selectLink => selectLink.isActive ? style.active : style.item }>Music</NavLink>
      </div>
      <div>
        <NavLink to="/settings" className = { selectLink => selectLink.isActive ? style.active : style.item }>Settings</NavLink>
      </div>
      <div>
        <NavLink to="/users" className = { selectLink => selectLink.isActive ? style.active : style.item }>Users</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;