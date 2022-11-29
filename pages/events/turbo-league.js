import {
  faClock,
  faIndianRupeeSign,
  faMapMarkedAlt,
  faPhone,
  faTrophy
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
import TurboLeagueImage from '/public/images/Events/turbo leauge.jpg';

const TurboLeague = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <>
      <Head>
        <title>Turbo League | TekWiza 2k22</title>
      </Head>
      <div className="bg-black  overflow-hidden h-full">
        <Navbar />
        <PageHeader title={"Turbo League"} />
        <div className="  font-display grid gap-4 py-5 px-2 lg:px-12 lg:grid-cols-2">
          <div className="flex items-center font-thin mx-2 lg:mx-6">
            <p>
              Get behind the wheel and get ready for a extremely struggle match!
              4 Players with 2 in each team will be allotted at a time. On this
              match, each player will have the controls of a car.These cars, can
              dodge right or left for controlling the ball or for being the
              goalkeeper. The team who controls their car better, The team who
              controls the ball better, The team who scores the highest wins the
              game!
              <table
                className="table-auto mx-auto my-5 text-center border-white border-2"
                data-aos="zoom-in"
              >
                <thead className="border-b-white border-b-2">
                  <tr>
                    <th>
                      <FontAwesomeIcon className="mx-2" icon={faTrophy} />
                    </th>
                    <th className="px-4 py-2">Prize Money</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className=" border-b-2">
                    <td className="py-2 px-2 w-6">
                      1 <sup>st</sup>
                    </td>
                    <td className="px-2 py-2">Rs. 1,000/-</td>
                  </tr>
                  <tr className=" border-b-2">
                    <td className="py-2 px-2 w-6">
                      2<sup>nd</sup>
                    </td>
                    <td className="px-2 py-2">Rs. 500/-</td>
                  </tr>
                </tbody>
              </table>
            </p>
          </div>
          <ExportedImage className="h-46 w-auto" src={TurboLeagueImage} />
        </div>
        <div className="lg:flex-row flex-col flex text-white   items-center justify-around">
          <div
            className="h-auto card border-2 mx-4 border-white py-11 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40"
            data-aos="fade-right"
            data-aos-delay="50"
          >
            <h2 className="border-b-2 text-xl font-mono">Event Details</h2>

            <p className="mt-3 text-xs">Dec - 2 & 3</p>
            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faClock} />
              <p className="text-xs">9:00 AM to 3:00 PM</p>
            </div>
            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faMapMarkedAlt} />
              <p className="text-xs">ECE Classroom</p>
            </div>
          </div>
          <div
            className="h-auto card border-2 mx-4 border-white py-4 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <h2 className="border-b-2 text-xl font-mono">Registration</h2>
            <p className="mt-3 text-xs">2 members (5 Mins.)</p>

            <div className="register h-auto my-2 py-2 px-2 flex ">
              <div className="circle"></div> <p className="register-fee">FEE</p>
              <div></div>
              <FontAwesomeIcon
                className="mx-2 text-black"
                icon={faIndianRupeeSign}
              />
              <p className="text-black price ">
                200 <span>/-</span> team
              </p>
            </div>
            <Link href={"https://forms.gle/n1v3Bw5geSPFxs5q8"}>
              <div className="text-center cursor-pointer rounded-lg mx-auto button font-mono bg-white text-black px-4 lg:px-5 py-2">
                Register Now
              </div>
            </Link>
            <p className="text-xs text-center mt-2 px-1">
              Deadline for Registrations November 30
            </p>
          </div>
          <div
            className="h-auto card border-2 mx-4 border-white py-4 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40"
            data-aos="fade-right"
            data-aos-delay="150"
          >
            <h2 className="border-b-2 text-xl font-mono">Contact Details</h2>

            <p className="mt-3 text-xs">Coordinators</p>

            <div className="flex items-center mt-5">
              <FontAwesomeIcon className="mx-2" icon={faPhone} />
              <p className="text-xs">
                Aljo : <br />
                7012862536
              </p>
            </div>
            <div className="flex items-center  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faPhone} />
              <p className="text-xs">
                Naizal : <br />
                9207771000
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default TurboLeague;
