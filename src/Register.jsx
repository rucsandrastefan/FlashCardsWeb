import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Checkbox from "@mui/material/Checkbox";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "./lib/firebase";


const Register = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      return;
    }

    const res = await createUserWithEmailAndPassword(email, password);
    console.log(res);
    
  };
  
  useEffect(() => {
    if (user) {
      navigate("/Login");
    }
  }, [user]);

  return (
    <div>
      <Navbar />

      <div class="min-h-screen  py-40 bg-[#e5e6e5]  ">
        <div class="container mx-auto place-self-center ">
          <div class="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-[#9fa0ff] rounded-xl mx-auto shadow-lg  ">
            <div class="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center text-center">
              <h1 class="text-white text-3xl mb-8 font-bold">Welcome</h1>
              <div className="flex flex-col gap-4">
                <p class="text-white font-medium">
                  We're glad to see you here ! If you're looking for ways to
                  study more effectively or to make your lessons more enjoyable,
                  you're in the right place !{"\n"}
                </p>
                <motion.button
                  whileTap={{ scale: 0.8 }}
                  whileHover={{ scale: 1.1, transition: { duration: 0.7 } }}
                  href="#"
                  className="text-gray-700 font-semibold"
                  onClick={() => navigate("/About")}
                >
                  {" "}
                  Learn more
                </motion.button>
              </div>
            </div>

            <div class="w-full lg:w-1/2 py-16 px-12">
              <h2 class="text-3xl mb-4 font-bold text-white">Register</h2>
              <p class="mb-4 font-semibold text-white">
                Create your account. It’s free and only take a minute
              </p>
              <div>
                <div class="grid grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Firstname"
                    class="border border-[#e5e6e5] py-1 px-2 rounded-lg "
                  />
                  <input
                    type="text"
                    placeholder="Surname"
                    class="border border-[#e5e6e5] py-1 px-2 rounded-lg"
                  />
                </div>
                <div class="mt-5">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                    class="border border-[#e5e6e5] py-1 px-2 w-full rounded-lg"
                  />
                </div>
                <div class="mt-5">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    class="border border-[#e5e6e5] py-1 px-2 w-full rounded-lg"
                  />
                </div>
                <div class="mt-5">
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                    class="border border-[#e5e6e5] py-1 px-2 w-full rounded-lg"
                  />
                </div>
                <div class="mt-5  align-baseline">
                  <Checkbox color="default" size="small" />

                  <span className="pl-1 text-gray-700 font-medium align-baseline">
                    I accept the{" "}
                    <a href="#" class="text-white font-semibold">
                      Terms of Use
                    </a>{" "}
                    &{" "}
                    <a href="#" class="text-white font-semibold">
                      Privacy Policy
                    </a>
                  </span>
                </div>
                <div class="mt-5">
                  <motion.button
                    type="submit"
                    onClick={() => handleRegister()}
                    whileHover={{ scale: 1.03, transition: { duration: 0.1 } }}
                    whileTap={{ scale: 1 }}
                    class="w-full bg-white py-3 text-center text-[#9fa0ff] rounded-lg font-semibold"
                  >
                    Register Now
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default Register;
