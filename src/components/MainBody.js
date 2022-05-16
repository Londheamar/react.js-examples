import React, { useEffect, useState } from "react";
import { componentsList } from "./ComponentsList";
import { MainBox } from "./MainBox";
import { NavLeft } from "./NavLeft";

export const MainBody = () => {
  const [component, setComp] = useState(componentsList.home);
  const [className, setClass] = useState("home"); // active class update on click

  // update component on click
  const updateComponent = (comp) => {
    componentsList[comp] !== undefined
      ? setComp(componentsList[comp])
      : setComp(componentsList.error);
    document.getElementsByClassName(comp)[0].classList.add("active");
    setClass(comp);
  };

  // update remove active class from other li
  useEffect(() => {
    let elem = document.querySelectorAll(".navleft--navleft li");
    for (let i = 0; i < elem.length; i++) {
      if (!elem[i].classList.value.includes(className)) {
        elem[i].classList.remove("active");
      }
    }
  });

  return (
    <div className="main">
      <NavLeft
        list={Object.keys(componentsList)}
        updateComponent={updateComponent}
      />
      <MainBox heading={component.heading} content={component.comp} />
    </div>
  );
};
