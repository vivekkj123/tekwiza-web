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
import EVWorkshopImage from "../../public/images/Workshops/ElectricVehicle.jpeg";
import Footer from "../../src/components/Footer";
import Navbar from "../../src/components/Navbar";
import PageHeader from "../../src/components/PageHeader";

const EVWorkshop = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <>
      <Head>
        <title>Electronic Vehicle Workshop | TekWiza 2k22</title>
      </Head>
      <div className="bg-black  overflow-hidden h-full">
        <Navbar />
        <PageHeader title={"Electronic Vehicle Workshop"} />
        <div className="  font-display grid gap-4 py-5 px-2 lg:px-12 lg:grid-cols-2">
          <div className="flex items-center font-thin mx-2 lg:mx-6">
            <p>
              <i>
                "We will not stop until every car on the road is electric." –
                Elon Musk ✨
              </i>
              <br />
              <br /> Electrical and Electronics Department of Sahrdaya College
              of Engineering and Technology in association with HYKON is
              conducting a workshop on ELECTRIC VEHICLE at TeKwiZa 2022💫 ✨
            </p>
          </div>
          <ExportedImage className="h-46 w-auto" src={EVWorkshopImage} />
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
              <p className="text-xs"> 10AM - 12:00PM</p>
            </div>
            {/* <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faMapMarkedAlt} />
              <p className="text-xs">
                BME Tutorial Room ( Bio Block - Ground Floor )
              </p>
            </div> */}
          </div>
          <div
            className="h-auto card border-2 mx-4 border-white py-7 font-display flex flex-col items-center my-4 rounded-lg w-40 lg:w-48"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <h2 className="border-b-2 text-xl font-mono">Registration</h2>

            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faIndianRupeeSign} />
              <p className="text-xs">Registration Fee: Rs.100/-</p>
            </div>
            <br />
            <Link href={"https://forms.gle/DPjgf5SznFb32bGa6   "}>
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

            <div className="flex-col  mt-5">
              <div className="flex">
                <FontAwesomeIcon className="mx-2" icon={faPhone} />
                <p className="text-xs">Abhishek : 80759 84486</p>
              </div>
              <br />
              <div className="flex">
                <FontAwesomeIcon className="mx-2" icon={faPhone} />
                <p className="text-xs">Edwin : 94966 37573</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default EVWorkshop;
