import {
  faIndianRupeeSign, faMapMarkedAlt, faPhone
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ExportedImage from "next-image-export-optimizer";
import Head from "next/head";
import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from "react";
import Footer from "../../src/components/Footer";
import Navbar from "../../src/components/Navbar";
import PageHeader from "../../src/components/PageHeader";
import PipetteByNosImage from "/public/images/Events/Pipette by Numbers.jpg";

const PipetteByNos = () => {
  useEffect(()=> {
    Aos.init({duration: 500})
  },[]);
  return (
    <>
      <Head>
        <title>Pipette By Numbers | TekWiza 2k22</title>
      </Head>
      <div className="bg-black  overflow-hidden h-full">
        <Navbar />
        <PageHeader title={"Pipette By Numbers"} />
        <div className="  font-display grid gap-4 py-5 px-2 lg:px-12 lg:grid-cols-2">
          <div className="flex items-center font-thin mx-2 lg:mx-6">
            <p>
              Artists have been borrowing techniques and tools from
              biotechnology to produce pieces of art. Pipetting dots of paint to
              create a picture mimics a painting technique called Pointillism.
              <span data-aos="fade-right" data-aos-delay="50" >
              Here we provide participants with dotted images with numbers in
              it. Select a numbered color and use the micropipette to draw up
              20uL of paint into the micropipette tip. Find the corresponding
              number on the canvas and carefully deposit the paint on top of the
              number. After multiple participations, the image will be revealed!
              <br />
              The technique of using micropipette will be briefed before use.
              </span>

            </p>
          </div>
          <ExportedImage className="h-46 w-auto" src={PipetteByNosImage} />
        </div>
        <div className="lg:flex-row flex-col flex text-white  items-center  justify-around">
          <div className="h-auto card border-2 mx-4 border-white py-4 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40" data-aos="fade-right" data-aos-delay="50">
            <h2 className="border-b-2 text-xl font-mono">Event Details</h2>

            <p className="mt-3 text-xs">Dec - 2 & 3</p>

            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faMapMarkedAlt} />
              <p className="text-xs">Chemical Engineering Lab</p>
            </div>
          </div>
          <div className="h-auto card border-2 mx-4 border-white py-4 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40" data-aos="fade-right" data-aos-delay="100">
            <h2 className="border-b-2 text-xl font-mono">Registration</h2>

            <div className="register h-auto my-2 py-2 px-2 flex "><div className="circle"></div> <p className="register-fee">FEE</p><div></div><FontAwesomeIcon className="mx-2 text-black" icon={faIndianRupeeSign} /><p className="text-black price ">70<span>/-</span></p></div>

            <p className="bg-white text-black text-center px-3 rounded">Spot Registration</p>
          </div>
          <div className="h-auto card border-2 mx-4 border-white py-4 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40" data-aos="fade-right" data-aos-delay="150">
            <h2 className="border-b-2 text-xl font-mono">Contact Details</h2>

            <p className="mt-3 text-xs">Coordinators</p>

            <div className="flex items-center  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faPhone} />
              <p className="text-xs">Ripsymol Toby : <br/> +91 83308 28405</p>
            </div>
          </div>
        </div>
        <Footer />

      </div>
    </>
  );
};

export default PipetteByNos;
