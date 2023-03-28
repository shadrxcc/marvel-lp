import BlackButton from "./button";
import hammer from "../assets/hammer.svg";
import Lottie from "lottie-web";
import { useEffect } from "react";
import { useRef } from "react";
import lightning from '../assets/65922-red-lightning.json'
import { Player } from "@lottiefiles/react-lottie-player";

const Getstarted = () => {

  const container = useRef(null)
// useEffect(() => {
// Lottie.loadAnimation({
//   container: container.current,
//   renderer: 'svg',
//   loop: true,
//   autoplay: true,
//   animationData: lightning
// })
// }, [])

//https://assets5.lottiefiles.com/packages/lf20_g1wiidwh.json
  return (
    <div className="get-started flex flex-col-reverse items-center px-5 py-14 justify-around md:flex-row md:row-gap-[10em]">
      <div className="marvel-unlimited px-5 md:px-0">
        <h3>MARVEL UNLIMITED</h3>
        <p className="pt-2 pb-6">
          Get access to over 29,000+ comics and learn about the lives and
          journeys of your favourite marvel characters.{" "}
        </p>
        <BlackButton text={`GET STARTED`} />
      </div>

      <div className="">
        {/* <Player src="https://assets5.lottiefiles.com/packages/lf20_g1wiidwh.json" className="player" loop autoplay/> */}
          <img src={hammer} className="w-[20em] hammer" alt="thor's hammer" />
      
        
      </div>
    </div>
  );
};

export default Getstarted;
