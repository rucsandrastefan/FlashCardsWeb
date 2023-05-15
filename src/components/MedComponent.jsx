import React from "react";
import Navbar from "./Navbar";
import { FaNotesMedical } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const MedComponent = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center drop-shadow ">
        {" "}
        <div className="flex justify-center items-center  bg-white h-24 w-3/6 rounded-lg px-8 mt-4 animate-">
          <FaNotesMedical size={40} color="#9fa0ff" />
          <h1 className="text-2xl font-bold text-[#9fa0ff] ml-4">Med</h1>
        </div>
      </div>
      <div className="flex justify-between mx-24">
        <div className="  flex items-center justify-end">
          <button
            className="bg-[#9fa0ff] rounded-lg px-8 py-4 text-white hover:bg-[#babbff] hover:text-white transition-all duration-300 justify-center"
            onClick={() => (window.location.href = "/literaturecomponent")}
          >
            <FaArrowLeft size={24} color="white" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8 px-24 mt-20 h-24 ">
        <button className="bg-[#9fa0ff] rounded-lg px-4 py-2 text-white hover:bg-[#babbff] hover:text-white transition-all duration-300 h-24">
          <p className="font-semibold text-2xl text-center">Human Anatomy</p>
        </button>
        <button className="bg-[#9fa0ff] rounded-lg px-4 py-2 text-white hover:bg-[#babbff] hover:text-white transition-all duration-300 h-24">
          <p className="font-semibold text-2xl text-center text-white">
            Medical Terminology
          </p>
        </button>
        <button className="bg-[#9fa0ff] rounded-lg px-4 py-2 text-[#e5e6e5] hover:bg-[#babbff] hover:text-white transition-all duration-300 h-24">
          <p className="font-semibold text-2xl text-center text-white">
            Pharmacology
          </p>
        </button>
        <button className="bg-[#9fa0ff] rounded-lg px-4 py-2 text-[#e5e6e5] hover:bg-[#babbff] hover:text-white transition-all duration-300 h-24">
          <p className="font-semibold text-2xl text-center text-white">
            Pathophysiology
          </p>
        </button>
        <button className="bg-[#9fa0ff] rounded-lg px-4 py-2 text-[#e5e6e5] hover:bg-[#babbff] hover:text-white transition-all duration-300 h-24">
          <p className="font-semibold text-2xl text-center text-white">
            Microbiology
          </p>
        </button>
        <button className="bg-[#9fa0ff] rounded-lg px-4 py-2 text-[#e5e6e5] hover:bg-[#babbff] hover:text-white transition-all duration-300 h-24">
          <p className="font-semibold text-2xl text-center text-white">
            Medical Ethics
          </p>
        </button>
        <button className="bg-[#9fa0ff] rounded-lg px-4 py-2 text-[#e5e6e5] hover:bg-[#babbff] hover:text-white transition-all duration-300 h-24">
          <p className="font-semibold text-2xl text-center text-white">
            Immunology
          </p>
        </button>
        <button className="bg-[#9fa0ff] rounded-lg px-4 py-2 text-[#e5e6e5] hover:bg-[#babbff] hover:text-white transition-all duration-300 h-24">
          <p className="font-semibold text-2xl text-center text-white">
            Medical Procedures
          </p>
        </button>
        <button className="bg-[#9fa0ff] rounded-lg px-4 py-2 text-[#e5e6e5] hover:bg-[#babbff] hover:text-white transition-all duration-300 h-24">
          <p className="font-semibold text-2xl text-center text-white">
            Diagnostic Tests
          </p>
        </button>
      </div>
    </div>
  );
};

export default MedComponent;
