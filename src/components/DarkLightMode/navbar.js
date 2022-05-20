import React from "react";
import Logo from "../../react-icon-small.png";

export default function NavbarDN(props) {
  return (
    <nav className={props.darkMode ? "dark darkNight--nav" : "darkNight--nav"}>
      <img className="darkNight--nav--logo_icon" src={Logo} />
      <h3 className="darkNight--nav--logo_text">ReactFacts</h3>

      <div className="darkNight--toggler">
        <p className="darkNight--toggler--light">Light</p>
        <div
          className="darkNight--toggler--slider"
          onClick={props.toggleDarkMode}
        >
          <div className="darkNight--toggler--slider--circle"></div>
        </div>
        <p className="darkNight--toggler--dark">Dark</p>
      </div>
    </nav>
  );
}
