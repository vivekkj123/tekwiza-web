import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import tekwizaLogo from "/public/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faWindowClose } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [ToggleNavbar, setToggleNavbar] = useState(false);
  return (
    <>
      <div className=" Navbar flex text-white lg:px-7 px-2 py-2 h-12 w-screen justify-between items-center ">
        <div className="LogoContainer flex">
          <Link href={"/"}>
            <Image className="h-6 lg:h-8 w-auto" src={tekwizaLogo} />
          </Link>
        </div>
        <div className="lg:hidden">
          <FontAwesomeIcon
            icon={ToggleNavbar ? faWindowClose : faBars}
            onClick={() => setToggleNavbar(!ToggleNavbar)}
            className=" cursor-pointer mx-2"
          />
        </div>
        <div className="Links hidden lg:flex">
          <Link href="/events">
            <h3 className="ml-5 cursor-pointer">Events</h3>
          </Link>
          <Link href="/workshops">
            <h3 className="ml-5 cursor-pointer">Workshops</h3>
          </Link>
          <Link href="/poster-paper-presentation">
            <h3 className="ml-5 cursor-pointer">Poster / Paper Presentation</h3>
          </Link>
          <Link href="/contact-us">
            <h3 className="ml-5 cursor-pointer">Contact Us</h3>
          </Link>
        </div>
      </div>
      <div
        className={`NavBarLinks h-screen w-screen bg-white ${
          ToggleNavbar ? "flex flex-col" : "hidden"
        } items-center mx-auto py-4 z-[5]`}
      >
        <Link href="/">
          <h3 className="cursor-pointer bg-black px-10 my-1 text-white">
            Home
          </h3>
        </Link>
        <Link href="/events">
          <h3 className="cursor-pointer bg-black px-10 my-1 text-white">
            Events
          </h3>
        </Link>
        <Link href="/workshops">
          <h3 className="cursor-pointer bg-black px-10 my-1">Workshops</h3>
        </Link>
        <Link href="/poster-paper-presentation">
          <h3 className="cursor-pointer bg-black px-2 my-1">
            Poster / Paper Presentation
          </h3>
        </Link>
        <Link href="/contact-us">
          <h3 className="cursor-pointer bg-black px-10 my-1">Contact Us</h3>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
