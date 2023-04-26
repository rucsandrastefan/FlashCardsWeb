import React from "react";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Typed from "react-typed";
import { useNavigate } from "react-router-dom";
const About = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className="min-h-screen  py-10 pb-20 bg-[#e5e6e5]  ">
        <div className="flex justify-center items-center text-center pb-8">
          <h1 className="text-6xl font-bold text-center pb-8">Our Story</h1>
          <Typed
            className=" text-6xl font-bold pb-8 text-black"
            strings={["..."]}
            typeSpeed={220}
            backSpeed={200}
            loop
          />
        </div>

        <div class="w-full lg:w-3/4 items-center justify-center p-12 bg-[#9fa0ff] text-center rounded-xl container mx-auto place-self-center ">
          <h1 class="text-white text-3xl mb-8 font-bold">Memo.</h1>
          <div className="flex flex-col gap-3 text-white font-medium">
            <p >
              Welcome to Memo!<br></br> Our app is designed to make learning fun and easy
              by providing users with a dynamic and interactive platform for
              creating, sharing, and studying flashcards.
            </p>
            <p>
              We believe that learning should be personalized and adaptive,
              which is why we have developed an app that allows users to create
              their own flashcards based on their unique learning needs.
            </p>
            <p>
              {" "}
              Whether you are a student looking to improve your grades, a
              professional seeking to expand your knowledge, or a language
              learner trying to master a new language, our application has
              something for you. With our intuitive interface, you can easily
              create, organize, and study your flashcards on-the-go.
            </p>
            <p>
              At our core, we are committed to helping people achieve their
              learning goals. That's why we are constantly updating our app with
              new features and improvements to ensure that our users have the
              best possible learning experience.
            </p>
            <p>
              We believe that education is the key to success, and we are proud
              to be a part of that journey with our users. Thank you for
              choosing us, and we look forward to helping you
              achieve your learning goals!
            </p>
          </div>
          <button className="bg-white p-3 px-8 rounded-xl justify-self-center mt-8 font-semibold text-[#9fa0ff] hover:animate-bounce"
          onClick={()=> navigate("/Register")}>Join us</button>
        </div>
       
      </div>
      <Newsletter />
    </div>
  );
};

export default About;
