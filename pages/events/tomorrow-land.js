import {
  faIndianRupeeSign,
  faMapMarkedAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import TomorrowLandImage from '../../public/images/Events/TomorrowLand.png'
import React from "react";
import Navbar from "../../src/components/Navbar";
import PageHeader from "../../src/components/PageHeader";
//   import ZypherImage from "/public/images/Events/Snake-O-Mystery.png";

const TomorrowLand = () => {
  return (
    <>
      <Head>
        <title>TomorrowLand | TekWiza 2k22</title>
      </Head>
      <div className="bg-black  overflow-hidden h-full">
        <Navbar />
        <PageHeader title={"TomorrowLand"} />
        <div className="  font-display grid gap-4 py-5 px-2 lg:px-12 lg:grid-cols-2">
          <div className="flex items-center font-thin mx-2 lg:mx-6">
            <p>
              A chance to participate in art auctions, Visit the Taj Mahal and
              gain an understanding of various computing topics, all within a
              single hour, overwhelming? How about taking a breather at our
              IOT-enabled lounge? Hard to believe right, I know, but why not
              give it a try? An opportunity to experience various budding fields
              of computer science in person, we’ll have exhibits on,
              <ul className="list-disc">
                <li>History of computing</li>
                <li>IoT and home automation</li>
                <li>Blockchain cryptocurrency and NFTs</li>
                <li>AR art gallery</li>
                <li>VR world tours and games</li>
                <li>3D printing</li>
                <li>Artificial Intelligence</li>
                <li>Data Science</li>
                <li>Future of Computing</li>
              </ul>
            </p>
          </div>
          <Image className="h-46 w-auto" src={TomorrowLandImage} />
        </div>
        <div className="lg:flex-row flex-col flex text-white  items-center  justify-around">
          <div className="h-auto border-2 mx-4 border-white py-4 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40">
            <h2 className="border-b-2 text-xl font-mono">Event Details</h2>

            <p className="mt-3 text-xs">Dec - 2 & 3</p>

            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faMapMarkedAlt} />
              <p className="text-xs">Decenial Block (306, 307)</p>
            </div>
          </div>
          <div className="h-auto border-2 mx-4 border-white py-4 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40">
            <h2 className="border-b-2 text-xl font-mono">Registration</h2>

            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faIndianRupeeSign} />
              <p className="text-xs">Registration Fee: FREE</p>
            </div>
            <br />
          </div>
          <div className="h-auto border-2 mx-4 border-white py-4 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40">
            <h2 className="border-b-2 text-xl font-mono">Contact Details</h2>

            <p className="mt-3 text-xs">Coordinators</p>

            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faPhone} />
              <p className="text-xs">Joel Anto : +91 86064 44892</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TomorrowLand;
