import {
  faMapMarkedAlt,
  faPhone
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Aos from 'aos';
import 'aos/dist/aos.css';
import ExportedImage from "next-image-export-optimizer";
import Head from "next/head";
import React, { useEffect } from "react";
import TomorrowLandImage from '../../public/images/Events/TomorrowLand.png';
import Footer from "../../src/components/Footer";
import Navbar from "../../src/components/Navbar";
import PageHeader from "../../src/components/PageHeader";

const TomorrowLand = () => {
  useEffect(()=> {
    Aos.init({duration: 500})
  },[]);
  return (
    <>
      <Head>
        <title>TomorrowLand | TekWiza 2k22</title>
      </Head>
      <div className="bg-black  overflow-hidden h-full">
        <Navbar />
        <PageHeader title={"TomorrowLand"} />
        <div className="  font-display grid gap-4 py-5 px-2 lg:px-12 lg:grid-cols-2">
          <div className="flex items-center font-thin mx-2 lg:mx-6">
            <p>
              A chance to participate in art auctions, Visit the Taj Mahal and
              gain an understanding of various computing topics, all within a
              single hour, overwhelming? How about taking a breather at our
              IOT-enabled lounge? Hard to believe <span data-aos="fade-right" data-aos-delay="50">
              right, I know, but why not
              give it a try? An opportunity to experience various budding fields
              of computer science in person, we’ll have exhibits on,
              <ul className="list-disc">
                <li>History of computing</li>
                <li>IoT and home automation</li>
                <li>Blockchain cryptocurrency and NFTs</li>
                <li>AR art gallery</li>
                <li>VR world tours and games</li>
                <li>3D printing</li>
                <li>Artificial Intelligence</li>
                <li>Data Science</li>
                <li>Future of Computing</li>
              </ul></span> 
            </p>
          </div>
          <ExportedImage className="h-46 w-auto" src={TomorrowLandImage} />
        </div>
        <div className="lg:flex-row flex-col flex text-white  items-center  justify-around">
          <div className="h-auto card border-2 mx-4 border-white py-5 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40" data-aos="fade-right" data-aos-delay="50">
            <h2 className="border-b-2 text-xl font-mono">Event Details</h2>

            <p className="mt-3 text-xs">Dec - 2 & 3</p>

            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faMapMarkedAlt} />
              <p className="text-xs">Decenial Block (306, 307)</p>
            </div>
          </div>
          <div className="h-auto card border-2 mx-4 border-white py-6 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40" data-aos="fade-right" data-aos-delay="100">
            <h2 className="border-b-2 text-xl font-mono">Registration</h2>

            <div className="register h-auto my-2 py-2 px-2 flex "><div className="circle"></div> <p className="register-fee">FEE</p><div></div>
            {/* <FontAwesomeIcon className="mx-2 text-black" icon={faIndianRupeeSign} /> */}
            <p className="text-black price px-2">Free<span></span></p></div>
            
          </div>
          <div className="h-auto card border-2 mx-4 border-white py-4 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40" data-aos="fade-right" data-aos-delay="150">
            <h2 className="border-b-2 text-xl font-mono">Contact Details</h2>

            <p className="mt-3 text-xs">Coordinators</p>

            <div className="flex items-center mt-5">
              <FontAwesomeIcon className="mx-2" icon={faPhone} />
              <p className="text-xs">Joel Anto : <br/> +91 86064 44892</p>
            </div>
          </div>
        </div>
        <Footer  />

      </div>
    </>
  );
};

export default TomorrowLand;
