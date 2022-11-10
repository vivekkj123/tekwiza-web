import {
    faIndianRupeeSign,
    faMapMarkedAlt,
    faPhone,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import Head from "next/head";
  import Image from "next/image";
  import React from "react";
  import Navbar from "../../src/components/Navbar";
  import PageHeader from "../../src/components/PageHeader";
import HaloImage from "../../public/images/Events/Halo[ EEE Subevent 2 ].png";
  
  const Halo = () => {
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
              Free for all Laser Shooting Deathmatch.
              </p>
            </div>
            <Image className="h-46 w-auto" src={HaloImage} />
          </div>
          <div className="lg:flex-row flex-col flex text-white  items-center  justify-around">
            <div className="h-auto border-2 mx-4 border-white py-4 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40">
              <h2 className="border-b-2 text-xl font-mono">Event Details</h2>
  
              <p className="mt-3 text-xs">Dec - 2 & 3</p>
  
              <div className="flex  mt-5">
                <FontAwesomeIcon className="mx-2" icon={faMapMarkedAlt} />
                <p className="text-xs">EEE Power Electronics Lab</p>
              </div>
            </div>
            <div className="h-auto border-2 mx-4 border-white py-4 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40">
              <h2 className="border-b-2 text-xl font-mono">Registration</h2>
  
              <div className="flex  mt-5">
                <FontAwesomeIcon className="mx-2" icon={faIndianRupeeSign} />
                <p className="text-xs">Registration Fee: Rs.20/-</p>
              </div>
              <br />
              <p className="bg-white text-black text-center px-3">
                Spot Registration
              </p>
              <br />
            </div>
            <div className="h-auto border-2 mx-4 border-white py-4 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40">
              <h2 className="border-b-2 text-xl font-mono">Contact Details</h2>
  
              <p className="mt-3 text-xs">Coordinators</p>
  
              <div className="flex  mt-5">
                <FontAwesomeIcon className="mx-2" icon={faPhone} />
                <p className="text-xs">TBA</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Halo;
  