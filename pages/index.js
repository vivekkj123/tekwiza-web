import React from "react";
import Hero from "../src/components/Hero";
import Navbar from "../src/components/Navbar";

const Home = () => {
  return (
    <div className="h-screen w-screen">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
