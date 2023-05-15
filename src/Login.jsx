import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { auth } from "./lib/firebase";

const Login = () => {
  const navigate = useNavigate();

  const [signInWithEmailAndPassword, user] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [value, setValue] = useState("");
  const [state, setState] = useState(false);
  const toggleButton = () => {
    setState((prevState) => !prevState);
  };

  const handleLogin = async () => {
    await signInWithEmailAndPassword(email, password);
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle(); // Call the signInWithGoogle function to log in with Google
      window.location.href = "/MainPage"; // Redirect the user to the dashboard page
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/MainPage");
    }
  }, [user]);

  return (
    <div>
      <Navbar />
      <div class="min-h-screen  py-40 bg-[#e5e6e5] shadow-lg ">
        <div class="container mx-auto place-self-center ">
          <div class="flex flex-col  w-10/12 lg:w-3/12 bg-[#9fa0ff] rounded-xl mx-auto shadow-lg  p-8">
            <h1 className="text-white text-3xl font-bold">Memo.</h1>
            <p className="pt-3 text-white font-semibold text-xl">
              Welcome Back
            </p>
            <div className="flex flex-row pt-2">
              <p className="text-white font-normal text-sm ">
                {" "}
                Not registered?&nbsp;
              </p>
              <button
                className="text-white text-sm font-bold"
                onClick={() => navigate("/Register")}
              >
                {" "}
                Sign Up
              </button>
            </div>

            <div>
              <div class="mt-5">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail"
                  class="border border-[#e5e6e5] py-1 px-2 w-full rounded-lg text-[#a6a6a6]"
                />
              </div>
              <div className="justify-center mt-3 rounded-lg">
                <div className="flex justify-between items-center bg-white rounded-lg">
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={state ? "text" : "password"}
                    placeholder="Password"
                    className=" border-[#e5e6e5] py-1 px-2 w-full rounded-lg text-[#a6a6a6] "
                  />
                  <button
                    className="bg-white mx-3  "
                    style={{ color: "#a6a6a6" }}
                    onClick={toggleButton}
                  >
                    {state ? <FaEye /> : <FaEyeSlash />}
                  </button>
                </div>
              </div>
              <div class="mt-8">
                <motion.button
                  whileHover={{ scale: 1.03, transition: { duration: 0.1 } }}
                  whileTap={{ scale: 1 }}
                  class="w-full bg-white py-3 text-center text-[#9fa0ff] rounded-lg font-semibold"
                  onClick={() => handleLogin()}
                >
                  Log In
                </motion.button>
              </div>
              <p className="text-center pt-8 text-white">or</p>
              <div className=" w-full flex justify-center ">
                <button
                  onClick={() => handleGoogleSignIn()}
                  className="flex w-1/2 bg-white py-2 px-8  text-[#9fa0ff] rounded-lg font-semibold mt-8 items-center gap-4  "
                >
                  <FaGoogle />
                  Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
