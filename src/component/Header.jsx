// src/components/Header.js
import React from "react";
import logo from "../assets/images/logo.png";
import CitySelect from "./CitySelect";
import { IoIosArrowDown } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";

const Header = () => {
  return (
    <header className="flex justify-between items-center h-[80px] py-3 px-9 shadow-md ">
      <div className="flex items-center h-full">
        <img src={logo} alt="Logo" className="h-full" />
      </div>
      <div className="flex items-center h-full py-1">
        <CitySelect />
      </div>
      <div className="flex gap-4 h-11 justify-center items-center py-1">
        <div className="flex justify-center items-center bg-[#0177b41a] rounded-3xl text-sm ps-5  pe-2 h-full py-1 gap-3 border border-blue-200 hover:scale-105 ease-in-out transform transition-all duration-300">
          <p className="font-semibold text-sky-600 cursor-pointer">
            Post Property
          </p>
          <p className="bg-green-700 justify-center flex items-center py-[2px] rounded-3xl text-[11px] font-semibold px-5 text-white cursor-pointer">
            Free
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex justify-center items-center mr-2 gap-1">
            <p className="  cursor-pointer  ">Login</p>
            <IoIosArrowDown className=" text-gray-600 text-lg cursor-pointer" />
          </div>
          <CiMenuBurger className="text-xl stroke-[2px] w-5 h-5 text-gray-600 font-bold cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
