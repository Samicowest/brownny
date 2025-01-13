import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const NewsLetter: React.FC = () => {
  return (
    <div className="bg-pinkLight px-4 py-8">
      <div className="flex flex-col gap-4 items-center p-4 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold font-kanit mb-4">
          Sign up now & get 10% off
        </h2>
        <h2 className="text-md  text-gray-400 mb-4">
          Subscribe to our emails (they’re super fun, promise) and get 15% off
          your first online order
        </h2>
        <input
          type="email"
          placeholder="Input your email"
          className="mb-4 p-2 rounded-xl border w-[60%] border-gray-300 focus:outline-pink"
        />
        <button className="bg-gray-300 rounded-full px-4 py-2 mt-4 flex items-center transition-colors duration-300 delay-100 hover:bg-pinkHeavy">
          Shop Now <MdOutlineKeyboardDoubleArrowRight className="pl-2" />
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
