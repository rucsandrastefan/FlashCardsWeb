import React from "react";
import Navbar from "./Navbar";
import { BiMath } from "react-icons/bi";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa"

const MathComponent = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center drop-shadow ">
        {" "}
        <div className="flex justify-center items-center  bg-white h-24 w-3/6 rounded-lg px-8 mt-4 animate-">
          <BiMath size={40} color="#9fa0ff" />
          <h1 className="text-2xl font-bold text-[#9fa0ff] ml-4">Math</h1>
        </div>
      </div>
      <div className="flex justify-between mx-24"> 
      <div className="  flex items-center justify-end">
        <button
          className="bg-[#9fa0ff] rounded-lg px-8 py-4 text-white hover:bg-[#babbff] hover:text-white transition-all duration-300 justify-center"
          onClick={() => window.location.href = "/artcomponent"}
        >
          <FaArrowLeft size={24} color="white" />
        </button>
      </div>
      <div className="  flex items-center justify-start">
        <button
          className="bg-[#9fa0ff] rounded-lg px-8 py-4 text-white hover:bg-[#babbff] hover:text-white transition-all duration-300 justify-center"
          onClick={() => window.location.href = "/moviescomponent"}
        >
          <FaArrowRight size={24} color="white" />
        </button>
      </div></div>

      <div className="grid grid-cols-3 gap-8 px-24 mt-20 h-24 ">
        <button className="bg-[#9fa0ff] rounded-lg px-4 py-2 text-white hover:bg-[#babbff] hover:text-white transition-all duration-300 h-24">
          <p className="font-semibold text-2xl text-center">
            Addition and Subtraction Facts
          </p>
        </button>
        <button className="bg-[#9fa0ff] rounded-lg px-4 py-2 text-white hover:bg-[#babbff] hover:text-white transition-all duration-300 h-24">
          <p className="font-semibold text-2xl text-center text-white">
            Multiplication and Division Facts
          </p>
        </button>
        <button className="bg-[#9fa0ff] rounded-lg px-4 py-2 text-[#e5e6e5] hover:bg-[#babbff] hover:text-white transition-all duration-300 h-24">
          <p className="font-semibold text-2xl text-center text-white">
            Fractions and Decimals
          </p>
        </button>
        <button className="bg-[#9fa0ff] rounded-lg px-4 py-2 text-[#e5e6e5] hover:bg-[#babbff] hover:text-white transition-all duration-300 h-24">
          <p className="font-semibold text-2xl text-center text-white">
            Geometry and Measurement
          </p>
        </button>
        <button className="bg-[#9fa0ff] rounded-lg px-4 py-2 text-[#e5e6e5] hover:bg-[#babbff] hover:text-white transition-all duration-300 h-24">
          <p className="font-semibold text-2xl text-center text-white">
            Algebraic Concepts
          </p>
        </button>
        <button className="bg-[#9fa0ff] rounded-lg px-4 py-2 text-[#e5e6e5] hover:bg-[#babbff] hover:text-white transition-all duration-300 h-24">
          <p className="font-semibold text-2xl text-center text-white">
            Trigonometry (sine, cosine, tangent)
          </p>
        </button>
        <button className="bg-[#9fa0ff] rounded-lg px-4 py-2 text-[#e5e6e5] hover:bg-[#babbff] hover:text-white transition-all duration-300 h-24">
          <p className="font-semibold text-2xl text-center text-white">
            Calculus (limits, derivatives, integrals)
          </p>
        </button>
        <button className="bg-[#9fa0ff] rounded-lg px-4 py-2 text-[#e5e6e5] hover:bg-[#babbff] hover:text-white transition-all duration-300 h-24">
          <p className="font-semibold text-2xl text-center text-white">
            Probability and Statistics
          </p>
        </button>
        <button className="bg-[#9fa0ff] rounded-lg px-4 py-2 text-[#e5e6e5] hover:bg-[#babbff] hover:text-white transition-all duration-300 h-24">
          <p className="font-semibold text-2xl text-center text-white">
            Number Theory (prime numbers, factors, multiples)
          </p>
        </button>
      </div>
    </div>
  );
};

export default MathComponent;
