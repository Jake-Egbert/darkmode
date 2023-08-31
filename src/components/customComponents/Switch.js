import React, { useContext } from "react";

import { DarkModeContext } from "../context/DarkModeContext";

const Switch = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const handleSwitch = () => {
    toggleDarkMode();
  };

  return (
    <>
      <input
        checked={darkMode}
        onChange={handleSwitch}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        className="react-switch-label"
        htmlFor={`react-switch-new`}
        style={{ background: darkMode && "#06d6a0" }}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default Switch;
