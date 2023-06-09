import React from "react";
import Navbar from "./Navbar";
import { BiBook } from "react-icons/bi";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa"
import { useNavigate } from "react-router-dom";

const LiteratureComponent = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center drop-shadow ">
        {" "}
        <div className="flex justify-center items-center  bg-white h-20 w-3/6 rounded-lg px-8 mt-8 animate-">
          <BiBook size={40} color="#9fa0ff" />
          <h1 className="text-2xl font-bold text-[#9fa0ff] ml-4">Literature</h1>
        </div>
      </div>
      <div className="flex justify-between mx-24"> 
      <div className="  flex items-center justify-end">
        <button
          className="bg-[#9fa0ff] rounded-lg px-8 py-4 text-white hover:bg-[#babbff] hover:text-white transition-all duration-300 justify-center"
        
          onClick={() => navigate('/moviescomponent') } 
        >
          <FaArrowLeft size={24} color="white" />
        </button>
      </div>
      <div className="  flex items-center justify-start">
        <button
          className="bg-[#9fa0ff] rounded-lg px-8 py-4 text-white hover:bg-[#babbff] hover:text-white transition-all duration-300 justify-center"

          onClick={() => navigate('/medcomponent') } 
        >
          <FaArrowRight size={24} color="white" />
        </button>
      </div></div>
      <div className="grid grid-cols-3 gap-8 px-24 mt-16 h-24 ">
      <button className="bg-[#9fa0ff] rounded-lg px-4 py-2 text-white hover:bg-[#babbff] hover:text-white transition-all duration-300 h-24" onClick={() => navigate('/flashcards/famousauthors')}>
          <p className="font-semibold text-2xl text-center">Famous authors</p>
        </button>
        <button className="bg-[#9fa0ff] rounded-lg px-4 py-2 text-white hover:bg-[#babbff] hover:text-white transition-all duration-300 h-24" onClick={() => navigate('/flashcards/periods')}>
          <p className="font-semibold text-2xl text-center text-white">
          Literary periods
          </p>
        </button>
        <button className="bg-[#9fa0ff] rounded-lg px-4 py-2 text-[#e5e6e5] hover:bg-[#babbff] hover:text-white transition-all duration-300 h-24" onClick={() => navigate('/flashcards/famousworks')}>
          <p className="font-semibold text-2xl text-center text-white">
          Famous works
          </p>
        </button>
        <button className="bg-[#9fa0ff] rounded-lg px-4 py-2 text-[#e5e6e5] hover:bg-[#babbff] hover:text-white transition-all duration-300 h-24" onClick={() => navigate('/flashcards/symbolismandthemes')}>
          <p className="font-semibold text-2xl text-center text-white">
          Symbolism and themes
          </p>
        </button>
        <button className="bg-[#9fa0ff] rounded-lg px-4 py-2 text-[#e5e6e5] hover:bg-[#babbff] hover:text-white transition-all duration-300 h-24" onClick={() => navigate('/flashcards/literaryawards')}>
          <p className="font-semibold text-2xl text-center text-white">
          Literary awards
          </p>
        </button>
        <button className="bg-[#9fa0ff] rounded-lg px-4 py-2 text-[#e5e6e5] hover:bg-[#babbff] hover:text-white transition-all duration-300 h-24" onClick={() => navigate('/flashcards/classicliterature')}>
          <p className="font-semibold text-2xl text-center text-white">
          Classic Literature
          </p>
        </button>
        <button className="bg-[#9fa0ff] rounded-lg px-4 py-2 text-[#e5e6e5] hover:bg-[#babbff] hover:text-white transition-all duration-300 h-24" onClick={() => navigate('/flashcards/femaleauthors')}>
          <p className="font-semibold text-2xl text-center text-white">
          Female Authors and Their Works
          </p>
        </button>
        <button className="bg-[#9fa0ff] rounded-lg px-4 py-2 text-[#e5e6e5] hover:bg-[#babbff] hover:text-white transition-all duration-300 h-24" onClick={() => navigate('/flashcards/awardwinningnovels')}>
          <p className="font-semibold text-2xl text-center text-white">
          Award-Winning Novels
          </p>
        </button>
        <button className="bg-[#9fa0ff] rounded-lg px-4 py-2 text-[#e5e6e5] hover:bg-[#babbff] hover:text-white transition-all duration-300 h-24" onClick={() => navigate('/flashcards/poetry')}>
          <p className="font-semibold text-2xl text-center text-white">
          Poetry and Poets
          </p>
        </button>
      </div>
    </div>
  );
};

export default LiteratureComponent;
