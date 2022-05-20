import React from "react";
import Meme_logo from "../../meme_logo.png";

export const Header = () => {
  return (
    <header className="membox--header">
      <img alt="" src={Meme_logo} className="membox--header--image" />
      <h2 className="membox--header--title">Meme Generator</h2>
      <h4 className="membox--header--project">React Course - Project 3</h4>
    </header>
  );
};
