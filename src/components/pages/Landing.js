import React, { useContext, useState } from "react";

import { Text, LanguageContext } from "../context/LanguageContext";
import { DarkModeContext } from "../context/DarkModeContext";

const Landing = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [clickText, setClickText] = useState();
  const [selectedOption, setSelectedOption] = useState();
  const { dictionary } = useContext(LanguageContext);

  const landingProvider = () => {
    if (darkMode) {
      return <p>darkmode</p>;
    }
    return <p>lightmode</p>;
  };
  const selectOptions = ["option1", "option2", "option3"];

  const handleClick = () => {
    setClickText(<Text tid="buttonClicked" />);
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div
      className={darkMode ? `page-container content-dark` : `page-container`}
    >
      <div>welcome to the landing page</div>
      <div className="example-text">{landingProvider()}</div>
      <div>
        <h1>
          <Text tid="exploreHeader" />
        </h1>
        <p>
          <Text tid="welcomeDescription" />
        </p>

        <div>
          <input type="text" placeholder={dictionary.enterText} />
          <button onClick={handleClick}>
            <Text tid="clickMe" />
          </button>
          <p>{clickText}</p>
        </div>

        <div>
          <select onChange={handleOptionChange} value={selectedOption}>
            {selectOptions.map((option) => (
              <option key={option} value={option}>
                {dictionary[option]}
              </option>
            ))}
          </select>
        </div>

        <a
          href="https://halilcanozcelik.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Text tid="aboutMe" />
        </a>
      </div>
    </div>
  );
};

export default Landing;
