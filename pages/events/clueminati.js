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
import ClueMinatiImage from '../../public/images/Events/Clueminati.png';
import Footer from "../../src/components/Footer";
import Navbar from "../../src/components/Navbar";
import PageHeader from "../../src/components/PageHeader";


const Cluieminati = () => {
  useEffect(()=> {
    Aos.init({duration: 500})
  },[]);
  return (
    <>
      <Head>
        <title>Clueminati | TekWiza 2k22</title>
      </Head>
      <div className="bg-black  overflow-hidden h-full">
        <Navbar />
        <PageHeader title={"Clueminati"} />
        <div className="  font-display grid gap-4 py-5 px-2 lg:px-12 lg:grid-cols-2">
          <div className="flex items-center font-thin mx-2 lg:mx-6">
            <p>
              Clueminati, as the name suggests, is a 5-level web-based
              interactive Clue Hunt. Use 101% of your brain power to solve these
              not-so-hard problems. Let’s see who makes it to the top and takes
              away the prize!!! Use the clues to unlock each level. <span data-aos="fade-right">
              The first
              group to successfully tackle the clues within the stipulated time
              limit will be declared winners. Groups of a maximum of 4 members
              can be formed.</span>

              <table className="table-auto mx-auto my-5 text-center border-white border-2"  data-aos="zoom-in"  >
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
                    <td className="px-2 py-2">Rs. 3000/-</td>
                  </tr>
                  <tr className=" border-b-2">
                    <td className="py-2 px-2 w-6">
                      2<sup>nd</sup>
                    </td>
                    <td className="px-2 py-2">Rs. 2000/-</td>
                  </tr>
                </tbody>
              </table>
            </p>
          </div>
          <ExportedImage className="h-46 w-auto" src={ClueMinatiImage} />
        </div>
        <div className="lg:flex-row flex-col flex text-white  items-center  justify-around">
          <div className="
h-auto card border-2 mx-4 border-white py-8 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40" data-aos="fade-right" data-aos-delay="50">
            <h2 className="border-b-2 text-xl font-mono">Event Details</h2>

            <p className="mt-3 text-xs py-2">Dec - 2 & 3</p>

            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faMapMarkedAlt} />
              <p className="text-xs">Decennial Block (017)</p>
            </div>
          </div>
          <div className="h-auto card border-2 mx-4 border-white py-3 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40" data-aos="fade-right" data-aos-delay="100">
            <h2 className="border-b-2 text-xl font-mono">Registration</h2>
            <p className="mt-3 text-xs">4 members</p>

            <div className="register h-auto my-2 py-2 px-2 flex "><div className="circle"></div> <p className="register-fee">FEE</p><div></div><FontAwesomeIcon className="mx-2 text-black" icon={faIndianRupeeSign} /><p className="text-black price ">200<span>/-</span></p></div>

            <Link href={"https://bit.ly/Clue_Hunt"}>
              <div className="text-center cursor-pointer rounded-lg mx-auto button font-mono bg-white text-black px-4 lg:px-5 py-2 my-1">
                Register Now
              </div>
            </Link>
          </div>
          <div className="h-auto card border-2 mx-4 border-white py-3 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40" data-aos="fade-right" data-aos-delay="150">
            <h2 className="border-b-2 text-xl font-mono">Contact Details</h2>

            <p className="mt-3 text-xs">Coordinators</p>

            <div className="flex items-center mt-5">
              <FontAwesomeIcon className="mx-2" icon={faPhone} />
              <p className="text-xs">Jaise S Arakkal : <br/> +91 94005 86318</p>
            </div>
            <div className="flex items-center  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faPhone} />
              <p className="text-xs">Catherin Sunny : <br/> +91 73563 19082</p>
            </div>
          </div>
        </div>
        <Footer />

      </div>
    </>
  );
};

export default Cluieminati;
