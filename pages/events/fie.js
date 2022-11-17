import {
  faIndianRupeeSign,
  faMapMarkedAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ExportedImage from "next-image-export-optimizer";
import Head from "next/head";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import FiEImage from "../../public/images/Events/EV Expo[EEE Event 1].png";
import Footer from "../../src/components/Footer";
import Navbar from "../../src/components/Navbar";
import PageHeader from "../../src/components/PageHeader";

const FiE = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <>
      <Head>
        <title>FiE | TekWiza 2k22</title>
      </Head>
      <div className="bg-black  overflow-hidden h-full">
        <Navbar />
        <PageHeader title={"FiE"} />
        <div className="  font-display grid gap-4 py-5 px-2 lg:px-12 lg:grid-cols-2">
          <div className="flex items-center font-thin mx-2 lg:mx-6">
            <p>
              FiE is an Electric Motor Vehicle Show providing the opportunity
              and platform to electric vehicle manufacturers to showcase their
              latest Products , technology and equipment ,Smart and NextGen
              transport ,electric passengers cars , scooter , motorcycle ,
              cycles , buses etc to meet and network with the trade industry as
              well as end users with the main aim to find out new business and
              protection of the environment. <br /><br /> The Indian electric vehicle
              industry is a new business and the opportunity for the automobile
              industry is immense. Like any new sector, there are some small
              teething troubles that need to be resolved. However, with a strong
              policy like FAME II, India now has the potential to be a global
              electric manufacturing hub.
            </p>
          </div>
          <ExportedImage className="h-46 w-auto" src={FiEImage} />
        </div>
        <div className="lg:flex-row flex-col flex text-white  items-center  justify-around">
          <div
            className="h-auto card border-2 mx-4 border-white py-6 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40 "
            data-aos="fade-right"
          >
            <h2 className="border-b-2 text-xl font-mono py-1">Event Details</h2>

            <p className="mt-3 text-xs">Dec - 2 & 3</p>

            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faMapMarkedAlt} />
              <p className="text-xs">TBA</p>
            </div>
          </div>
          <div
            className="h-auto card border-2 mx-4 border-white py-2 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40"
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
                30<span>/-</span>
              </p>
            </div>

            <p className="bg-white text-black text-center px-3 rounded py-2 my-2 ">
              {" "}
              <b>Spot Registration</b>
            </p>
          </div>
          <div
            className="h-auto card border-2 mx-4 border-white py-4 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40"
            data-aos="fade-right"
            data-aos-delay="150"
          >
            <h2 className="border-b-2 text-xl font-mono ">Contact Details</h2>

            <p className="mt-3 text-xs py-3">Coordinators</p>

            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faPhone} />
              <p className="text-xs">Lenin- +919074454866</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FiE;
