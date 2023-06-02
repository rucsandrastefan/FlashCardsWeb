import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaCrown,
  BsPostageHeart,
  BiMath,
  MdLocalMovies,
  BiBook,
  FaNotesMedical,
} from "react-icons/all";
import Navbar from "./Navbar";

const Discover = () => {
  return (
    <div>
        <Navbar/>
    <div className="flex flex-col justify-center mt-12 px-16 gap-2 ">
      <motion.div whileHover={{ scale: 0.95 }}>
        <Link to="/historycomponent">
          <div className="flex align-middle items-center bg-white h-20 rounded-xl">
            <div className="flex pl-8 justify-center items-center">
              <FaCrown size={45} color="#9fa0ff" />
            </div>
            <div
              whileHover={{ scale: 0.8 }}
              className="flex justify-center items-center flex-1"
            >
              <p className="font-bold text-2xl text-center text-[#9fa0ff]">
                History
              </p>
            </div>
          </div>
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 0.95 }}>
        <Link to="/artcomponent">
          <div className="flex justify-center items-center bg-white h-20 rounded-xl">
            <div className="flex pl-8">
              <BsPostageHeart size={45} color="#9fa0ff" />
            </div>
            <div className="flex justify-center items-center flex-1">
              <p className="font-bold text-2xl text-center text-[#9fa0ff]">
                Art
              </p>
            </div>
          </div>
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 0.95 }}>
        <Link to="/mathcomponent">
          <div className="flex justify-center items-center bg-white h-20 rounded-xl">
            <div className="flex pl-8">
              <BiMath size={45} color="#9fa0ff" />
            </div>
            <div className="flex justify-center items-center flex-1">
              <p className="font-bold text-2xl text-center text-[#9fa0ff]">
                Math
              </p>
            </div>
          </div>
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 0.95 }}>
        <Link to="/moviescomponent">
          <div className="flex justify-center items-center bg-white h-20 rounded-xl">
            <div className="flex pl-8">
              <MdLocalMovies size={45} color="#9fa0ff" />
            </div>
            <div className="flex justify-center items-center flex-1">
              <p className="font-bold text-2xl text-center text-[#9fa0ff]">
                Movies
              </p>
            </div>
          </div>
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 0.95 }}>
        <Link to="/literaturecomponent">
          <div className="flex justify-center items-center bg-white h-20 rounded-xl">
            <div className="flex pl-8">
              <BiBook size={45} color="#9fa0ff" />
            </div>
            <div className="flex justify-center items-center flex-1">
              <p className="font-bold text-2xl text-center text-[#9fa0ff]">
                Literature
              </p>
            </div>
          </div>
          </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 0.95 }}>
        <Link to="/medcomponent">
          <div className="flex justify-center items-center bg-white h-20 rounded-xl">
            <div className="flex pl-8">
              <FaNotesMedical size={45} color="#9fa0ff" />
            </div>
            <div className="flex justify-center items-center flex-1">
              <p className="font-bold text-2xl text-center text-[#9fa0ff]">
                Medicine
              </p>
            </div>
          </div>
          </Link>
      </motion.div>
   
      </div>
      </div>
  )}

  export default Discover
