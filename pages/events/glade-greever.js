import {
  faIndianRupeeSign,
  faMapMarkedAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Image from "next/image";
import React , { useEffect }from "react";
import Navbar from "../../src/components/Navbar";
import PageHeader from "../../src/components/PageHeader";
import GladeGreeverImage from "../../public/images/Events/The Glade[EEE Event 2].png";
import Aos from 'aos';
import 'aos/dist/aos.css';


const GladeGreever = () => {
  useEffect(()=> {
    Aos.init({duration: 500})
  },[]);
  return (
    <>
      <Head>
        <title>Glade Greever | TekWiza 2k22</title>
      </Head>
      <div className="bg-black  overflow-hidden h-full">
        <Navbar />
        <PageHeader title={"Glade Greever"} />
        <div className="  font-display grid gap-4 py-5 px-2 lg:px-12 lg:grid-cols-2">
          <div className="flex items-center font-thin mx-2 lg:mx-6">
            <p>
              Test your problem solving skills under critical circumstances and
              to find you way out of the ever-changing labyrinth.
            </p>
          </div>
          <Image className="h-46 w-auto" src={GladeGreeverImage} />
        </div>
        <div className="lg:flex-row flex-col flex text-white  items-center  justify-around">
          <div className="h-auto border-2 mx-4 border-white py-7 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40" data-aos="fade-right" data-aos-delay="50">
            <h2 className="border-b-2 text-xl font-mono">Event Details</h2>

            <p className="mt-3 text-xs">Dec - 2 & 3</p>

            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faMapMarkedAlt} />
              <p className="text-xs">DB Quadrangle</p>
            </div>
          </div>
          <div className="h-auto border-2 mx-4 border-white py-4 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40" data-aos="fade-right" data-aos-delay="100">
            <h2 className="border-b-2 text-xl font-mono">Registration</h2>

            <div className="register h-auto my-2 py-2 px-2 flex "><div className="circle"></div> <p className="register-fee">FEE</p><div></div>
            {/* <FontAwesomeIcon className="mx-2 text-black" icon={faIndianRupeeSign} /> */}
            <p className="text-black price px-2">Free<span></span></p></div>

            <p className="bg-white text-black text-center px-3 my-1 rounded">
              Spot Registration
            </p>

          </div>
          <div className="h-auto border-2 mx-4 border-white py-7 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40" data-aos="fade-right" data-aos-delay="150">
            <h2 className="border-b-2 text-xl font-mono">Contact Details</h2>

            <p className="mt-3 text-xs">Coordinators</p>

            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faPhone} />
              <p className="text-xs">TBA</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GladeGreever;
