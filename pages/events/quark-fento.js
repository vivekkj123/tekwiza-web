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
import Footer from "../../src/components/Footer";
import Navbar from "../../src/components/Navbar";
import PageHeader from "../../src/components/PageHeader";
import QarkFentoImage from "/public/images/Events/QF0.jpg";

const QuarkFento = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <>
      <Head>
        <title>QuarkFendo | TekWiza 2k22</title>
      </Head>
      <div className="bg-black  overflow-hidden h-full">
        <Navbar />
        <PageHeader title={"Quark-Fendo"} />
        <div className="  font-display grid gap-4 py-5 px-2 lg:px-12 lg:grid-cols-2">
          <div className="flex items-center font-thin mx-2 lg:mx-6">
            <p>
              <i>
                “Failure doesn’t mean the game is over, it means try again with
                experience….”
              </i>
              <br />
              Solving puzzles are no easy game especially when it’s related to
              electronics. The event includes analyzing an electronic puzzle or
              a game and detecting{" "}
              <span data-aos="fade-right">
                and correcting any errors through logical reasoning and problem
                solving.
                <br />
                If your mind can withstand the pressure and yet think quickly,
                you can emerge victorious. Battle it out and astonish us with
                your talents.
              </span>
            </p>
          </div>
          <ExportedImage className="h-46 w-auto" src={QarkFentoImage} />
        </div>
        <div className="lg:flex-row flex-col flex text-white  items-center  justify-around">
          <div
            className="h-auto card border-2 mx-4 border-white py-9 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40"
            data-aos="fade-right"
            data-aos-delay="50"
          >
            <h2 className="border-b-2 text-xl font-mono">Event Details</h2>

            <p className="mt-3 text-xs">Dec - 2 & 3</p>
            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faClock} />
              <p className="text-xs">11:00 AM</p>
            </div>
            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faMapMarkedAlt} />
              <p className="text-xs">EC classroom</p>
            </div>
          </div>
          <div
            className="h-auto card border-2 mx-4 border-white py-4 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <h2 className="border-b-2 text-xl font-mono">Registration</h2>

            <div className="register h-auto my-2 py-2 px-2 flex ">
              <div className="circle"></div> <p className="register-fee">FEE</p>
              <div></div>
              <FontAwesomeIcon
                className="mx-2 text-black"
                icon={faIndianRupeeSign}
              />
              <p className="text-black price ">
                50<span>/-</span>
              </p>
            </div>
            <Link href={"https://forms.gle/nUZ7q87MRPsBo5Y4A"}>
              <div className="text-center cursor-pointer rounded-lg mx-auto button font-mono bg-white text-black px-4 lg:px-5 py-2 my-2">
                Register Now
              </div>
            </Link>
            <p className="text-xs text-center px-1">
              Deadline for Registrations December 1st
            </p>
          </div>
          <div
            className="h-auto card border-2 mx-4 border-white py-10 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40"
            data-aos="fade-right"
            data-aos-delay="150"
          >
            <h2 className="border-b-2 text-xl font-mono">Contact Details</h2>

            <p className="mt-3 text-xs">Coordinators</p>

            <div className="flex items-center mt-2 py-2">
              <FontAwesomeIcon className="mx-2" icon={faPhone} />
              <p className="text-xs">
                {" "}
                Aswathy Ashok : <br /> +91 70346 03473
              </p>
            </div>
            <div className="flex items-center mt-0 py-2">
              <FontAwesomeIcon className="mx-2" icon={faPhone} />
              <p className="text-xs">
                Parvathy Anand : <br /> +91 97463 12987
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default QuarkFento;
