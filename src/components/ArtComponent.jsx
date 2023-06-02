import React from "react";
import Navbar from "./Navbar";
import { BsPostageHeart } from "react-icons/bs";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa"
import { useNavigate } from "react-router-dom";



const ArtComponent = () => {
  const navigate  = useNavigate()
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center drop-shadow ">
        {" "}
        <div className="flex justify-center items-center  bg-white h-20 w-3/6 rounded-lg px-8 mt-8 animate">
          <BsPostageHeart size={40} color="#9fa0ff" />
          <h1 className="text-2xl font-bold text-[#9fa0ff] ml-4">Art</h1>
        </div>
      </div>
      <div className="flex justify-between mx-24"> 
      <div className="  flex items-center justify-end">
        <button
          className="bg-[#9fa0ff] rounded-lg px-8 py-4 text-white hover:bg-[#babbff] hover:text-white transition-all duration-300 justify-center"
          onClick={() => navigate('/historycomponent') } 
        >
          <FaArrowLeft size={24} color="white" />
        </button>
      </div>
      <div className="  flex items-center justify-start">
        <button
          className="bg-[#9fa0ff] rounded-lg px-8 py-4 text-white hover:bg-[#babbff] hover:text-white transition-all duration-300 justify-center"
          
          onClick={() => navigate('/mathcomponent') } 
          
        >
          <FaArrowRight size={24} color="white" />
        </button>
      </div></div>
     

      <div className="grid grid-cols-3 gap-8 px-24 mt-16 h-24 ">
      <button className="bg-[#9fa0ff] rounded-lg px-4 py-2 text-white hover:bg-[#babbff] hover:text-white transition-all duration-300 h-24" onClick={() => navigate('/flashcards/modernartmovements')}>
          <p className="font-semibold text-2xl text-center">Modern Art Movements</p>
        </button>
        <button className="bg-[#9fa0ff] rounded-lg px-4 py-2 text-white hover:bg-[#babbff] hover:text-white transition-all duration-300 h-24" onClick={() => navigate('/flashcards/artisticstyles')}>
          <p className="font-semibold text-2xl text-center text-white">
          Famous Artistic Styles
          </p>
        </button>
        <button className="bg-[#9fa0ff] rounded-lg px-4 py-2 text-[#e5e6e5] hover:bg-[#babbff] hover:text-white transition-all duration-300 h-24" onClick={() => navigate('/flashcards/symbolism')}>
          <p className="font-semibold text-2xl text-center text-white">
          Symbolism in Art
          </p>
        </button>
        <button className="bg-[#9fa0ff] rounded-lg px-4 py-2 text-[#e5e6e5] hover:bg-[#babbff] hover:text-white transition-all duration-300 h-24"onClick={() => navigate('/flashcards/modernart')}>
          <p className="font-semibold text-2xl text-center text-white">
          Modern Art
          </p>
        </button>
        <button className="bg-[#9fa0ff] rounded-lg px-4 py-2 text-[#e5e6e5] hover:bg-[#babbff] hover:text-white transition-all duration-300 h-24" onClick={() => navigate('/flashcards/abstractexpressionism')}>
          <p className="font-semibold text-2xl text-center text-white">
          Abstract Expressionism
          </p>
        </button>
        <button className="bg-[#9fa0ff] rounded-lg px-4 py-2 text-[#e5e6e5] hover:bg-[#babbff] hover:text-white transition-all duration-300 h-24" onClick={() => navigate('/flashcards/surrealism')}>
          <p className="font-semibold text-2xl text-center text-white">
          Surrealism
          </p>
        </button>
        <button className="bg-[#9fa0ff] rounded-lg px-4 py-2 text-[#e5e6e5] hover:bg-[#babbff] hover:text-white transition-all duration-300 h-24" onClick={() => navigate('/flashcards/renaissanceart')}>
          <p className="font-semibold text-2xl text-center text-white">
          Renaissance Art
          </p>
        </button>
        <button className="bg-[#9fa0ff] rounded-lg px-4 py-2 text-[#e5e6e5] hover:bg-[#babbff] hover:text-white transition-all duration-300 h-24" onClick={() => navigate('/flashcards/postmodern')}>
          <p className="font-semibold text-2xl text-center text-white">
          Postmodern Art
          </p>
        </button>
        <button className="bg-[#9fa0ff] rounded-lg px-4 py-2 text-[#e5e6e5] hover:bg-[#babbff] hover:text-white transition-all duration-300 h-24">
          <p className="font-semibold text-2xl text-center text-white">
            Famous Painters
          </p>
        </button>
      </div>
    </div>
  );
};

export default ArtComponent;
