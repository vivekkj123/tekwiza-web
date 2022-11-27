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
import MysterioImage from "../../public/images/Events/Mysterio.jpg";
import Footer from "../../src/components/Footer";
import Navbar from "../../src/components/Navbar";
import PageHeader from "../../src/components/PageHeader";

const Mysterio = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <>
      <Head>
        <title>Mysterio | TekWiza 2k22</title>
      </Head>
      <div className="bg-black  overflow-hidden h-full">
        <Navbar />
        <PageHeader title={"Mysterio"} />
        <div className="  font-display grid gap-4 py-5 px-2 lg:px-12 lg:grid-cols-2">
          <div className="flex items-center font-thin mx-2 lg:mx-6">
            <p>
              Mysterio will be a series of disquisitive tasks in a mysterious
              way that enable the participant to find new ideas and get exciting
              throughout each levels.So be obliged to pay attention to clues to
              the thing that gives you that little tweak.The solution often
              turns out more beautiful than the puzzles. Think solve run and
              win.
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
                    <td className="px-4 py-2">Rs. 5000/-</td>
                  </tr>
                </tbody>
              </table>
            </p>
          </div>
          <ExportedImage className="h-46 w-auto" src={MysterioImage} />
        </div>
        <div className="lg:flex-row flex-col flex text-white   items-center justify-around">
          <div
            className="h-auto card border-2 mx-4 border-white py-4 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40"
            data-aos="fade-right"
          >
            <h2 className="border-b-2 text-xl font-mono">Event Details</h2>

            <p className="mt-3 text-xs">Dec - 2</p>

            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faMapMarkedAlt} />
              <p className="text-xs">Bio Block (206)</p>
            </div>
          </div>
          <div
            className="h-auto card border-2 mx-4 border-white py-2 font-display flex flex-col items-center my-2 rounded-lg lg:w-56 w-40"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <h2 className="border-b-2 text-xl font-mono">Registration</h2>

            <p className="mt-3 text-xs">4 members</p>

            <div className="flex  mt-2">
              <div className="register h-auto my-2 py-2 px-2 flex ">
                <div className="circle"></div>{" "}
                <p className="register-fee">FEE</p>
                <div></div>
                <FontAwesomeIcon
                  className="mx-2 text-black"
                  icon={faIndianRupeeSign}
                />
                <p className="text-black price ">
                  399 <span>/-</span>
                </p>
              </div>
            </div>
            <Link href={"https://bit.ly/MysteriO"}>
              <div className="text-center cursor-pointer rounded-lg mx-auto button font-mono bg-white text-black px-4 lg:px-5 py-2 my-2">
                Register Now
              </div>
            </Link>
          </div>
          <div
            className="h-auto card border-2 mx-4 border-white py-4 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40"
            data-aos="fade-right"
            data-aos-delay="150"
          >
            <h2 className="border-b-2 text-xl font-mono">Contact Details</h2>

            <p className="mt-3 text-xs">Coordinators</p>

            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faPhone} />
              <p className="text-xs"> Jinto - +91 97454 44981</p>
            </div>
            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faPhone} />
              <p className="text-xs"> Rashid - +91 80899 99210</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Mysterio;
