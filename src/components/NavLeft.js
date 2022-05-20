import React from "react";

export const NavLeft = (props) => {
  let navList = props.list.map((list, index) =>
    list !== "error" ? (
      <li
        key={index}
        className={list === "home" ? "home navleft--link--active" : list}
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
      <div className="navleft--links">
        <ul>{navList}</ul>
      </div>
    </div>
  );
};
