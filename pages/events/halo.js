import {
  faIndianRupeeSign,
  faMapMarkedAlt,
  faPhone
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ExportedImage from "next-image-export-optimizer";
import Head from "next/head";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import HaloImage from "../../public/images/Events/Halo[ EEE Subevent 2 ].png";
import Footer from "../../src/components/Footer";
import Navbar from "../../src/components/Navbar";
import PageHeader from "../../src/components/PageHeader";

const Halo = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <>
      <Head>
        <title>Halo | TekWiza 2k22</title>
      </Head>
      <div className="bg-black  overflow-hidden h-full">
        <Navbar />
        <PageHeader title={"Halo"} />
        <div className="  font-display grid gap-4 py-5 px-2 lg:px-12 lg:grid-cols-2">
          <div className="flex items-center font-thin mx-2 lg:mx-6">
            <p>
              "Halo" is a real time strategy game that utilizes an arena with
              laser guns , vest and certain blockades specially made for the
              laser tag arena. The goal of the individual is to eliminate the
              other player from the particular round. The death match ends on a
              time limit of seven minutes and the winner of the game is the last
              man standing out of the four players in a round. Each player gets
              a vest that is usually covered with sensors that can be hit by a
              laser emitted from the laser gun. When the beam hits the sensor,
              that player either scores a point or reduces the health tag placed
              with them. Obstacles are placed for better cover and lights will
              be dimmed to make the game intense and thrilling
            </p>
          </div>
          <ExportedImage className="h-46 w-auto" src={HaloImage} />
        </div>
        <div className="lg:flex-row flex-col flex text-white  items-center  justify-around">
          <div
            className="h-auto card border-2 mx-4 border-white py-6 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40"
            data-aos="fade-right"
            data-aos-delay="50"
          >
            <h2 className="border-b-2 text-xl font-mono">Event Details</h2>

            <p className="mt-3 text-xs">Dec - 2 & 3</p>

            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faMapMarkedAlt} />
              <p className="text-xs">EEE Power Electronics Lab</p>
            </div>
          </div>
          <div
            className="h-auto card border-2 mx-4 border-white py-4 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <h2 className="border-b-2 text-xl font-mono">Registration</h2>

            <div className="register h-auto my-2 py-2 px-2 flex ">
              <div className="circle"></div> <p className="register-fee">FEE</p>
              <div></div>
              <FontAwesomeIcon
                className="mx-2 text-black"
                icon={faIndianRupeeSign}
              />
              <p className="text-black price ">
                20<span>/-</span>
              </p>
            </div>

            <p className="bg-white text-black text-center px-3 rounded my-2">
              Spot Registration
            </p>
          </div>
          <div
            className="
h-auto card border-2 mx-4 border-white py-8 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40"
            data-aos="fade-right"
            data-aos-delay="150"
          >
            <h2 className="border-b-2 text-xl font-mono">Contact Details</h2>

            <p className="mt-3 text-xs">Coordinators</p>

            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faPhone} />
              <p className="text-xs">TBA</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Halo;
