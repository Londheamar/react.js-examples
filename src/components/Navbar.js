import React from "react";
import Logo from "../londhe-amar-logo.png";

export const Navbar = () => {
  return (
    <div className="topnav">
      <div className="topnav--logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="topnav--links">
        <ul>
          <li>link 1</li>
          <li>link 2</li>
          <li>link 3</li>
        </ul>
      </div>
    </div>
  );
};
