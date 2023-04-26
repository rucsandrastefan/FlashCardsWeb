import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink, Link } from "react-router-dom";
const NavbarA = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav>
      <div className="flex justify-between items-center h-22 w-full mx-auto px-4 text-[#9fa0ff]  bg-white mb-8">
        <h1 className="w-full text-5xl font-bold text-[#020202]">Memo.</h1>
        <ul className="hidden md:flex ">
          <li className="p-4 text-xl font-semibold">
            <NavLink to="/MainPage" exact>
              Home
            </NavLink>
          </li>
          <li className="p-4 text-xl font-semibold">
            <NavLink to="/Boards" exact>
              Boards
            </NavLink>
          </li>
          <li className="p-4 text-xl font-semibold">
            <NavLink to="/Profile" exact>
              Profile
            </NavLink>
          </li>

          <li className="p-4 text-xl font-semibold">
            <NavLink to="/Contact" exact>
              Contact
            </NavLink>
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-[#e5e6e5] bg-[#8e94f2] ease-in-out duration-500"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl font-bold text-[#e5e6e5] m-4">
            Memo.
          </h1>
          <li className="p-4 border-b text-white border-[#e5e6e5] font-semibold">
            Home
          </li>
          <li className="p-4 border-b text-white border-[#e5e6e5] font-semibold">
            Sign In
          </li>
          <li className="p-4 border-b text-white border-[#e5e6e5] font-semibold">
            About
          </li>
          <li className="p-4 border-b text-white border-[#e5e6e5] font-semibold">
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarA;
