import { NavLink } from "react-router-dom";
import { useContext } from "react";

import { DarkModeContext } from "../context/DarkModeContext";
import Switch from "../customComponents/Switch";

export default function Navbar() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div
      className={darkMode ? "navbar-container navbar-dark" : "navbar-container"}
    >
      {/* <FontAwesomeIcon icon="clapperboard" /> */}
      <NavLink exact to="/photos">
        <p>Photos</p>
      </NavLink>
      <NavLink exact to="/">
        <p>Landing</p>
      </NavLink>
      <div className="switch-wrapper">
        <p>Dark Mode</p>
        <Switch />
      </div>
    </div>
  );
}
