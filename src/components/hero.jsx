import React from "react";
import { useState } from "react";
import Switch from "./switch";
import endgame from "../assets/endgame.mp3";
import { useEffect } from "react";
import { useRef } from "react";

const Hero = () => {
  const [clicked, setClicked] = useState(true);
  const myRef = useRef()

  const handleChange = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    if (clicked) {
      myRef.current.play()
    } else {
      myRef.current.pause();
    }
  }, [clicked]);

  return (
    <div className="hero-section">
      <div className="hero-text">
        <h3 className="intro text-[28px] md:text-[50px]">FACE FRONT, TRUE BELIEVERS!</h3>
      </div>
      <audio ref={myRef} src={endgame} loop />
      <Switch checked={clicked} onChange={handleChange} />
    </div>
  );
};

export default Hero;
