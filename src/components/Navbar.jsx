import Image from "next/image";
import React from "react";
import tekwizaLogo from "/public/images/tekwiza-logo-1.png";
import scetLogo from "/public/images/scet-logo.png";

const Navbar = () => {
  return (
    <div className="Navbar text-white px-7 flex h-12 w-screen justify-between items-center bg-gray-900 bg-opacity-60">
      <div className="LogoContainer flex">
        <Image className="h-4 w-auto" src={tekwizaLogo} />
        <Image
          className="mx-10 brightness-0 invert h-4 w-auto"
          src={scetLogo}
        />
      </div>
      <div className="Links flex">
        <h3 className="ml-5 cursor-pointer">Events</h3>
        <h3 className="ml-5 cursor-pointer">Workshops</h3>
        <h3 className="ml-5 cursor-pointer">Speakers</h3>
        <h3 className="ml-5 cursor-pointer">Contact Us</h3>
      </div>
    </div>
  );
};

export default Navbar;
