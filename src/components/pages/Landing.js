import { useContext } from "react";

import { DarkModeContext } from "../context/DarkModeContext";

const Landing = () => {
  const { darkMode } = useContext(DarkModeContext);

  const landingProvider = () => {
    if (darkMode) {
      return <p>darkmode</p>;
    }
    return <p>lightmode</p>;
  };

  return (
    <div
      className={darkMode ? `page-container content-dark` : `page-container`}
    >
      <div>welcome to the landing page</div>
      <div className="example-text">{landingProvider()}</div>
    </div>
  );
};

export default Landing;
