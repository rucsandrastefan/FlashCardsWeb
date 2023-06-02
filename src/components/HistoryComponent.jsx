import React from "react";
import Navbar from "./Navbar";
import { FaCrown, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// import addDataToFirestore from "../lib/data";

const HistoryComponent = () => {
  const navigate = useNavigate();
  // addDataToFirestore()

  return (
    <div>
      <Navbar />

      <div className="flex justify-center items-center drop-shadow">
        <div className="flex items-center justify-center bg-white h-20 w-3/6 rounded-lg px-8 mt-8 animate">
          <FaCrown size={40} color="#9fa0ff" />
          <h1 className="text-2xl font-bold text-[#9fa0ff] ml-4  text-center">
            History
          </h1>
        </div>
      </div>
      <div className="mr-24  flex items-center justify-end">
        <button
          className="bg-[#9fa0ff] rounded-lg px-8 py-4 text-white hover:bg-[#babbff] hover:text-white transition-all duration-300 justify-center"
          onClick={() => navigate("/artcomponent")}
        >
          <FaArrowRight size={24} color="white" />
        </button>
      </div>

      <div className="grid grid-cols-3 gap-8 px-24 mt-16 h-24 ">
        <button
          className="bg-[#9fa0ff] rounded-lg px-4 py-2 text-white hover:bg-[#babbff] hover:text-white transition-all duration-300 h-24"
          onClick={() => navigate("/flashcards/renaissance")}
        >
          <p className="font-semibold text-2xl text-center">Renaissance</p>
        </button>
        <button
          className="bg-[#9fa0ff] rounded-lg px-4 py-2 text-white hover:bg-[#babbff] hover:text-white transition-all duration-300 h-24 "
          onClick={() => navigate("/flashcards/worldwar1")}
        >
          <p className="font-semibold text-2xl text-center text-white">
            World War I
          </p>
        </button>
        <button
          className="bg-[#9fa0ff] rounded-lg px-4 py-2 text-[#e5e6e5] hover:bg-[#babbff] hover:text-white transition-all duration-300 h-24"
          onClick={() => navigate("/flashcards/worldwar2")}
        >
          <p className="font-semibold text-2xl text-center text-white">
            World War II
          </p>
        </button>
        <button
          className="bg-[#9fa0ff] rounded-lg px-4 py-2 text-[#e5e6e5] hover:bg-[#babbff] hover:text-white transition-all duration-300 h-24"
          onClick={() => navigate("/flashcards/romanempire")}
        >
          <p className="font-semibold text-2xl text-center text-white">
            Roman Empire
          </p>
        </button>
        <button
          className="bg-[#9fa0ff] rounded-lg px-4 py-2 text-[#e5e6e5] hover:bg-[#babbff] hover:text-white transition-all duration-300 h-24"
          onClick={() => navigate("/flashcards/medievalhistory")}
        >
          <p className="font-semibold text-2xl text-center text-white">
            Medieval History
          </p>
        </button>
        <button
          className="bg-[#9fa0ff] rounded-lg px-4 py-2 text-[#e5e6e5] hover:bg-[#babbff] hover:text-white transition-all duration-300 h-24"
          onClick={() => navigate("/flashcards/industrialrevolution")}
        >
          <p className="font-semibold text-2xl text-center text-white">
            The Industrial Revolution
          </p>
        </button>
        <button
          className="bg-[#9fa0ff] rounded-lg px-4 py-2 text-[#e5e6e5] hover:bg-[#babbff] hover:text-white transition-all duration-300 h-24"
          onClick={() => navigate("/flashcards/ancientgreece")}
        >
          <p className="font-semibold text-2xl text-center text-white">
            Ancient Greece
          </p>
        </button>
        <button
          className="bg-[#9fa0ff] rounded-lg px-4 py-2 text-[#e5e6e5] hover:bg-[#babbff] hover:text-white transition-all duration-300 h-24"
          onClick={() => navigate("/flashcards/civilrights")}
        >
          <p className="font-semibold text-2xl text-center text-white">
            Civil Rights Movement
          </p>
        </button>
        <button
          className="bg-[#9fa0ff] rounded-lg px-4 py-2 text-[#e5e6e5] hover:bg-[#babbff] hover:text-white transition-all duration-300 h-24"
          onClick={() => navigate("/flashcards/coldwar")}
        >
          <p className="font-semibold text-2xl text-center text-white">
            The Cold War
          </p>
        </button>
      </div>
    </div>
  );
};

export default HistoryComponent;
