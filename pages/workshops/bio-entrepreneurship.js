import {
  faClock,
  faIndianRupeeSign,
  faMapMarkedAlt,
  faPhone
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect } from "react";
import Navbar from "../../src/components/Navbar";
import PageHeader from "../../src/components/PageHeader";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../../src/components/Footer";
import Link from "next/link";
import BioEnterpreneurshipImage from "../../public/images/Workshops/Bio-Entrepreneurship Workshop.png";

const BioEnterpreneurship = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <>
      <Head>
        <title>Bio Entrepreneurship | TekWiza 2k22</title>
      </Head>
      <div className="bg-black  overflow-hidden h-full">
        <Navbar />
        <PageHeader title={"Bio Entrepreneurship"} />
        <div className="  font-display grid gap-4 py-5 px-2 lg:px-12 lg:grid-cols-2">
          <div className="flex items-center font-thin mx-2 lg:mx-6">
            <p>
              <h3 className="font-semibold">
                by Mr. Najeeb Bin Haneef, Founder & CEO of ZAARA BIOTECH{" "}
              </h3>
              <br />
              An entrepreneur is the driving force for the forward momentum of
              an organization. Biotechnology entrepreneurship is the sum of all
              activities necessary to build an enterprise through the melding of
              both scientific and business disciplines. Mr. Najeeb’s
              entrepreneurial journey began from Sahrdaya in 2016. After
              undergoing training in algal culture, he collaborated with the
              Indian Council of Agriculture and Research’s Central Institute of
              Fisheries Technology (ICAR CIFT) towards the product development
              (B-Lite Cookies). Zaara Biotech fostered under the Kerala Startup
              Mission’s (KSUM) flagship Innovation and Entrepreneurship
              Development Centre (IEDC) scheme. He has received big investments
              of 10 million and more from UAE and USA. Certificate of
              Participation shall be provided to all the participants.
            </p>
          </div>
          <Image className="h-46 w-auto" src={BioEnterpreneurshipImage} />
        </div>
        <div className="lg:flex-row flex flex-col text-white  items-center  lg:justify-around">
          <div
            className="h-auto card border-2 mx-4 border-white py-9 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40"
            data-aos="fade-right"
            data-aos-delay="50"
          >
            <h2 className="border-b-2 text-xl font-mono">Event Details</h2>

            <p className="mt-3 text-xs">Dec - 2 & 3</p>
            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faClock} />
              <p className="text-xs">TBA</p>
            </div>
            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faMapMarkedAlt} />
              <p className="text-xs">Bio Block (Seminar Hall 3)</p>
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
              <p className="text-xs">Registration Fee: Rs.250/-</p>
            </div>
            <br />
            <Link
              href={
                "https://docs.google.com/forms/d/e/1FAIpQLSfeSLNV4apogcZwLTCD73cmK104GPExssmIwQ9qsipQ8MVs9g/viewform?usp=sf_link"
              }
            >
              <div className="text-center cursor-pointer rounded-lg mx-auto button font-mono bg-white text-black px-4 lg:px-5 py-2">
                Register Now
              </div>
            </Link>
            <br />
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
              <p className="text-xs">TBA</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default BioEnterpreneurship;
