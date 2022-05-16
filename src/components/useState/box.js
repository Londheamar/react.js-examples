import React from "react";

export const Box = (props) => {
  let backgr = {
    backgroundColor: props.on ? "#222222" : "",
  };

  return (
    <div
      class="box"
      style={backgr}
      onClick={() => props.toggle(props.id)}
    ></div>
  );
};
