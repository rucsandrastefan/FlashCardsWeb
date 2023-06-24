import React, { useEffect } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./lib/firebase";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      navigate("/MainPage");
    }
  }, [user, loading]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex-col h-screen overflow-hidden bg-[url('/img/backgr.png')]">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
