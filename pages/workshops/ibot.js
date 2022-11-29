import {
  faClock,
  faIndianRupeeSign,
  faMapMarkedAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Aos from "aos";
import "aos/dist/aos.css";
import ExportedImage from "next-image-export-optimizer";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect } from "react";
import IbotImage from "../../public/images/Workshops/IBot wrk.jpg";
import Footer from "../../src/components/Footer";
import Navbar from "../../src/components/Navbar";
import PageHeader from "../../src/components/PageHeader";

const IBot = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <>
      <Head>
        <title>IBot Workshop | TekWiza 2k22</title>
      </Head>
      <div className="bg-black  overflow-hidden h-full">
        <Navbar />
        <PageHeader title={"IBot"} />
        <div className="  font-display grid gap-4 py-5 px-2 lg:px-12 lg:grid-cols-2">
          <div className="flex items-center font-thin mx-2 lg:mx-6">
            <p>
              Have you ever dreamed of building your own machine in the
              constantly-expanding world of technology?
              <br />
              <br />
              The day you’ve been looking forward to has finally arrived!!!
              <br />
              <br />
              TEKWIZA offers the{" "}
              <span className="font-bold">“Intelligent Robotics”</span>{" "}
              workshop, where you may learn everything there is to know and
              create the most amazing devices. Seize this fantastic opportunity
              to be the driving force that brought humanity to its zenith.
              <br />
              <br />
              <b className="font-bold"> Kit will be provided for Groups</b>
            </p>
          </div>
          <ExportedImage className="h-46 w-auto" src={IbotImage} />
        </div>
        <div className="lg:flex-row flex flex-col text-white  items-center  lg:justify-around">
          <div
            className="h-auto card border-2 mx-4 border-white py-9 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40"
            data-aos="fade-right"
            data-aos-delay="50"
          >
            <h2 className="border-b-2 text-xl font-mono">Event Details</h2>

            <p className="mt-3 text-xs">Dec 3rd</p>
            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faClock} />
              <p className="text-xs">9:00 AM - 3:30 PM</p>
            </div>
            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faMapMarkedAlt} />
              <p className="text-xs">IoT Lab</p>
            </div>
          </div>
          <div
            className="h-auto card border-2 mx-4 border-white py-7 font-display flex flex-col items-center my-4 rounded-lg w-40 lg:w-48"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <h2 className="border-b-2 text-xl font-mono">Registration</h2>

            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faIndianRupeeSign} />
              <p className="text-xs">Registration Fee: Rs.500/-</p>
            </div>
            <br />
            <Link href={"https://forms.gle/ZVGDGjE8jDGNfSzT8"}>
              <div className="text-center cursor-pointer rounded-lg mx-auto button font-mono bg-white text-black px-4 lg:px-5 py-2">
                Register Now
              </div>
            </Link>
          </div>
          <div
            className="h-auto card border-2 mx-4 border-white py-3 font-display flex flex-col items-center my-4 rounded-lg  w-40 lg:w-48"
            data-aos="fade-right"
            data-aos-delay="150"
          >
            <h2 className="border-b-2 text-xl font-mono">Contact Details</h2>

            <p className="mt-3 text-xs">Coordinators</p>

            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faPhone} />
              <p className="text-xs">Abhishek M A - 9744706995</p>
            </div>
            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faPhone} />
              <p className="text-xs">Sharon Rose - 7012522679</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default IBot;
