import React from "react";
import { featChar } from "./images";

const Featuredcharacters = () => {
  return (
    <div id="character-main">
      <div className="character-container">
        {featChar.map((character, id) => {
          const { char, heroname, name } = character;
          return (
            <div className="relative" id="character" key={id}>
              <img className="w-[16em]" src={char} />
              <div className="character-detail">
                <span>{heroname.toUpperCase()}</span>
                <span>{name}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Featuredcharacters;
