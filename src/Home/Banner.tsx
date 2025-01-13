import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

import Img1 from "@/assets/design1.png";
import Img2 from "@/assets/design2.png";

const Banner: React.FC = () => {
  return (
    <div className="relative w-full flex-col md:flex-row overflow-hidden bg-pinkLight items-center flex justify-between ">
      <div className="h-[400px] w-full md:w-[40%]">
        <img
          src={Img1}
          alt="Right Full Height"
          className="w-full h-full object-cover object-bottom"
        />
      </div>
      <div className="w-full md:w-[50%] bg-pinkLight px-4 ">
        <h2 className="text-5xl font-plays font-bold py-8">Brownny</h2>
        <h3 className="text-2xl md:text-3xl font-kanit font-bold">
          Natural Skin Care Professional
        </h3>
        <p className="text-lg md:text-xl font-kanit font-light text-gray-500">
          Best treatment for curing stubborn white head
        </p>
        <button className="bg-gray-300 rounded-full px-4 py-2 mt-4 flex items-center transition-colors duration-300 delay-100 hover:bg-pinkHeavy">
          Shop Now <MdOutlineKeyboardDoubleArrowRight className="pl-2" />
        </button>
      </div>
      <img
        src={Img2}
        alt="Right Bottom Half"
        className="absolute hidden md:block right-0  md:bottom-0 h-1/2 object-cover"
      />
    </div>
  );
};

export default Banner;
