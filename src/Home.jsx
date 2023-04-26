import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Newsletter />
    </div>
  );
};

export default Home;
