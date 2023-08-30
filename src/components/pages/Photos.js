import { useContext } from "react";

import { DarkModeContext } from "../context/DarkModeContext";

const Photos = () => {
  const { darkMode } = useContext(DarkModeContext);

  const photoProvider = () => {
    if (darkMode) {
      return <p>darkmode</p>;
    }
    return <p>lightmode</p>;
  };

  return (
    <div
      className={
        darkMode ? `landing-container content-dark` : `landing-container`
      }
    >
      <div>welcome to the photos page</div>
      <div className="example-text">{photoProvider()}</div>
    </div>
  );
};

export default Photos;
