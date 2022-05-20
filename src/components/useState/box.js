import React from "react";

export const Box = (props) => {
  let backgr = {
    backgroundColor: props.on ? "#222222" : "",
    color: props.on ? "white" : "black",
  };

  return (
    <div class="box" style={backgr} onClick={() => props.toggle(props.id)}>
      {props.id}
      <br />
      {props.on ? "true" : "false"}
    </div>
  );
};
