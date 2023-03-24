import React from "react";
import BlackButton from "./button";
import hammer from "../assets/hammer.svg";

const Getstarted = () => {
  return (
    <div className="get-started flex flex-col-reverse items-center px-5 py-14 justify-between md:flex-row md:row-gap-[10em]">
      <div className="marvel-unlimited px-5 md:px-0">
        <h3>MARVEL UNLIMITED</h3>
        <p className="pt-2 pb-6">
          Get access to over 29,000+ comics and learn about the lives and
          journeys of your favourite marvel characters.{" "}
        </p>
        <BlackButton text={`Get Started`} />
      </div>

      <div>
        <img src={hammer} className="w-[20em]" alt="thor's hammer" />
      </div>
    </div>
  );
};

export default Getstarted;
