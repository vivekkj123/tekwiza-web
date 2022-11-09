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
import SnakeOMysteryImage from "/public/images/Events/Snake-O-Mystery.png";

const SnakeOMystery = () => {
  return (
    <>
      <Head>
        <title>Snake-O-Mystery | TekWiza 2k22</title>
      </Head>
      <div className="bg-black  overflow-hidden h-full">
        <Navbar />
        <PageHeader title={"Turn Inside Out"} />
        <div className="  font-display grid gap-4 py-5 px-2 lg:px-12 lg:grid-cols-2">
          <div className="flex items-center font-thin mx-2 lg:mx-6">
            <p>
              The event is based on the well-known game “Snake and Ladder” with
              a bit of twist. Firstly, a question will be asked to each
              participant and then if the answer is correct then one chance is
              given to him/her to throw a dice. Then the participant moves
              forward to the number that appears on the dice. If the participant
              fails to answer the question, then he/she will be sent back by one
              step. Discover yourself by exploring more games at
              Snake-O-Mystery.
              <br />
              All participants shall receive Certificate of Participation worth
              KTU activity points via the registered mail.
            </p>
          </div>
          <Image className="h-46 w-auto" src={SnakeOMysteryImage} />
        </div>
        <div className="flex lg:flex-row flex-col text-white  items-center  justify-around">
          <div className="h-auto border-2 mx-4 border-white py-4 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40">
            <h2 className="border-b-2 text-xl font-mono">Event Details</h2>

            <p className="mt-3 text-xs">Dec - 2 & 3</p>

            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faMapMarkedAlt} />
              <p className="text-xs">Bio Block (Seminar Hall I)</p>
            </div>
          </div>
          <div className="h-auto border-2 mx-4 border-white py-4 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40">
            <h2 className="border-b-2 text-xl font-mono">Registration</h2>
            <p className="mt-3 text-xs">2 members</p>

            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faIndianRupeeSign} />
              <p className="text-xs">Registration Fee: Rs.250/- per head</p>
            </div>
            <br />
            <Link href={"https://forms.gle/kCmQUCkbJPeK18bb9"}>
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
              <p className="text-xs">Christina Koshy- +91 94004 25654</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SnakeOMystery;
