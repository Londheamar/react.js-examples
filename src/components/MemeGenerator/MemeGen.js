import React, { useEffect, useState } from "react";

export const MemeGen = () => {
  const [meme, setMemImg] = useState({
    top: "",
    bottom: "",
    memeImage: "https://i.imgflip.com/1bh3.jpg",
  });
  const [memTest, setMemTest] = useState({
    top: "",
    bottom: "",
  });

  const [allMemes, setAllMemes] = useState([]);
  console.log(allMemes);
  const getMemeImage = () => {
    let random = Math.floor(Math.random() * allMemes.length);
    setMemImg((prevState) => ({
      ...prevState,
      top: memTest.top,
      bottom: memTest.bottom,
      memeImage: allMemes[random].url,
    }));
  };

  const saveTest = (e) => {
    let { name, value } = e.target;
    setMemTest((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  return (
    <main className="membox--main">
      <p></p>
      <div className="membox--form">
        <input
          type="text"
          placeholder="Top text"
          className="membox--form--input"
          name="top"
          onChange={saveTest}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="membox--form--input"
          name="bottom"
          onChange={saveTest}
        />
        <button onClick={getMemeImage} className="membox--form--button">
          Get a new meme image 🖼
        </button>
      </div>
      <div className="membox--meme--image">
        <img alt="" src={meme.memeImage} />
        <h2 className="membox--text top">{meme.top}</h2>
        <h2 className="membox--text bottom">{meme.bottom}</h2>
      </div>
    </main>
  );
};
