import React, { useState } from "react";
import { Main } from "./Main";
import NavbarDN from "./navbar";

export const DarkNightMode = () => {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="darkNight--container">
      <NavbarDN darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Main darkMode={darkMode} />
    </div>
  );
};
