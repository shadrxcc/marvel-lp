import React from "react";
import { useState } from "react";
import Switch from "./switch";
import endgame from "../assets/endgame.mp3";
import { useEffect } from "react";

const Hero = () => {
  const [clicked, setClicked] = useState(false);

  const audio = new Audio(endgame);

  const handleChange = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    if (clicked) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [clicked]);

  return (
    <div className="hero-section">
      <div className="hero-text">
        <h3 className="intro">FACE FRONT, TRUE BELIEVERS!</h3>
      </div>
      <Switch checked={clicked} onChange={handleChange} />
    </div>
  );
};

export default Hero;
