import React, { useState } from 'react';
import logoImage from '../assets/logo2.jpg';
import logo from '../assets/download.png';
import close from '../assets/exit.png';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => setToggle(!toggle);

  return (
    <div className="w-full h-[80px] z-10 bg-gray-100 fixed drop-shadow-lg relative">
      <div className="flex justify-between items-center w-full md:max-w-[1240px] m-auto">
        <div className="flex items-center">
          <img
            src={logoImage}
            alt=""
            className="sm:ml-10 ss:ml-10 md:ml-3 opacity-[85%] w-full h-[25px]"
          />
        </div>
        <div className={`flex items-center`}>
          <ul className="hidden md:flex py-4">
            <li className="hover:text-blue-500 cursor-pointer">Home</li>
            <li className="hover:text-blue-500 cursor-pointer">About</li>
            <li className="hover:text-blue-500 cursor-pointer">Contact</li>
            <li className="hover:text-blue-500 cursor-pointer">Blog</li>
            <li className="hover:text-blue-500 cursor-pointer">Latest</li>
          </ul>
        </div>
        <div className="hidden md:flex sm:mr-10 md:mr-10">
          <button className="border-none bg-transparent text-black mr-4 hover:text-blue-500 cursor-pointer">
            Login
          </button>
          <button className="px-8 py-3 hover:bg-blue-500 hover:text-white cursor-pointer">
            Sign Up
          </button>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          <img
            src={!toggle ? logo : close}
            alt="menu"
            className="w-[28px] h-[28px] object-contain mr-10 cursor-pointer"
          />
        </div>
      </div>
      <ul className={toggle ? 'absolute bg-white w-full px-8 md:hidden' : 'hidden'}>
        <li className="hover:text-blue-500 cursor-pointer">Home</li>
        <li className="hover:text-blue-500 cursor-pointer">About</li>
        <li className="hover:text-blue-500 cursor-pointer">Contact</li>
        <li className="hover:text-blue-500 cursor-pointer">Blog</li>
        <li className="hover:text-blue-500 cursor-pointer">Latest</li>
        <div className="flex flex-col my-4">
          <button className="border-none bg-transparent text-black mb-4 py-3 px-8 hover:text-blue-500 cursor-pointer">
            Login
          </button>
          <button className="px-8 py-3 bg-blue-500 text-white hover:bg-blue-600 cursor-pointer">
            Sign Up
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
