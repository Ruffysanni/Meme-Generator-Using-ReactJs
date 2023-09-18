import datas from "../MemeData.jsx";
import { useState } from "react";

export default function Meme() {
  //   const result = useState("Yes");

  //   const [isImportant, setImportant] = useState();
  //   const [count, setCount] = useState(0);
  const [memeImage, setmemeImage] = useState("");
  function getMemeImage() {
    const memeArray = datas.data.memes;
    const mmeRandomNum = Math.floor(Math.random() * memeArray.length);
    const getMemeUrl = memeArray[mmeRandomNum].url;
    setmemeImage(getMemeUrl);
    // console.log(result);
  }
  //   function addCount() {
  //     // setCount(count + 1);
  //     setCount(function (count) {
  //       return count + 1;
  //     });
  //   }
  //   function minusCount() {
  //     setCount(function (count) {
  //       return count - 1;
  //     });
  //   }

  //   function handleClick() {
  //     setImportant("It is a yes or yes! No room for No!");
  //   }
  return (
    <>
      <div className="meme-div">
        <div className="form">
          <div className="input-divs">
            <input type="text" name="" id="" placeholder="top text" />
            <input type="text" name="" id="" placeholder="bottom text" />
          </div>
          <button
            className="meme-generator-button"
            onClick={getMemeImage}
            // onClick={handleClick}
          >
            Get new meme image{" "}
            <img
              src="../src/images/pic-frame.png"
              className="button-image"
              alt=""
            />
          </button>
        </div>
        <img src={memeImage} alt="" />
      </div>
      {/* <div className="counter">
        <button className="counter-minus" onClick={minusCount}>
          -
        </button>
        <div className="counter-count">
          <h1>{count}</h1>
        </div>
        <button className="counter-plus" onClick={addCount}>
          +
        </button>
      </div> */}
    </>
  );
}
