import React from "react";
import Typed from "react-typed";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className=" text-3xl text-[#9fa0ff] font-bold p-2">Learn More Effectively</p>
        
        <div className="flex justify-center items-center">
          {/* <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4 text-[#9fa0ff]">
            In the mood for some
          </p> */}
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 pb-4 text-[#9fa0ff]"
            strings={["Math", "Art", "Geography", "Movie", "Literature"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
          <h1 className="md:text-5xl sm:text-4xl text-xl font-bold pl-2 pb-4">
           flashcards
        </h1>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Make your study sessions a hobby.
        </p>
        <motion.button  whileHover={{scale: 1.1,
                    transition: { duration: 0.8 },
                            }}
         whileTap={{ scale: 0.9 }}
         className="bg-[#9fa0ff] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white"
         onClick={() => navigate("/Register")}
         >
          Get Started
        </motion.button>
        <div className="flex flex-row text-gray-500 justify-center">
          Already a memeber?&nbsp;
          <button className="font-semibold text-gray-500 underline"
          onClick={() => navigate("/Login")}>Log In</button>
        </div>
        
      </div>
    </div>
  );
};

export default Hero;
