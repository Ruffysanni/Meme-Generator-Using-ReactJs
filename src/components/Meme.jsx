import datas from "../MemeData.jsx";
import { useState } from "react";

export default function Meme() {
  // const [memeImage, setmemeImage] = useState("http://i.imgflip.com/1bij.jpg");
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allImages, setAllMemeImages] = useState(datas);

  function getMemeImage() {
    const memeArray = allImages.data.memes;
    const mmeRandomNum = Math.floor(Math.random() * memeArray.length);
    const getMemeUrl = memeArray[mmeRandomNum].url;
    setMeme((prevState) => {
      return {
        ...prevState,
        randomImage: getMemeUrl,
      };
    });
    // setmemeImage(getMemeUrl);
  }
  return (
    <>
      <div className="meme-div">
        <div className="form">
          <div className="input-divs">
            <input type="text" name="" id="" placeholder="top text" />
            <input type="text" name="" id="" placeholder="bottom text" />
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
        <div className="meme-image-div">
          <img src={meme.randomImage} alt="" />
        </div>
      </div>
    </>
  );
}
