import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { IconContext } from "react-icons";
import {
  TbBulbFilled,
  TbArrowsShuffle,
  TbBookmark,
  TbFolders,
} from "react-icons/tb";
import { Link } from "react-router-dom";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    autoplaySpeed: 4500,
  };

  const arrowStyles = {
    "::before": {
      color: "red !important",
    },
  };
  return (
    <div className="flex ml-8 mr-8 mt-8 justify-center ">
      <Slider {...settings} className="flex w-4/5 justify-center space-x-4 color-black">
        <div className="flex justify-center bg-[#9fa0ff] py-8 rounded-xl hover:bg-[#babbff] border-x-4  ">
          <Link to="/discover">
            {" "}
            <IconContext.Provider value={{ size: 50, color: "white" }}>
              <div className="w-full flex justify-center">
                <TbBulbFilled />
              </div>
              
            </IconContext.Provider>
            <h3 className="text-center text-3xl font-bold text-white ">Discover</h3>
            <p className="text-center text-xl p-4 text-[#e5e6e5]">
              Navigate through hundreds of flashcards!
            </p>
          </Link>
        </div>
        <div className="flex justify-center bg-[#9fa0ff] p-8 rounded-xl hover:bg-[#babbff] border-x-4">
          <IconContext.Provider value={{ size: 50, color: "white" }}>
            <div className="w-full flex justify-center">
              <TbArrowsShuffle />
            </div>
          </IconContext.Provider>

          <h3 className="text-center text-3xl font-bold text-white ">Shuffle your cards</h3>
          <p className="text-center text-xl p-4 text-[#e5e6e5]">
            Take a short & random revision on your cards!
          </p>
        </div>

       
        <div className="flex justify-center bg-[#9fa0ff] p-8 rounded-xl hover:bg-[#babbff] border-x-4">
          <Link to="/Boards">
            <IconContext.Provider value={{ size: 50, color: "white" }}>
              <div className="w-full flex justify-center">
                <TbFolders />
              </div>
            </IconContext.Provider>

            <h3 className="text-center text-3xl font-bold text-white ">Boards</h3>
            <p className="text-center text-xl p-4 text-[#e5e6e5]"> See your boards!</p>
          </Link>
        </div>
        
      </Slider>
    </div>
  );
};

export default Carousel;
