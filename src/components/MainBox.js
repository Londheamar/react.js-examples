import React from "react";

export const MainBox = (props) => {
  return (
    <div className="body">
      <div className="body--content">
        <div className="topHeading">{props.heading}</div>
        <div className="body--body">{props.content}</div>
      </div>
    </div>
  );
};
