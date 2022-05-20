import React from "react";

export const Main = (props) => {
  return (
    <main
      className={props.darkMode ? "dark darkNight--main" : "darkNight--main"}
    >
      <h1 className="darkNight--title">Fun facts about React</h1>
      <ul className="darkNight--facts">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  );
};
