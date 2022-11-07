import Image from "next/image";
import Link from "next/link";
import React from "react";
import tekwizaLogo from "/public/images/tekwiza-logo-1.png";

const Navbar = () => {
  return (
    <div className="Navbar text-white px-7 flex h-12 w-screen justify-between items-center  bg-opacity-60">
      <div className="LogoContainer flex">
        <Link href={'/'}>
        <Image className="h-4 w-auto" src={tekwizaLogo} />
        </Link>
      </div>
      <div className="Links flex">
        <Link href="/events">
          <h3 className="ml-5 cursor-pointer">Events</h3>
        </Link>
        <h3 className="ml-5 cursor-pointer">Workshops</h3>
        <h3 className="ml-5 cursor-pointer">Speakers</h3>
        <h3 className="ml-5 cursor-pointer">Contact Us</h3>
      </div>
    </div>
  );
};

export default Navbar;
