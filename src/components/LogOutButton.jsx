import React from "react";
import { useSignOut } from "react-firebase-hooks/auth";
import { FiLogOut } from "react-icons/fi";
import { auth } from "../lib/firebase";
import { useNavigate } from "react-router-dom";

const LogOutButton = () => {
  const navigate = useNavigate();
  const [signOut] = useSignOut(auth);

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-row items-center">
      {" "}
      <button
        className="  text-gray-400 text-sm font-semibold py-2 px-4 rounded-md flex items-center"
        onClick={handleSignOut}
      >
        <u>Logout</u>
        <FiLogOut className="ml-2"></FiLogOut>
      </button>
    </div>
  );
};

export default LogOutButton;
