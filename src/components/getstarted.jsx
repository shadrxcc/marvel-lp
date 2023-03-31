import BlackButton from "./button";
import hammer from "../assets/hammer.svg";
import { useRef } from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const Getstarted = () => {
  return (
    <div className="get-started flex flex-col-reverse items-center px-5 py-14 justify-around gap-y-[5em] md:flex-row md:row-gap-[10em]">
      <div className="marvel-unlimited px-5 md:px-0">
        <h3>MARVEL UNLIMITED</h3>
        <p className="pt-2 pb-6">
          Get access to over 29,000+ comics and learn about the lives and
          journeys of your favourite marvel characters.{" "}
        </p>
        <BlackButton text={`GET STARTED`} />
      </div>

      <div className="flex">
        <Player src="https://lottie.host/9400798c-a488-4072-94d8-1ba9dd48fba6/NVYgdxDrxg.json" className="player absolute w-[20em] flex" loop autoplay/>
          <img src={hammer} className="w-[20em] hammer" alt="thor's hammer" />
      </div>
    </div>
  );
};

export default Getstarted;
