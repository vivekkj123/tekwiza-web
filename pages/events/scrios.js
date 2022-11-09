import {
  faIndianRupeeSign,
  faLocation,
  faMapMarkedAlt,
  faMapMarker,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navbar from "../../src/components/Navbar";
import PageHeader from "../../src/components/PageHeader";
import ScriosImage from "/public/images/Events/SCRIOS.jpg";

const Scrios = () => {
  return (
    <>
      <Head>
        <title>Scrios | TekWiza 2k22</title>
      </Head>
      <div className="bg-black h-full">
        <Navbar />
        <PageHeader title={"Scrios"} />
        <div className="font-display grid gap-4 py-5 px-2 lg:px-12 lg:grid-cols-2">
          <div className="flex items-center font-thin mx-2 lg:mx-6">
            <p className="">
              Pick up the gun, drop the paint & have a blast!
              <br />
              <span className="font-bold">ACTION... EXCITEMENT... ADVENTURE...</span>
              <br />
              The game focuses on teamwork and strategy combined with pure,
              adrenaline-pumping fun which makes it an unforgettable experience.
              The game will be played by two teams of five players each who’ll
              compete against each other. While playing the paintball game, the
              competitors must accomplish a series of objectives involving a
              treasure hunt. It’s a chance to get away from everyday life and
              spend some time with the people you know and get to meet new
              friends. It’s a game of people, from planning, to playing, to
              bragging after an epic battle! You call it war. We call it
              entertainment.
            </p>
          </div>
          <Image className="h-46 w-auto" src={ScriosImage} />
        </div>
        <div className="flex lg:flex-row flex-col text-white items-center  lg:justify-around">
          <div className="h-auto border-2 mx-4 border-white py-4 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40">
            <h2 className="border-b-2 text-xl font-mono">Event Details</h2>

            <p className="mt-3 text-xs">Dec - 2 & 3</p>

            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faMapMarkedAlt} />
              <p className="text-xs">Ground</p>
            </div>
          </div>
          <div className="h-auto border-2 mx-4 border-white py-4 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40">
            <h2 className="border-b-2 text-xl font-mono">Registration</h2>
            <p className="mt-3 text-xs">5 members</p>

            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faIndianRupeeSign} />
              <p className="text-xs">Registration Fee: Rs.150/- per head</p>
            </div>
            <br />
            <Link href={"https://forms.gle/EszYfsQKkhwqc3N38"}>
              <div className="text-center cursor-pointer rounded-lg mx-auto button font-mono bg-white text-black px-4 lg:px-5 py-2">
                Register Now
              </div>
            </Link>
          </div>
          <div className="h-auto border-2 mx-4 border-white py-4 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40">
            <h2 className="border-b-2 text-xl font-mono">Contact Details</h2>

            <p className="mt-3 text-xs">Coordinators</p>

            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faPhone} />
              <p className="text-xs">Lakshmi K - +91 94007 91286</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Scrios;
