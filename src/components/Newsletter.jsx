import React from "react";
import { motion } from "framer-motion";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4 bg-[#9fa0ff]">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4 bg-#9fa0ff]">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips & tricks on how to study better?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full ">
            <input
              className="p-3 flex w-full  border-gray-500 rounded-md text-gray-500"
              type="email"
              placeholder="Enter Email"
            />
            <motion.button whileTap={{ scale: 0.9 }}
            className="bg-white text-gray-500 rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">
              Notify Me
            </motion.button>
          </div>
          <p>
            We care bout the protection of your data. Read our{" "}
            <span className="text-gray-500">Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
