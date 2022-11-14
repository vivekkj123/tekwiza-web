import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import tekwizaLogo from "/public/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCaretDown,
  faCaretSquareDown,
  faCaretUp,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [ToggleNavbar, setToggleNavbar] = useState(false);
  const [ToggleDropNavbar, setToggleDropNavbar] = useState(false);
  return (
    <>
      <div className=" Navbar flex text-white lg:px-7 px-2 py-2 h-12 w-screen justify-between items-center ">
        <div className="LogoContainer flex">
          <Link href={"/"}>
            <Image
              alt="Tekwiza Logo"
              className="h-6 lg:h-8 w-auto"
              src={tekwizaLogo}
            />
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
          <h3 className="hover:underline pink decoration-purple-600 underline-offset-4 ml-5 cursor-pointer">
            <Link href="/events">Events </Link>
            <FontAwesomeIcon
              onClick={() => setToggleDropNavbar(!ToggleDropNavbar)}
              icon={ToggleDropNavbar ? faCaretUp : faCaretDown}
            />
          </h3>
          <ul
            onMouseLeave={() => setToggleDropNavbar(!ToggleDropNavbar)}
            className={`${
              ToggleDropNavbar ? "block" : "hidden"
            }  absolute top-10 bg-slate-900 bg-opacity-50 px-5 py-2 rounded-lg`}
          >
            <Link href={"/events"}>
              <li className="border-b-2 border-slate-800">All Events</li>
            </Link>
            <Link href={"/google-events"}>
              <li>
                <FontAwesomeIcon className="text-xs" icon={faGoogle} /> Events
              </li>
            </Link>
          </ul>

          <Link href="/workshops">
            <h3 className="hover:underline pink decoration-purple-600 underline-offset-4 ml-5 cursor-pointer">
              Workshops
            </h3>
          </Link>
          {/* <Link href="/the-team">
            <h3 className="hover:underline pink decoration-purple-600 underline-offset-4 ml-5 cursor-pointer">
              The Team
            </h3>
          </Link> */}
          <Link href="/contact-us">
            <h3 className="hover:underline pink decoration-purple-600 underline-offset-4 ml-5 cursor-pointer">
              Contact Us
            </h3>
          </Link>
        </div>
      </div>
      <div
        className={`NavBarLinks h-screen w-screen bg-transparent ${
          ToggleNavbar ? "flex flex-col" : "hidden"
        } items-center mx-auto py-4 z-[5]`}
      >
        <Link href="/">
          <h3 className="hover:underline pink decoration-purple-600 underline-offset-4 cursor-pointer bg-black px-10 my-1 text-white">
            Home
          </h3>
        </Link>
        <h3 className="w-3/4 flex justify-between items-center hover:underline pink decoration-purple-600 underline-offset-4 cursor-pointer bg-black px-10 my-1 text-white">
          <Link href="/events">Events</Link>

          <FontAwesomeIcon
            onClick={() => setToggleDropNavbar(!ToggleDropNavbar)}
            icon={ToggleDropNavbar ? faCaretUp : faCaretDown}
          />
        </h3>
        <ul className={`${ToggleDropNavbar ? "block" : "hidden"} `}>
          <Link href={"/events"}>
            <li className=" px-6 bg-black">All Events</li>
          </Link>
          <Link href={"/google-events"}>
            <li className=" bg-black px-6 my-2">
              <FontAwesomeIcon className="text-xs" icon={faGoogle} /> Events
            </li>
          </Link>
        </ul>
        <Link href="/workshops">
          <h3 className="hover:underline pink decoration-purple-600 underline-offset-4 cursor-pointer bg-black px-10 my-1">
            Workshops
          </h3>
        </Link>
        {/* <Link href="/the-team">
          <h3 className="hover:underline pink decoration-purple-600 underline-offset-4 cursor-pointer bg-black px-10 my-1">
            The Team
          </h3>
        </Link> */}
        <Link href="/contact-us">
          <h3 className="hover:underline pink decoration-purple-600 underline-offset-4 cursor-pointer bg-black px-10 my-1">
            Contact Us
          </h3>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
