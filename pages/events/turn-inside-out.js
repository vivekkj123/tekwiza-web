import {
  faIndianRupeeSign, faMapMarkedAlt, faPhone,
  faTrophy
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Aos from 'aos';
import 'aos/dist/aos.css';
import ExportedImage from "next-image-export-optimizer";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect } from "react";
import Footer from "../../src/components/Footer";
import Navbar from "../../src/components/Navbar";
import PageHeader from "../../src/components/PageHeader";
import TurnInsideOutImage from "/public/images/Events/Turn Inside Out.png";

const TurnInsideOut = () => {
  useEffect(()=> {
    Aos.init({duration: 500})
  },[]);
  return (
    <>
      <Head>
        <title>Turn Inside Out | TekWiza 2k22</title>
      </Head>
      <div className="bg-black  overflow-hidden h-full">
        <Navbar />
        <PageHeader title={"Turn Inside Out"} />
        <div className="  font-display grid gap-4 py-5 px-2 lg:px-12 lg:grid-cols-2">
          <div className="flex items-center font-thin mx-2 lg:mx-6">
            <p>
              Have you ever wondered about the Sherlock in you? Well, you’ve
              come to the right place. A series of nerve-racking rounds all set
              to <span  data-aos="fade-right" data-aos-delay="50" >
              test your will and minds. Enter the maze of clues, sort out the
              stories and complete the quest to find the killer.
              <br />
              <br />
              And remember what Agatha Christie once said “Every murderer is
              probably somebody’s old friend”.
              </span>
              <table className="table-auto mx-auto my-5 text-center border-white border-2" data-aos="zoom-in" >
                <thead className="border-b-white border-b-2">
                  <tr>
                    <th className="px-4 py-2">
                      <FontAwesomeIcon className="mx-2" icon={faTrophy} />
                      Prize Money Worth</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td  className="px-4 py-2">Rs. 1500/-</td>
                  </tr>
                </tbody>
              </table>
            </p>
          </div>
          <ExportedImage className="h-46 w-auto" src={TurnInsideOutImage} />
        </div>
        <div className="lg:flex-row flex-col flex text-white   items-center justify-around">
          <div className="h-auto card border-2 mx-4 border-white py-11 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40" data-aos="fade-right" data-aos-delay="50">
            <h2 className="border-b-2 text-xl font-mono">Event Details</h2>

            <p className="mt-3 text-xs">Dec - 2 & 3</p>

            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faMapMarkedAlt} />
              <p className="text-xs">Bio Block (301)</p>
            </div>
          </div>
          <div className="h-auto card border-2 mx-4 border-white py-4 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40" data-aos="fade-right" data-aos-delay="100">
            <h2 className="border-b-2 text-xl font-mono">Registration</h2>
            <p className="mt-3 text-xs">3-5 members</p>

            <div className="register h-auto my-2 py-2 px-2 flex "><div className="circle"></div> <p className="register-fee">FEE</p><div></div><FontAwesomeIcon className="mx-2 text-black" icon={faIndianRupeeSign} /><p className="text-black price ">120<span>/-</span></p></div>
            <Link href={"https://forms.gle/Eer8WvjTxZs6M5M17"}>
              <div className="text-center cursor-pointer rounded-lg mx-auto button font-mono bg-white text-black px-4 lg:px-5 py-2">
                Register Now
              </div>
            </Link>
          </div>
          <div className="h-auto card border-2 mx-4 border-white py-4 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40" data-aos="fade-right" data-aos-delay="150">
            <h2 className="border-b-2 text-xl font-mono">Contact Details</h2>

            <p className="mt-3 text-xs">Coordinators</p>

            <div className="flex items-center mt-5">
              <FontAwesomeIcon className="mx-2" icon={faPhone} />
              <p className="text-xs">Gayathri Haridas : <br/>+91 77366 56852</p>
            </div>
            <div className="flex items-center  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faPhone} />
              <p className="text-xs">Suzanne Rose :<br/>+91 79946 08817</p>
            </div>
          </div>
        </div>
        <Footer  />

      </div>
    </>
  );
};

export default TurnInsideOut;
