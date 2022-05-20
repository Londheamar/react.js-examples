import React from "react";

export const MainBox = (props) => {
  return (
    <div className="mainbox">
      <div className="mainbox--content">
        <div className="topHeading">{props.heading}</div>
        <div className="mainbox--body">{props.content}</div>
      </div>
    </div>
  );
};
