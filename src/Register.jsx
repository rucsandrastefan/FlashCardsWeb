import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Checkbox from "@mui/material/Checkbox";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "./lib/firebase";
import { updateProfile } from "firebase/auth";
import { updateUserDisplayName } from "./lib/user";

const Register = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("* Please introduce a valid email format");
      return;
    }

    await createUserWithEmailAndPassword(email, password);
    await updateUserDisplayName(auth.currentUser, firstname, surname);
  };

  useEffect(() => {
    if (user) {
      navigate("/MainPage");
    }
  }, [user]);

  return (
    <div className="h-screen flex-col overflow-hidden">
      <Navbar />

      <div className="mt-4 h-full bg-[#e5e6e5]  ">
        <div className="container mx-auto place-self-center ">
          <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-[#9fa0ff] rounded-xl mx-auto shadow-lg  ">
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center text-center">
              <h1 className="text-white text-3xl mb-8 font-bold">Welcome</h1>
              <div className="flex flex-col gap-4">
                <p className="text-white font-medium">
                  We're glad to see you here ! If you're looking for ways to
                  study more effectively or to make your lessons more enjoyable,
                  you're in the right place !{"\n"}
                </p>
                <motion.button
                  whileTap={{ scale: 0.8 }}
                  whileHover={{ scale: 1.1, transition: { duration: 0.7 } }}
                  href="#"
                  className="text-white font-semibold mt-18 "
                  onClick={() => navigate("/About")}
                >
                  {" "}
                  Learn more
                </motion.button>
              </div>
            </div>

            <div className="w-full lg:w-1/2 py-16 px-12">
              <h2 className="text-3xl mb-4 font-bold text-white">Register</h2>
              <p className="mb-4 font-semibold text-white">
                Create your account. It’s free and only take a minute
              </p>
              <div>
                <div className="grid grid-cols-2 gap-5">
                  <input
                    value={firstname}
                    onChange={(e) =>
                      setFirstname(e.target.value.replace(/[^a-z]/gi, ""))
                    }
                    type="text"
                    placeholder="Firstname"
                    autoCapitalize="words"
                    className="border border-[#e5e6e5] py-1 px-2 rounded-lg focus:outline-none"
                  />
                  <input
                    value={surname}
                    onChange={(e) =>
                      setSurname(e.target.value.replace(/[^a-z]/gi, ""))
                    }
                    type="text"
                    placeholder="Surname"
                    autoCapitalize="words"
                    className="border border-[#e5e6e5] py-1 px-2 rounded-lg focus:outline-none"
                  />
                </div>
                <div className="mt-5">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                    className="border border-[#e5e6e5] py-1 px-2 w-full rounded-lg focus:outline-none"
                  />
                  {emailError && (
                    <p className="text-white mt-2 text-xs">{emailError}</p>
                  )}
                </div>
                <div className="mt-5">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    suggested="new-password"
                    placeholder="Password"
                    className="border border-[#e5e6e5] py-1 px-2 w-full rounded-lg focus:outline-none"
                  />
                </div>
                <div className="mt-5">
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    suggested="new-password"
                    placeholder="Confirm Password"
                    className="border border-[#e5e6e5] py-1 px-2 w-full rounded-lg focus:outline-none"
                  />
                </div>
                <div className="mt-5  align-baseline">
                  <Checkbox color="default" size="small" />

                  <span className="pl-1 text-gray-700 font-medium align-baseline">
                    I accept the{" "}
                    <a href="#" className="text-white font-semibold">
                      Terms of Use
                    </a>{" "}
                    &{" "}
                    <a href="#" className="text-white font-semibold">
                      Privacy Policy
                    </a>
                  </span>
                </div>
                <div className="mt-5">
                  <motion.button
                    type="submit"
                    onClick={() => handleRegister()}
                    whileHover={{ scale: 1.03, transition: { duration: 0.1 } }}
                    whileTap={{ scale: 1 }}
                    className="w-full bg-white py-3 text-center text-[#9fa0ff] rounded-lg font-semibold"
                  >
                    Register Now
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
