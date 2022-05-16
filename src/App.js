import React from "react";
import { MainBody } from "./components/MainBody";
import { Navbar } from "./components/Navbar";
import "./index.css";

export const App = () => {
  return (
    <>
      <Navbar />
      <MainBody />
    </>
  );
};
