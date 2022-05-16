import React from "react";

export const NavLeft = (props) => {
  let navList = props.list.map((list, index) =>
    list !== "error" ? (
      <li
        key={index}
        className={list === "home" ? "home active" : list}
        onClick={() => props.updateComponent(list)}
      >
        {list}
      </li>
    ) : (
      ""
    )
  );

  return (
    <div className="navleft">
      <div className="navleft--navleft">
        <ul>{navList}</ul>
      </div>
    </div>
  );
};
