import React from "react";
import { Header } from "./Header";
import { MemeGen } from "./MemeGen";

export const Meme = () => {
  return (
    <div className="membox">
      <Header />
      <MemeGen />
    </div>
  );
};
