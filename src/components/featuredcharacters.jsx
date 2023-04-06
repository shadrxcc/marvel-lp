import React, { useEffect } from "react";
import { featChar } from "./images";

import { gsap } from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)


const Featuredcharacters = () => {
  useEffect(() => {
    gsap.timeline({ scrollTrigger: {
        trigger: '.character-container',
        x: 200,
        end: '+=900',
        scrub: 'true'
      }
    })
    .to('.character', {
      x: -1170,
      delay: 10
    })

  })
  return (
    <>
      <div id="character-main">
        
        <div className="character-container slider">
          {featChar.map((character, id) => {
            const { char, heroname, name } = character;
            return (
              <>
                  <div className="relative character" id="character" key={id}>
                    <img className="w-[16em]" src={char} />
                    <div className="character-detail">
                      <span>{heroname.toUpperCase()}</span>
                      <span>{name}</span>
                    </div>
                  </div>
              </>
            );
          })}
       </div>
      </div>
    </>
  );
};

export default Featuredcharacters;
