import React from "react";
import locations from "../assets/world.svg";
import { RedButton } from "./button";

const Insider = () => {
  return (
    <div className="location-insider lg:flex-row">
      <div>
        <img className="w-[50em]" src={locations} alt="locations" />
      </div>
      <div id="insider">
        <p id="marvel-insider">Marvel Insider</p>
        <p id="watch-earn">Watch, Earn, Redeem!</p>
        <p className="reward pt-[7px] pb-[21px]">
          Get rewarded for doing what you already do as a fan.
        </p>
        <RedButton text={`GET STARTED`} />
      </div>
    </div>
  );
};

export default Insider;
