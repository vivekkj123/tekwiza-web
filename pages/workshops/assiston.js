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
import AssistonImage from "../../public/images/Workshops/Assiston.jpg";
import Footer from "../../src/components/Footer";
import Navbar from "../../src/components/Navbar";
import PageHeader from "../../src/components/PageHeader";

const Assiston = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <>
      <Head>
        <title>Assiston | TekWiza 2k22</title>
      </Head>
      <div className="bg-black  overflow-hidden h-full">
        <Navbar />
        <PageHeader title={"Assiston"} />
        <div className="  font-display grid gap-4 py-5 px-2 lg:px-12 lg:grid-cols-2">
          <div className="flex items-center font-thin mx-2 lg:mx-6">
            <p>
              Don't let your mind to slip, bring up with a constructive idea
              Dept. Of BME in association with TEKWIZA Presents 'ASSISTON' An
              Assistive Technology Workshop Conducted by National Institute of
              Physical Medicine and Rehabilitation ( NIPMR ). For people without
              disabilities technology makes their chores easier. But for people
              with disabilities technology makes things possible. It is not
              incorrect to say that everyone, if they live long enough, will
              need assistive technology sooner or later but at some point in
              their lives.We in collaboration with NIPMR bring you an
              opportunity to grasp the knowledge on assistive devices through
              workshop. <br /> 𝙶𝚄𝙸𝙳𝙴𝙻𝙸𝙽𝙴𝚂 <br />
              <ul>
                <li>🔖Team should consist of maximum 4 members</li>
                <li>🔖Reg Fee Rs. 200 per team</li>
                <li>🔖Activity points will be rewarded</li>
                <li>🔖Participation certificate will be provided</li>
                <li>🔖Maximum time allotted for idea generation is 30 min</li>

                <li>🔖Best idea will be awarded with cash prize</li>
              </ul>
            </p>
          </div>
          <ExportedImage className="h-46 w-auto" src={AssistonImage} />
        </div>
        <div className="lg:flex-row flex flex-col text-white  items-center  lg:justify-around">
          <div
            className="h-auto card border-2 mx-4 border-white py-9 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40"
            data-aos="fade-right"
            data-aos-delay="50"
          >
            <h2 className="border-b-2 text-xl font-mono">Event Details</h2>

            <p className="mt-3 text-xs">Dec 2nd</p>
            <div className="flex mt-5">
              <FontAwesomeIcon icon={faClock} />
              <p className="text-xs"> 9am - 12:30pm</p>
            </div>
            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faMapMarkedAlt} />
              <p className="text-xs">
                BME Tutorial Room ( Bio Block - Ground Floor )
              </p>
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
              <p className="text-xs">Registration Fee: Rs.200/- per Team</p>
            </div>
            <br />
            <Link href={"https://bit.ly/ASSISTON"}>
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
              <div>
                <p className="text-xs">Nikhil Siby : 82812 86410</p>
                <p className="text-xs">Aloshious : 81138 45134</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Assiston;
