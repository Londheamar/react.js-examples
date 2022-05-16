import React from "react";
import Logo from "../londhe-amar-logo.png";

export const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav--logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="nav--nav">
        <ul>
          <li>link 1</li>
          <li>link 2</li>
          <li>link 3</li>
        </ul>
      </div>
    </div>
  );
};
