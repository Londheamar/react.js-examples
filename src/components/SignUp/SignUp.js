import React, { useState } from "react";

export const SignUp = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    conpass: "",
    news: true,
  });
  console.log(userData);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setUserData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userData.password === userData.conpass) {
      alert("form submitted");
    } else {
      alert("password do not match");
      return;
    }
    if (userData.news) {
      alert("Thanks for subscribing newsletter");
    }
  };

  return (
    <div className="signup--main">
      <div className="signup--container">
        <form className="signup--form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={userData.email}
            placeholder="Email address"
            className="signup--form--input"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={userData.password}
            placeholder="Password"
            className="signup--form--input"
            onChange={handleChange}
          />
          <input
            type="password"
            name="conpass"
            value={userData.conpass}
            placeholder="Confirm password"
            className="signup--form--input"
            onChange={handleChange}
          />

          <div className="form--marketing">
            <input
              id="okayToEmail"
              name="news"
              type="checkbox"
              checked={userData.news}
              onChange={handleChange}
            />
            <label htmlFor="okayToEmail">I want to join the newsletter</label>
          </div>
          <button className="signup--form--submit-btn">Sign up</button>
        </form>
      </div>
    </div>
  );
};
