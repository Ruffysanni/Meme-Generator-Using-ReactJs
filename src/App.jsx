import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Header from "./components/Header";
import "./style.css";
import Meme from "./components/Meme";

function App() {
  return (
    <>
      <Header />
      <Meme />
    </>
  );
}

export default App;
