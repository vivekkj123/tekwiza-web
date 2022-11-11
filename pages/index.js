import React from "react";
import Footer from "../src/components/Footer";
import Hero from "../src/components/Hero";
import Navbar from "../src/components/Navbar";

const Home = () => {
  return (
    <div className="h-screen w-screen">
      <Navbar className="Animationslide"/>
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
