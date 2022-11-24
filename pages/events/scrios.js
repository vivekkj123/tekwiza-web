import {
  faIndianRupeeSign, faMapMarkedAlt, faPhone
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Aos from 'aos';
import 'aos/dist/aos.css';
import ExportedImage from "next-image-export-optimizer";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect } from "react";
import Footer from "../../src/components/Footer";
import Navbar from "../../src/components/Navbar";
import PageHeader from "../../src/components/PageHeader";
import ScriosImage from "/public/images/Events/SCRIOS.PNG";

const Scrios = () => {
  useEffect(()=> {
    Aos.init({duration: 500})
  },[]);
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
              adrenaline-pumping fun which makes it an unforgettable <span data-aos="fade-right">
              experience.
              The game will be played by two teams of five players each who’ll
              compete against each other. While playing the paintball game, the
              competitors must accomplish a series of objectives involving a
              treasure hunt. It’s a chance to get away from everyday life and
              spend some time with the people you know and get to meet new
              friends. It’s a game of people, from planning, to playing, to
              bragging after an epic battle! You call it war. We call it
              entertainment.</span> 
            </p>
          </div>
          <ExportedImage className="h-46 w-auto" src={ScriosImage} />
        </div>
        <div className="flex lg:flex-row flex-col text-white items-center  lg:justify-around">
          <div className="h-auto card border-2 mx-4 border-white py-10 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40" data-aos="fade-right" data-aos-delay="50">
            <h2 className="border-b-2 text-xl font-mono">Event Details</h2>

            <p className="mt-3 text-xs py-1">Dec 3rd</p>

            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faMapMarkedAlt} />
              <p className="text-xs">Ground</p>
            </div>
          </div>
          <div className="h-auto card border-2 mx-4 border-white py-4 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40" data-aos="fade-right" data-aos-delay="100">
            <h2 className="border-b-2 text-xl font-mono">Registration</h2>
            <p className="mt-3 text-xs">5 members</p>

            <div className="register h-auto my-2 py-2 px-2 flex "><div className="circle"></div> <p className="register-fee">FEE</p><div></div><FontAwesomeIcon className="mx-2 text-black" icon={faIndianRupeeSign} /><p className="text-black price ">150<span>/-</span></p></div>
            <Link href={"https://forms.gle/EszYfsQKkhwqc3N38"}>
              <div className="text-center cursor-pointer rounded-lg mx-auto button font-mono bg-white text-black px-4 lg:px-5 py-2">
                Register Now
              </div>
            </Link>
            <p className="text-xs mx-4 mt-2 text-center">₹ 50 off per head for the first 6 teams.</p>
          </div>
          <div className="h-auto card border-2 mx-4 border-white py-9 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40" data-aos="fade-right" data-aos-delay="150">
            <h2 className="border-b-2 text-xl font-mono">Contact Details</h2>

            <p className="mt-3 text-xs">Coordinators</p>

            <div className="flex items-center mt-5">
              <FontAwesomeIcon className="mx-2" icon={faPhone} />
              <p className="text-xs">Lakshmi K : <br/>+91 94007 91286</p>
            </div>
          </div>
        </div>
        <Footer />

      </div>
    </>
  );
};

export default Scrios;
