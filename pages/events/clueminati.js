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
//   import CluieminatiImage from "/public/images/Events/Snake-O-Mystery.png";

const Cluieminati = () => {
  return (
    <>
      <Head>
        <title>Clueminati | TekWiza 2k22</title>
      </Head>
      <div className="bg-black  overflow-hidden h-full">
        <Navbar />
        <PageHeader title={"Clueminati"} />
        <div className="  font-display grid gap-4 py-5 px-2 lg:px-12 lg:grid-cols-2">
          <div className="flex items-center font-thin mx-2 lg:mx-6">
            <p>
              Clueminati, as the name suggests, is a 5-level web-based
              interactive Clue Hunt. Use 101% of your brain power to solve these
              not-so-hard problems. Let’s see who makes it to the top and takes
              away the prize!!! Use the clues to unlock each level. The first
              group to successfully tackle the clues within the stipulated time
              limit will be declared winners. Groups of a maximum of 4 members
              can be formed.
            </p>
          </div>
          {/* <Image className="h-46 w-auto" src={SnakeOMysteryImage} /> */}
        </div>
        <div className="lg:flex-row flex-col flex text-white  items-center  justify-around">
          <div className="h-auto border-2 mx-4 border-white py-4 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40">
            <h2 className="border-b-2 text-xl font-mono">Event Details</h2>

            <p className="mt-3 text-xs">Dec - 2 & 3</p>

            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faMapMarkedAlt} />
              <p className="text-xs">Decennial Block (017)</p>
            </div>
          </div>
          <div className="h-auto border-2 mx-4 border-white py-4 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40">
            <h2 className="border-b-2 text-xl font-mono">Registration</h2>
            <p className="mt-3 text-xs">4 members</p>

            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faIndianRupeeSign} />
              <p className="text-xs">Registration Fee: Rs.200/-</p>
            </div>
            <br />
            <Link href={"https://bit.ly/Clue_Hunt"}>
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
              <p className="text-xs">Jaise S Arakkal : +91 94005 86318</p>
            </div>
            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faPhone} />
              <p className="text-xs">Catherin Sunny : +91 73563 19082</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cluieminati;
