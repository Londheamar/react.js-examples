import React, { useState } from "react";
import { Box } from "./box";
import boxes from "./boxes";
export const ShowBoxes = () => {
  const [boxs, setBox] = useState(boxes);

  const toggleBox = (id) => {
    setBox((prevState) => {
      return prevState.map((stat) => {
        return stat.id === id ? { ...stat, on: !stat.on } : stat;
      });
    });
  };

  let boxe = boxs.map((box) => (
    <Box key={box.id} id={box.id} on={box.on} toggle={toggleBox} />
  ));

  return <>{boxe}</>;
};
