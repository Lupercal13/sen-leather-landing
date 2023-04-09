import React from "react";
import background from "../assets/leather-bg.jpg";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaEnvelope, FaTwitterSquare, FaArrowDown } from "react-icons/fa";

const Hero = () => {
  return (
    <div>
      <img src={background} className=" h-screen w-full object-cover" />
      <div className="w-full h-screen absolute top-0 left-0 bg-black/30">
        <div className="h-full w-full flex flex-col justify-center items-center">
          <h1 className="font-bold  text-5xl md:text-6xl text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            Sen Leather Works
          </h1>
          <div>
            <h2 className="text-white font-semibold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]  text-2xl">
              Custom leather crafts
            </h2>
          </div>
          <div className="flex gap-8 mt-8 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            <BsFacebook
              size={30}
              className="hover:text-gray-300 cursor-pointer hover:scale-[105%] ease-out"
            />
            <BsInstagram
              size={30}
              className="hover:text-gray-300 cursor-pointer hover:scale-[105%] ease-out"
            />
            <FaTwitterSquare
              size={30}
              className="hover:text-gray-300 cursor-pointer hover:scale-[105%] ease-out"
            />
            <FaEnvelope
              size={30}
              className="hover:text-gray-300 cursor-pointer hover:scale-[105%] ease-out"
            />
          </div>
        <div className="mt-28">
            <p className=" flex gap-4 items-center text-2xl border rounded p-2 bg-white cursor-pointer hover:scale-[101%] hover:ease-out px-4">Contact Us <FaArrowDown/></p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
