import React from "react";
import Navbar from "./Navbar";
import { BiBook } from "react-icons/bi";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa"


const LiteratureComponent = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center drop-shadow ">
        {" "}
        <div className="flex justify-center items-center  bg-white h-24 w-3/6 rounded-lg px-8 mt-4 animate-">
          <BiBook size={40} color="#9fa0ff" />
          <h1 className="text-2xl font-bold text-[#9fa0ff] ml-4">Literature</h1>
        </div>
      </div>
      <div className="flex justify-between mx-24"> 
      <div className="  flex items-center justify-end">
        <button
          className="bg-[#9fa0ff] rounded-lg px-8 py-4 text-white hover:bg-[#babbff] hover:text-white transition-all duration-300 justify-center"
          onClick={() => window.location.href = "/moviescomponent"}
        >
          <FaArrowLeft size={24} color="white" />
        </button>
      </div>
      <div className="  flex items-center justify-start">
        <button
          className="bg-[#9fa0ff] rounded-lg px-8 py-4 text-white hover:bg-[#babbff] hover:text-white transition-all duration-300 justify-center"
          onClick={() => window.location.href = "/medcomponent"}
        >
          <FaArrowRight size={24} color="white" />
        </button>
      </div></div>
      <div className="grid grid-cols-3 gap-8 px-24 mt-20 h-24 ">
      <button className="bg-[#9fa0ff] rounded-lg px-4 py-2 text-white hover:bg-[#babbff] hover:text-white transition-all duration-300 h-24">
          <p className="font-semibold text-2xl text-center">Famous authors</p>
        </button>
        <button className="bg-[#9fa0ff] rounded-lg px-4 py-2 text-white hover:bg-[#babbff] hover:text-white transition-all duration-300 h-24">
          <p className="font-semibold text-2xl text-center text-white">
          Literary periods
          </p>
        </button>
        <button className="bg-[#9fa0ff] rounded-lg px-4 py-2 text-[#e5e6e5] hover:bg-[#babbff] hover:text-white transition-all duration-300 h-24">
          <p className="font-semibold text-2xl text-center text-white">
          Genres
          </p>
        </button>
        <button className="bg-[#9fa0ff] rounded-lg px-4 py-2 text-[#e5e6e5] hover:bg-[#babbff] hover:text-white transition-all duration-300 h-24">
          <p className="font-semibold text-2xl text-center text-white">
          Symbolism and themes
          </p>
        </button>
        <button className="bg-[#9fa0ff] rounded-lg px-4 py-2 text-[#e5e6e5] hover:bg-[#babbff] hover:text-white transition-all duration-300 h-24">
          <p className="font-semibold text-2xl text-center text-white">
          Literary awards
          </p>
        </button>
        <button className="bg-[#9fa0ff] rounded-lg px-4 py-2 text-[#e5e6e5] hover:bg-[#babbff] hover:text-white transition-all duration-300 h-24">
          <p className="font-semibold text-2xl text-center text-white">
          Classic Literature
          </p>
        </button>
        <button className="bg-[#9fa0ff] rounded-lg px-4 py-2 text-[#e5e6e5] hover:bg-[#babbff] hover:text-white transition-all duration-300 h-24">
          <p className="font-semibold text-2xl text-center text-white">
          Female Authors and Their Works
          </p>
        </button>
        <button className="bg-[#9fa0ff] rounded-lg px-4 py-2 text-[#e5e6e5] hover:bg-[#babbff] hover:text-white transition-all duration-300 h-24">
          <p className="font-semibold text-2xl text-center text-white">
          Award-Winning Novels
          </p>
        </button>
        <button className="bg-[#9fa0ff] rounded-lg px-4 py-2 text-[#e5e6e5] hover:bg-[#babbff] hover:text-white transition-all duration-300 h-24">
          <p className="font-semibold text-2xl text-center text-white">
          Poetry and Poets
          </p>
        </button>
      </div>
    </div>
  );
};

export default LiteratureComponent;
