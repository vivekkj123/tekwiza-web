import { faIndianRupeeSign, faMapMarkedAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Aos from "aos";
import "aos/dist/aos.css";
import ExportedImage from "next-image-export-optimizer";
import Head from "next/head";
import React, { useEffect } from "react";
import IllusionImage from "../../public/images/Events/The Illusion.jpg";
import Footer from "../../src/components/Footer";
import Navbar from "../../src/components/Navbar";
import PageHeader from "../../src/components/PageHeader";

const TheIllusion = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <>
      <Head>
        <title>The Illusion | TekWiza 2k22</title>
      </Head>
      <div className="bg-black  overflow-hidden h-full">
        <Navbar />
        <PageHeader title={"The Illusion"} />
        <div className="  font-display grid gap-4 py-5 px-2 lg:px-12 lg:grid-cols-2">
          <div className="flex items-center font-thin mx-2 lg:mx-6">
            <p>
              An immersive room which has the ability to transform any space to
              entirely divergent environment.The illusion helps to guide the
              user and provides them with a means of understanding the world and
              it’s rules while instilling a sense of presence and wonder with
              incredibly realistic and astonishing sound imaginary pathways and
              drive them to completely different ambience.
            </p>
          </div>
          <ExportedImage className="h-46 w-auto" src={IllusionImage} />
        </div>
        <div className="lg:flex-row flex-col flex text-white   items-center justify-around">
          <div
            className="h-auto card border-2 mx-4 border-white py-5 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40"
            data-aos="fade-right"
            data-aos-delay="50"
          >
            <h2 className="border-b-2 text-xl font-mono">Event Details</h2>

            <p className="mt-3 text-xs">Dec - 2 & 3</p>

            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faMapMarkedAlt} />
              <p className="text-xs">Bio Block (GE Lab)</p>
            </div>
          </div>
          <div
            className="h-auto card border-2 mx-4 border-white py-6 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40"
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
              <p className="text-black price px-2">
                30<span>/-</span>
              </p>
            </div>
            <p className="bg-white text-black text-center px-3 rounded my-2">
              Spot Registration
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
                {" "}
                Savio :<br />
                +91 98468 06533
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default TheIllusion;
