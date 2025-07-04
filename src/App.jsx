import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SwipeCarousel from "./SwipeCarousel";
import Swipe from "./Swipe/Swipe";
import ImageTransition from "./HeroPage/ImageTransition";
import Navbar from "./Nav/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="scroll" style={{ background: "white" }}>
        <Navbar/>
        <ImageTransition/>
        <SwipeCarousel />
        {/* <Swipe/> */}
      </div>
    </>
  );
}

export default App;
