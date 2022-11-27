import {
  faIndianRupeeSign,
  faMapMarkedAlt,
  faPhone,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Aos from "aos";
import "aos/dist/aos.css";
import ExportedImage from "next-image-export-optimizer";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect } from "react";
import SalvatorImage from "../../public/images/Events/Salvadore.png";
import Footer from "../../src/components/Footer";
import Navbar from "../../src/components/Navbar";
import PageHeader from "../../src/components/PageHeader";

const Salvator = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <>
      <Head>
        <title>Salvator | TekWiza 2k22</title>
      </Head>
      <div className="bg-black  overflow-hidden h-full">
        <Navbar />
        <PageHeader title={"Salvator"} />
        <div className="  font-display grid gap-4 py-5 px-2 lg:px-12 lg:grid-cols-2">
          <div className="flex items-center font-thin mx-2 lg:mx-6">
            <p>
              Event description : Only a life lived for others is a life
              worthwhile. Salvatore is a series of events of a newly joined
              doctor who is asked to rescue a dying patient from a deserted area
              full of uncertain strenuous paths.The paths will be consisting of
              8 rooms and also consists of series of tasks that needs to get
              completed.The participant can take part in this exciting game as
              an individual or as a group of 2 members.So solve the mystery to
              extricate your patient.
              <table
                className="table-auto mx-auto my-5 text-center border-white border-2"
                data-aos="zoom-in"
              >
                <thead className="border-b-white border-b-2">
                  <tr>
                    <th className="px-4 py-2">
                      <FontAwesomeIcon className="mx-2" icon={faTrophy} />
                      Prize Money Worth
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2">Rs. 2000/-</td>
                  </tr>
                </tbody>
              </table>
            </p>
          </div>
          <ExportedImage className="h-46 w-auto" src={SalvatorImage} />
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
              <FontAwesomeIcon className="mx-2" icon={faMapMarkedAlt} />
              <p className="text-xs">Bio Block (211)</p>
            </div>
          </div>
          <div
            className="h-auto card border-2 mx-4 border-white py-7 font-display flex flex-col items-center my-4 rounded-lg w-40 lg:w-48"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <h2 className="border-b-2 text-xl font-mono">Registration</h2>
            <p className="mt-3 text-xs">2 members</p>

            <div className="register h-auto my-2 py-2 px-2 flex ">
              <div className="circle"></div> <p className="register-fee">FEE</p>
              <div></div>
              <FontAwesomeIcon
                className="mx-2 text-black"
                icon={faIndianRupeeSign}
              />
              <p className="text-black price ">
                100<span>/-</span>
              </p>
            </div>
            <Link href={"https://bit.ly/SalvatoR"}>
              <div className="text-center cursor-pointer rounded-lg mx-auto button font-mono bg-white text-black px-4 lg:px-5 py-2 my-2">
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
              <p className="text-xs">Greeshma - +91 94474 52486</p>
            </div>
            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faPhone} />
              <p className="text-xs">Nevin - +91 73069 83856</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Salvator;
