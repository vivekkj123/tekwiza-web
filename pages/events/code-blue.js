import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ExportedImage from "next-image-export-optimizer";
import Head from "next/head";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Footer from "../../src/components/Footer";
import Navbar from "../../src/components/Navbar";
import PageHeader from "../../src/components/PageHeader";
import CodeBlueImage from "/public/images/Events/Code Blue.png";

const CodeBlue = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <>
      <Head>
        <title>Code Blue | TekWiza 2k22</title>
      </Head>
      <div className="bg-black  overflow-hidden h-full">
        <Navbar />
        <PageHeader title={"Code Blue"} />
        <div className="  font-display grid gap-4 py-5 px-2 lg:px-12 lg:grid-cols-2">
          <div className="flex items-center font-thin mx-2 lg:mx-6">
            <p>
              Have you experienced a real life intensive care unit? The
              Biomedical department is setting up an ICU that represents the
              highest level of patient care and treatment designated for
              critically ill patients. One can observe and examine the life
              sustaining equipments and overview about the parameters to be
              monitored. So come and join us to our astonishing event.
            </p>
          </div>
          <ExportedImage className="h-46 w-auto" src={CodeBlueImage} />
        </div>
        <div className="lg:flex-row flex-col flex text-white   items-center justify-around">
          <div
            className="h-auto card border-2 mx-4 border-white py-4 font-display flex flex-col items-center my-4 rounded-lg w-40 lg:w-48"
            data-aos="fade-right"
            data-aos-delay="50"
          >
            <h2 className="border-b-2 text-xl font-mono">Event Details</h2>

            <p className="mt-3 text-xs">Dec - 2 & 3</p>

            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faMapMarkedAlt} />
              <p className="text-xs">Bio Block (Agappe Lab, Quadrangle)</p>
            </div>
            <hr />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default CodeBlue;
