import Image from "next/image";
import Link from "next/link";
import React from "react";
import tekwizaLogo from "../../public/images/tekwiza-logo-0.png";

const Hero = () => {
  return (
    <>
    <div className="overlay"></div>
      <video className="bgVideo" disablePictureInPicture playsInline autoPlay muted loop>
        <source src='/videos/bgsynthwave.mp4' type="video/mp4" />
      </video>
    <div className="my-4 flex flex-col justify-center items-center">
      <Image alt="Tekwiza Logo" className="h-40 lg:h-56 w-auto" src={tekwizaLogo} />
      {/* <h1 className="text-2xl mt-2">Coming Soon...</h1> */}
      <Link className="border-2 px-2 py-[1.5] m-2 border-white transition-shadow hover:bg-white hover:text-black" href={'/events'}>
        <h2>Go to Events</h2>
      </Link>
      
      <h2 className="break-words text-center">December 02, 03 @ Sahrdaya College of Engineering and Technology</h2>
    
    </div>
    </>
  );
};

export default Hero;
