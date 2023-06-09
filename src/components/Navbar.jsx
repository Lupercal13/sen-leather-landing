import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "../assets/sen-leather-logo.jpg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <nav className="bg-black/50 h-20 w-full fixed z-10 pt-2 pr-6">
      <div className="text-white flex justify-between items-center">
        {/* <img src={logo} alt="" className="h-[100px] rounded-full"/> */}
        <h1 style={{fontFamily:"Noto Sans JP"}} className="text-2xl ml-4">センレザーワークス</h1>
        <div className="hidden sm:flex">
          <ul className="flex gap-4 mr-8 text-lg">
            <a href="#home">
              <li className="cursor-pointer hover:text-gray-300 hover:scale-[102%] hover:ease-out ">
              トップへ
              </li>
            </a>
            <a href="#about">
              <li className="cursor-pointer hover:text-gray-300 hover:scale-[102%] hover:ease-out ">
              私達について
              </li>
            </a>
            <a href="#about">
              <li className="cursor-pointer hover:text-gray-300 hover:scale-[102%] hover:ease-out ">
              すること
              </li>
            </a>
            <a href="#gallery">
              <li className="cursor-pointer hover:text-gray-300  hover:scale-[102%] hover:ease-out">
              作品
              </li>
            </a>
            <a href="#contact">
              <li className="cursor-pointer hover:text-gray-300  hover:scale-[102%] hover:ease-out">
              お問い合わせ
              </li>
            </a>
          </ul>
        </div>
        {/* Hamburger Menu */}
        <div
          onClick={handleNav}
          className="block z-10 cursor-pointer sm:hidden mr-4"
        >
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
        <div
          className={
            nav
              ? "md:hidden fixed top-0 left-0 w-full h-screen bg-black/75 flex justify-center items-center ease-in duration-300"
              : "md:hidden fixed top-[-100%] left-0 w-full h-screen bg-black/75 flex justify-center items-center ease-in duration-300 "
          }
        >
          <ul>
            <a href="#home">
              <li
                onClick={() => setNav(false)}
                className="p-4 text-3xl font-bold hover:text-gray-300 cursor-pointer"
              >
                トップへ
              </li>
            </a>
            <a href="#about">
              <li
                onClick={() => setNav(false)}
                className="p-4 text-3xl font-bold hover:text-gray-300 cursor-pointer"
              >
                私達について
              </li>
            </a>
            <a href="#about">
              <li
                onClick={() => setNav(false)}
                className="p-4 text-3xl font-bold hover:text-gray-300 cursor-pointer"
              >
                すること
              </li>
            </a>
            <a href="#gallery">
              <li
                onClick={() => setNav(false)}
                className="p-4 text-3xl font-bold hover:text-gray-300 cursor-pointer"
              >
                作品
              </li>
            </a>
            <a href="#contact">
              <li
                onClick={() => setNav(false)}
                className="p-4 text-3xl font-bold hover:text-gray-300 cursor-pointer"
              >
                お問い合わせ
              </li>
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
