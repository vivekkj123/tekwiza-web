import {
  faLocation,
  faMapMarkedAlt,
  faMapMarker,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Navbar from "../../src/components/Navbar";
import PageHeader from "../../src/components/PageHeader";
import CodeBlueImage from "/public/images/Events/Code Blue.png";

const CodeBlue = () => {
  return (
    <>
      <Head>
        <title>Code Blue | TekWiza 2k22</title>
      </Head>
      <div className="bg-black  overflow-hidden h-full">
        <Navbar />
        <PageHeader title={"Code Blue"} />
        <div className="  font-display grid gap-4 py-5 px-2 lg:px-12 lg:grid-cols-2">
          <div className="flex items-center font-thin mx-2 lg:mx-6">
            <p>
              A real time experience of stepping into a recreated distinctive
              ICU setup that astonishes the spectators through the insights of
              tech support behind it.
            </p>
          </div>
          <Image className="h-46 w-auto" src={CodeBlueImage} />
        </div>
        <div className="lg:flex-row flex-col flex text-white   items-center justify-around">
          <div className="h-auto border-2 mx-4 border-white py-4 font-display flex flex-col items-center my-4 rounded-lg w-40 lg:w-48">
            <h2 className="border-b-2 text-xl font-mono">Event Details</h2>

            <p className="mt-3 text-xs">Dec - 2 & 3</p>

            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faMapMarkedAlt} />
              <p className="text-xs">Bio Block (Agappe Lab, Quadrangle)</p>
            </div>
            <hr />
          </div>  
        </div>
      </div>
    </>
  );
};

export default CodeBlue;