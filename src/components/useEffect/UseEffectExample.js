import React, { useEffect, useState } from "react";
import { OtherApi } from "./otherApi";
import { GithubUser } from "./GithubUser";

export const UseEffectExample = () => {
  return (
    <div className="useEffect">
      <div className="p">This is am example of useEffect and API</div>
      <GithubUser />
      <OtherApi />
    </div>
  );
};
