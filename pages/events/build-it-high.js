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
//   import BuildItHighImage from "/public/images/Events/Snake-O-Mystery.png";

const BuildItHigh = () => {
  return (
    <>
      <Head>
        <title>Build It High | TekWiza 2k22</title>
      </Head>
      <div className="bg-black  overflow-hidden h-full">
        <Navbar />
        <PageHeader title={"Build It High!"} />
        <div className="  font-display grid gap-4 py-5 px-2 lg:px-12 lg:grid-cols-2">
          <div className="flex items-center font-thin mx-2 lg:mx-6">
            <p>
              One of the creative and interesting events which would deal with
              designing and building innovative structure models with precision
              and accuracy. Test your structural proportioning skills by
              participating in “Build it High!”. Get your measurements right
              with precision and accuracy and build the tallest building to
              withstand one of the most powerful forces of nature- earthquake
              load. Models will be tested on a vibration table and judgment will
              be based on the withstanding duration and height of the structure.
              Materials to build structures will be provided. Groups of a
              maximum of 4 members can be formed. A certificate of participation
              will be provided.
            </p>
          </div>
          {/* <Image className="h-46 w-auto" src={SnakeOMysteryImage} /> */}
        </div>
        <div className="flex text-white   justify-around">
          <div className="h-auto border-2 mx-4 border-white py-4 font-display flex flex-col items-center my-4 rounded-lg w-48">
            <h2 className="border-b-2 text-xl font-mono">Event Details</h2>

            <p className="mt-3 text-xs">Dec - 2 & 3</p>

            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faMapMarkedAlt} />
              <p className="text-xs">Decennial Block (014)</p>
            </div>
          </div>
          <div className="h-auto border-2 mx-4 border-white py-4 font-display flex flex-col items-center my-4 rounded-lg w-48">
            <h2 className="border-b-2 text-xl font-mono">Registration</h2>
            <p className="mt-3 text-xs">4 members</p>

            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faIndianRupeeSign} />
              <p className="text-xs">Registration Fee: Rs.200/-</p>
            </div>
            <br />
            <Link href={"https://bit.ly/buid_it_high"}>
              <div className="text-center cursor-pointer rounded-lg mx-auto button font-mono bg-white text-black px-4 lg:px-5 py-2">
                Register Now
              </div>
            </Link>
          </div>
          <div className="h-auto border-2 mx-4 border-white py-4 font-display flex flex-col items-center my-4 rounded-lg w-48">
            <h2 className="border-b-2 text-xl font-mono">Contact Details</h2>

            <p className="mt-3 text-xs">Coordinators</p>

            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faPhone} />
              <p className="text-xs">Jerin Worin : +91 85473 50667</p>
            </div>
            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faPhone} />
              <p className="text-xs">Arundhathi P : +91 91883 43839</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuildItHigh;
