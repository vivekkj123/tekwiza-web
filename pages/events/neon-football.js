import {
  faIndianRupeeSign,
  faMapMarkedAlt,
  faPhone
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Aos from 'aos';
import 'aos/dist/aos.css';
import ExportedImage from "next-image-export-optimizer";
import Head from "next/head";
import React, { useEffect } from "react";
import NeonFootballImage from '../../public/images/Events/Neon Football.png';
import Footer from "../../src/components/Footer";
import Navbar from "../../src/components/Navbar";
import PageHeader from "../../src/components/PageHeader";

const NeonFootball = () => {
  useEffect(()=> {
    Aos.init({duration: 500})
  },[]);
  return (
    <>
      <Head>
        <title>Neon Football | TekWiza 2k22</title>
      </Head>
      <div className="bg-black  overflow-hidden h-full">
        <Navbar />
        <PageHeader title={"Neon Football"} />
        <div className="  font-display grid gap-4 py-5 px-2 lg:px-12 lg:grid-cols-2">
          <div className="flex items-center font-thin mx-2 lg:mx-6">
            <p>
              A high-octane football game that will captivate even the most
              hardcore gamer, this eye-catching game relies on speed, focus and
              an all-out competitive spirit. Participants are expected to form a
              group of 8 members (max) which will be split into 2 teams. The
              duration of a match will be 10 minutes.
              
            </p>
          </div>
          <ExportedImage className="h-46 w-auto" src={NeonFootballImage} />
        </div>
        <div className="lg:flex-row flex-col flex text-white  items-center  justify-around">
          <div className="h-auto card border-2 mx-4 border-white py-9 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40" data-aos="fade-right" data-aos-delay="50" >
            <h2 className="border-b-2 text-xl font-mono">Event Details</h2>

            <p className="mt-3 text-xs">Dec - 2 & 3</p>

            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faMapMarkedAlt} />
              <p className="text-xs">Civil Seminar Hall</p>
            </div>
          </div>
          <div className="h-auto card border-2 mx-4 border-white py-4 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40" data-aos="fade-right" data-aos-delay="100">
            <h2 className="border-b-2 text-xl font-mono">Registration</h2>
            <p className="mt-3 text-xs">6 - 8 members</p>

            <div className="register h-auto my-2 py-2 px-2 flex "><div className="circle"></div> <p className="register-fee">FEE</p><div></div><FontAwesomeIcon className="mx-2 text-black" icon={faIndianRupeeSign} /><p className="text-black price ">40<span>/-</span></p></div>
            <p className="bg-white text-black px-3 rounded my-1">Spot Registration</p>
          </div>
          <div className="h-auto card border-2 mx-4 border-white py-3 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40" data-aos="fade-right" data-aos-delay="150">
            <h2 className="border-b-2 text-xl font-mono">Contact Details</h2>

            <p className="mt-3 text-xs">Coordinators</p>

            <div className="flex  items-center mt-5">
              <FontAwesomeIcon className="mx-2" icon={faPhone} />
              <p className="text-xs">Dominion David :<br/>+91 95673 59632</p>
            </div>
            <div className="flex items-center  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faPhone} />
              <p className="text-xs">Livin A S :<br/>+91 86066 57005</p>
            </div>
          </div>
        </div>
        <Footer />

      </div>
    </>
  );
};

export default NeonFootball;
