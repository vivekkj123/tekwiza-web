import {
  faIndianRupeeSign,
  faMapMarkedAlt,
  faPhone,
  faTrophy
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ExportedImage from "next-image-export-optimizer";
import Head from "next/head";
import Aos from 'aos';
import 'aos/dist/aos.css';
import Link from "next/link";
import React, { useEffect } from "react";
import BuildItHighImage from '../../public/images/Events/Build it High.png';
import Footer from "../../src/components/Footer";
import Navbar from "../../src/components/Navbar";
import PageHeader from "../../src/components/PageHeader";

const BuildItHigh = () => {
  useEffect(()=> {
    Aos.init({duration: 500})
  },[]);
  return (
    <>
      <Head>
        <title>Build It High | TekWiza 2k22</title>
      </Head>
      <div className="bg-black  overflow-hidden h-full">
        <Navbar />
        <PageHeader title={"Build It High!"} />
        <div className="  font-display grid gap-4 py-5 px-2 lg:px-12 lg:grid-cols-2">
          <div className="flex items-center font-thin mx-2 lg:mx-6">
            <p>
              One of the creative and interesting events which would deal with
              designing and building innovative structure models with precision
              and <span data-aos="fade-right" >
              accuracy. Test your structural proportioning skills by
              participating in “Build it High!”. Get your measurements right
              with precision and accuracy and build the tallest building to
              withstand one of the most powerful forces of nature- earthquake
              load. Models will be tested on a vibration table and judgment will
              be based on the withstanding duration and height of the structure.
              Materials to build structures will be provided. Groups of a
              maximum of 4 members can be formed. A certificate of participation
              will be provided.
              </span>
              <table className="table-auto mx-auto my-5 text-center border-white border-2" data-aos="zoom-in" >
                <thead className="border-b-white border-b-2">
                  <tr>
                    <th>
                      <FontAwesomeIcon className="mx-2" icon={faTrophy} />

                    </th>
                    <th className="px-4 py-2">
                      Prize Money</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className=" border-b-2">
                    
                  <td  className="py-2 px-2 w-6">1 <sup>st</sup></td>
                    <td  className="px-2 py-2">Rs. 3000/-</td>
                  </tr>
                  <tr>
                    
                  <td  className="py-2 px-2 w-6">2<sup>nd</sup></td>
                    <td  className="px-2 py-2">Rs. 2000/-</td>
                  </tr>
                </tbody>
              </table>
            </p>
          </div>
          <ExportedImage className="h-46 w-auto" src={BuildItHighImage} />
        </div>

        <div className="lg:flex-row flex-col flex text-white  items-center  justify-around">
          <div className="
h-auto card border-2 mx-4 border-white py-8 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40" data-aos="fade-right" data-aos-delay="50">
            <h2 className="border-b-2 my-2 text-xl font-mono">Event Details</h2>

            <p className="mt-3 text-xs">Dec - 2 & 3</p>

            <div className="flex  mt-5 py-1">
              <FontAwesomeIcon className="mx-2" icon={faMapMarkedAlt} />
              <p className="text-xs">Decennial Block (014)</p>
            </div>
          </div>
          <div className="h-auto card border-2 mx-4 border-white py-2 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40" data-aos="fade-right" data-aos-delay="100">
            <h2 className="border-b-2 text-xl font-mono">Registration</h2>
            <p className="mt-3 text-xs">4 members</p>

            <div className="register h-auto my-2 py-2 px-2 flex "><div className="circle"></div> <p className="register-fee">FEE</p><div></div><FontAwesomeIcon className="mx-2 text-black" icon={faIndianRupeeSign} /><p className="text-black price ">200<span>/-</span></p></div>
            <Link href={"https://bit.ly/buid_it_high"}>
              <div className="text-center cursor-pointer rounded-lg mx-auto button font-mono bg-white text-black px-4 lg:px-5 py-2 my-2">
                Register Now
              </div>
            </Link>
          </div>
          <div className="h-auto card border-2 mx-4 border-white py-4 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40" data-aos="fade-right" data-aos-delay="150">
            <h2 className="border-b-2 text-xl font-mono">Contact Details</h2>

            <p className="mt-3 text-xs">Coordinators</p>

            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faPhone} />
              <p className="text-xs">Jerin Worin : +91 85473 50667</p>
            </div>
            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faPhone} />
              <p className="text-xs">Arundhathi P : +91 91883 43839</p>
            </div>
          </div>
        </div>
        <Footer />

      </div>
    </>
  );
};

export default BuildItHigh;
