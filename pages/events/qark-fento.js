import {
  faClock,
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
//   import ZypherImage from "/public/images/Events/Snake-O-Mystery.png";

const QuarkFento = () => {
  return (
    <>
      <Head>
        <title>QuarkFento | TekWiza 2k22</title>
      </Head>
      <div className="bg-black  overflow-hidden h-full">
        <Navbar />
        <PageHeader title={"QuarkFento"} />
        <div className="  font-display grid gap-4 py-5 px-2 lg:px-12 lg:grid-cols-2">
          <div className="flex items-center font-thin mx-2 lg:mx-6">
            <p>
              <i>
                “Failure doesn’t mean the game is over, it means try again with
                experience….”
              </i>
              <br />
              Solving puzzles are no easy game especially when it’s related to
              electronics. The event includes analyzing an electronic puzzle or
              a game and detecting and correcting any errors through logical
              reasoning and problem solving.
              <br />
              If your mind can withstand the pressure and yet think quickly, you
              can emerge victorious. Battle it out and astonish us with your
              talents.
            </p>
          </div>
          {/* <Image className="h-46 w-auto" src={SnakeOMysteryImage} /> */}
        </div>
        <div className="lg:flex-row flex-col flex text-white  items-center  justify-around">
          <div className="h-auto border-2 mx-4 border-white py-4 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40">
            <h2 className="border-b-2 text-xl font-mono">Event Details</h2>

            <p className="mt-3 text-xs">Dec - 2 & 3</p>
            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faClock} />
              <p className="text-xs">11:00 AM</p>
            </div>
            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faMapMarkedAlt} />
              <p className="text-xs">EC Seminar Hall</p>
            </div>
          </div>
          <div className="h-auto border-2 mx-4 border-white py-4 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40">
            <h2 className="border-b-2 text-xl font-mono">Registration</h2>

            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faIndianRupeeSign} />
              <p className="text-xs">Registration Fee: Rs.50/-</p>
            </div>
            <br />
            <Link href={"https://forms.gle/nUZ7q87MRPsBo5Y4A"}>
              <div className="text-center cursor-pointer rounded-lg mx-auto button font-mono bg-white text-black px-4 lg:px-5 py-2">
                Register Now
              </div>
            </Link>
            <br />
            <p className="text-xs text-center">
              Deadline for Registrations
              <br /> December 1st
            </p>
          </div>
          <div className="h-auto border-2 mx-4 border-white py-4 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40">
            <h2 className="border-b-2 text-xl font-mono">Contact Details</h2>

            <p className="mt-3 text-xs">Coordinators</p>

            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faPhone} />
              <p className="text-xs"> Aswathy Ashok - +91 70346 03473</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuarkFento;
