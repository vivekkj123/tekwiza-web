import Image from "next/image";
import React from "react";
import tekwizaLogo from "../../public/images/tekwiza-logo-0.png";

const Hero = () => {
  return (
    <div className="my-7 flex flex-col items-center">
      <Image src={tekwizaLogo} />
      <h1 className="text-2xl">Coming Soon...</h1>
      <h2>December 02, 03 @ Sahrdaya College of Engineering and Technology</h2>
    </div>
  );
};

export default Hero;
