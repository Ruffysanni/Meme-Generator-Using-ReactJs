import { useEffect, useState } from "react";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemes, setAllMemeImages] = useState([]);
  useEffect(function () {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemeImages(data.data.memes));
  }, []);
  // console.log(allMemes);
  function getMemeImage() {
    const mmeRandomNum = Math.floor(Math.random() * allMemes.length);
    const getMemeUrl = allMemes[mmeRandomNum].url;
    setMeme((prevState) => {
      return {
        ...prevState,
        randomImage: getMemeUrl,
      };
    });
  }
  //Setting text on the Meme image
  function setTextOnMeme(event) {
    const { name, value } = event.target;
    setMeme((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }
  return (
    <>
      <div className="meme-div">
        <div className="form">
          <div className="input-divs">
            <input
              type="text"
              name="topText"
              id="topText"
              placeholder="top text"
              onChange={setTextOnMeme}
              value={meme.topText}
            />
            <input
              type="text"
              name="bottomText"
              id="bottomText"
              placeholder="bottom text"
              onChange={setTextOnMeme}
              value={meme.bottomText}
            />
          </div>
          <button className="meme-generator-button" onClick={getMemeImage}>
            Get new meme image{" "}
            <img
              src="../src/images/pic-frame.png"
              className="button-image"
              alt=""
            />
          </button>
        </div>
        <div className="meme">
          <img
            src={meme.randomImage}
            alt="meme-image"
            className="meme--image"
          />
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      </div>
    </>
  );
}
