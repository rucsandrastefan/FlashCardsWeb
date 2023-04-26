import React from "react";
import NavbarA from "./components/NavbarA";
import Carousel from "./components/Carousel";
import SearchBar from "./components/Searchbar";
import { GiChessKing } from "react-icons/gi";
import { BsPostageHeart } from "react-icons/bs";
import {BiMath} from "react-icons/bi" 
import {MdLocalMovies} from "react-icons/md"
import {BiBook} from "react-icons/bi"
import {FaNotesMedical} from "react-icons/fa"
import { IconContext } from "react-icons";
const MainPage = () => {
  return (
    <div>
      <NavbarA />
      <SearchBar />
      <Carousel />
      <div className="grid grid-cols-3 gap-8 px-24 mt-16">
        <div className="flex align-middle items-center bg-white h-24 rounded-xl ">
          <IconContext.Provider value={{ size: 45, color: "#9fa0ff" }}>
            <div className="flex pl-8 ">
              {" "}
              <GiChessKing />
            </div>
          </IconContext.Provider>
          <div className="flex justify-center items-center flex-1">
            <p className="font-bold text-2xl text-center text-[#9fa0ff]">
              History
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center bg-white h-24 rounded-xl ">
        <IconContext.Provider value={{ size: 45, color: "#9fa0ff" }}>
            <div className="flex pl-8 ">
              {" "}
              <BsPostageHeart />
            </div>
          </IconContext.Provider>
          <div className="flex justify-center items-center flex-1">
            <p className="font-bold text-2xl text-center text-[#9fa0ff]">
              Art
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center bg-white h-24 rounded-xl ">
        <IconContext.Provider value={{ size: 45, color: "#9fa0ff" }}>
            <div className="flex pl-8 ">
              {" "}
              <BiMath />
            </div>
          </IconContext.Provider>
          <div className="flex justify-center items-center flex-1">
            <p className="font-bold text-2xl text-center text-[#9fa0ff]">
              Math
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center bg-white h-24 rounded-xl ">
        <IconContext.Provider value={{ size: 45, color: "#9fa0ff" }}>
            <div className="flex pl-8 ">
              {" "}
              <MdLocalMovies />
            </div>
          </IconContext.Provider>
          <div className="flex justify-center items-center flex-1">
            <p className="font-bold text-2xl text-center text-[#9fa0ff]">
              Movies
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center bg-white h-24 rounded-xl ">
        <IconContext.Provider value={{ size: 45, color: "#9fa0ff" }}>
            <div className="flex pl-8 ">
              {" "}
              <BiBook />
            </div>
          </IconContext.Provider>
          <div className="flex justify-center items-center flex-1">
            <p className="font-bold text-2xl text-center text-[#9fa0ff]">
              Literature
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center bg-white h-24 rounded-xl ">
        <IconContext.Provider value={{ size: 41, color: "#9fa0ff" }}>
            <div className="flex pl-8 ">
              {" "}
              < FaNotesMedical/>
            </div>
          </IconContext.Provider>
          <div className="flex justify-center items-center flex-1">
            <p className="font-bold text-2xl text-center text-[#9fa0ff]">
              Medicine
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
