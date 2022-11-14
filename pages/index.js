import React from "react";
import Footer from "../src/components/Footer";
import Hero from "../src/components/Hero";
import Navbar from "../src/components/Navbar";
import Sponsors from "../src/components/Sponsors";
import WelcomeSection from "../src/components/WelcomeSection";
import WhatYouCanExpect from "../src/components/WhatYouCanExpect";

const Home = () => {
  return (
    <div className="scroll-smooth overflow-x-hidden h-screen w-screen">
      <Navbar className="Animationslide" />
      <Hero />
      <WelcomeSection/>
      <WhatYouCanExpect />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default Home;
