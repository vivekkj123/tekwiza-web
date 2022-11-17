import {
  faIndianRupeeSign,
  faMapMarkedAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Aos from "aos";
import "aos/dist/aos.css";
import ExportedImage from "next-image-export-optimizer";
import Head from "next/head";
import React, { useEffect } from "react";
import TechArcadeImage from "../../public/images/Events/Tech arcade[ EEE subevent 1].png";
import Footer from "../../src/components/Footer";
import Navbar from "../../src/components/Navbar";
import PageHeader from "../../src/components/PageHeader";

const TechArcade = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <>
      <Head>
        <title>Tech Arcade | TekWiza 2k22</title>
      </Head>
      <div className="bg-black  overflow-hidden h-full">
        <Navbar />
        <PageHeader title={"Tech Arcade"} />
        <div className="  font-display grid gap-4 py-5 px-2 lg:px-12 lg:grid-cols-2">
          <div className="flex items-center font-thin mx-2 lg:mx-6">
            <p>
              Tired after exploring all other events around Techfest? Come relax
              and entertain yourself along with your friends with our collection
              of various games to entertain everyone participating in the
              Techfest. Games include:- Stick Arcade, Scream N Eat, GoalBot and
              ABCD.
            </p>
          </div>
          <ExportedImage className="h-46 w-auto" src={TechArcadeImage} />
        </div>
        <div className="lg:flex-row flex-col flex text-white  items-center  justify-around">
          <div
            className="
h-auto card border-2 mx-4 border-white py-7 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40"
            data-aos="fade-right"
            data-aos-delay="50"
          >
            <h2 className="border-b-2 text-xl font-mono">Event Details</h2>

            <p className="mt-3 text-xs">Dec - 2 & 3</p>

            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faMapMarkedAlt} />
              <p className="text-xs">DB Quadrangle half</p>
            </div>
          </div>
          <div
            className="h-auto card border-2 mx-4 border-white py-4 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <h2 className="border-b-2 text-xl font-mono">Registration</h2>
            <p className="text-center mt-2">
              Stick Arcade ₹10 <br />
              Scream N Eat ₹10 <br />
              GoalBot ₹20
              <br />
              ABCD ₹10
            </p>
            <p className="bg-white text-black text-center px-3  my-2 rounded">
              Spot Registration
            </p>
          </div>
          <div
            className="
h-auto card border-2 mx-4 border-white py-7 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40"
            data-aos="fade-right"
            data-aos-delay="150"
          >
            <h2 className="border-b-2 text-xl font-mono">Contact Details</h2>

            <p className="mt-3 text-xs">Coordinators</p>

            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faPhone} />
              <p className="text-xs">Lenin- +919074454866</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default TechArcade;
