import {
  faIndianRupeeSign,
  faMapMarkedAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import ArcadeImage from '../../public/images/Events/CSArcade.png'
import React from "react";

import React , { useEffect }from "react";

import Navbar from "../../src/components/Navbar";
import PageHeader from "../../src/components/PageHeader";
import Aos from 'aos';
import 'aos/dist/aos.css';
//   import ZypherImage from "/public/images/Events/Snake-O-Mystery.png";

const Arcade = () => {
  useEffect(()=> {
    Aos.init({duration: 500})
  },[]);
  return (
    <>
      <Head>
        <title>Arcade | TekWiza 2k22</title>
      </Head>
      <div className="bg-black  overflow-hidden h-full">
        <Navbar />
        <PageHeader title={"Arcade"} />
        <div className="  font-display grid gap-4 py-5 px-2 lg:px-12 lg:grid-cols-2">
          <div className="flex items-center font-thin mx-2 lg:mx-6">
            <p>
              Let’s surf through the 60s and the 70s and have a splash of a
              futuristic hint of games in our very own arcade paradise! In this
              paradise, you can witness all sorts of fun, a little bit of “blue
              suede shoes”, a bit of Mario kart, and some bio-digital jazz,
              man.! So hop on, “don’t be cruel” and let the arcade paradise
              decide the next jedi.!
            </p>
          </div>
          <Image className="h-46 w-auto" src={ArcadeImage} />
        </div>
        <div className="lg:flex-row flex-col flex text-white  items-center  justify-around">
          <div className="h-auto border-2 mx-4 border-white py-4 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40 " data-aos="fade-right" >
            <h2 className="border-b-2 text-xl font-mono">Event Details</h2>

            <p className="mt-3 text-xs">Dec - 2 & 3</p>

            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faMapMarkedAlt} />
              <p className="text-xs">Decennial Block (215)</p>
            </div>
          </div>
          <div className="h-auto border-2 mx-4 border-white py-4 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40" data-aos="fade-right" data-aos-delay="100">
            <h2 className="border-b-2 text-xl font-mono">Registration</h2>

            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faIndianRupeeSign} />
              <p className="text-xs">Registration Fee: FREE</p>
            </div>
            <br />
          </div>
          <div className="h-auto border-2 mx-4 border-white py-4 font-display flex flex-col items-center my-4 rounded-lg lg:lg:lg:w-48 w-40" data-aos="fade-right" data-aos-delay="150">
            <h2 className="border-b-2 text-xl font-mono">Contact Details</h2>

            <p className="mt-3 text-xs">Coordinators</p>

            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faPhone} />
              <p className="text-xs">Lena - +91 81568 13000</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Arcade;
