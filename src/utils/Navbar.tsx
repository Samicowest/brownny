import React, { useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineShopping } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex gap-4 flex-col md:flex-row justify-between px-4 items-center h-auto max-w-5xl mx-auto py-4">
      <div>
        <h1 className="text-3xl font-bold font-plays text-brown">Brownny</h1>
      </div>
      <div className="hidden md:flex w-[45%] justify-between">
        <div>
          <ul className="flex space-x-8">
            <li className="text-lg font-bold cursor-pointer transition-colors duration-300 hover:text-brown">
              About
            </li>
            <li className="text-lg font-bold cursor-pointer transition-colors duration-300 hover:text-brown">
              Shop
            </li>
            <li className="text-lg font-bold cursor-pointer transition-colors duration-300 hover:text-brown">
              Contact
            </li>
            <li className="text-lg font-bold cursor-pointer transition-colors duration-300 hover:text-brown">
              Faq
            </li>
          </ul>
        </div>
      </div>
      <div className="flex space-x-4">
        <div className="relative">
          <IoPersonOutline className="text-red-900 text-3xl" />
        </div>
        <div className="relative">
          <AiOutlineShopping className="text-red-900 text-3xl" />
          <span className="absolute -bottom-2 bg-green-800 text-center -right-3 border border-1 border-brown rounded-full h-5 w-5 p-[2px] text-white text-xs">
            2
          </span>
        </div>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu}>
          {isOpen ? (
            <FaTimes className="text-3xl text-brown" />
          ) : (
            <FaBars className="text-3xl text-brown" />
          )}
        </button>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } w-full md:hidden bg-white shadow-md`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4">
          <li className="text-lg font-bold cursor-pointer transition-colors duration-300 hover:text-brown">
            About
          </li>
          <li className="text-lg font-bold cursor-pointer transition-colors duration-300 hover:text-brown">
            Shop
          </li>
          <li className="text-lg font-bold cursor-pointer transition-colors duration-300 hover:text-brown">
            Contact
          </li>
          <li className="text-lg font-bold cursor-pointer transition-colors duration-300 hover:text-brown">
            Faq
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
