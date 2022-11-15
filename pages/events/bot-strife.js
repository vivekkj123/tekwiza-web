import {
  faIndianRupeeSign,
  faMapMarkedAlt,
  faPhone,
  faTrophy
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Aos from 'aos';
import 'aos/dist/aos.css';
import ExportedImage from "next-image-export-optimizer";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect } from "react";
import botStrifeImage from "../../public/images/Events/BotStrife.png";
import Footer from "../../src/components/Footer";
import Navbar from "../../src/components/Navbar";
import PageHeader from "../../src/components/PageHeader";

const BotStrife = () => {
  useEffect(()=> {
    Aos.init({duration: 500})
  },[]);
  return (
    <>
      <Head>
        <title>Botstrife | TekWiza 2k22</title>
      </Head>
      <div className="bg-black  overflow-hidden h-full">
        <Navbar />
        <PageHeader title={"Botstrife"} />
        <div className="  font-display grid gap-4 py-5 px-2 lg:px-12 lg:grid-cols-2">
          <div className="flex items-center font-thin mx-2 lg:mx-6">
            <p>
              Botstrife is an engineering design competition for engineering
              aspirants. The objective of the competition is to simulate
              real-world engineering design projects and their related
              challenges. The participants must function as a team or as <span data-aos="fade-right" >
              an
              individual to design, engineer, build, test, promote and compete
              with a bot within the limits of the rules. Event is to build a
              robot whose task is to push the opposing robot out of the circular
              ring or flip it over. Different robots compete one-on-one against
              each other in a knock-out tournament.
              </span>
              <table className="table-auto mx-auto my-5 text-center border-white border-2" data-aos="zoom-in">
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
                    <td className="px-2 py-2">Rs. 10,000/-</td>
                  </tr>
                  <tr className=" border-b-2">
                    <td className="py-2 px-2 w-6">
                      2<sup>nd</sup>
                    </td>
                    <td className="px-2 py-2">Rs. 5,000/-</td>
                  </tr>
                </tbody>
              </table>
            </p>
          </div>
          <ExportedImage className="h-46 w-auto" src={botStrifeImage} />
        </div>
        <div className="lg:flex-row flex-col flex text-white  items-center  justify-around">
          <div className="
h-auto card border-2 mx-4 border-white py-8 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40" data-aos="fade-right" data-aos-delay="50">
            <h2 className="border-b-2 text-xl font-mono">Event Details</h2>

            <p className="mt-3 text-xs">Dec - 2 & 3</p>

            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faMapMarkedAlt} />
              <p className="text-xs">Bio Block Quadrangle</p>
            </div>
          </div>
          <div className="h-auto card border-2 mx-4 border-white py-2 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40" data-aos="fade-right" data-aos-delay="100">
            <h2 className="border-b-2 text-xl font-mono">Registration</h2>

            <div className="register h-auto my-2 py-2 px-2 flex "><div className="circle"></div> <p className="register-fee">FEE</p><div></div><FontAwesomeIcon className="mx-2 text-black" icon={faIndianRupeeSign} /><p className="text-black price ">1000<span>/-</span></p></div>

            <Link href={"https://forms.gle/RUPNhoyAS4R6yDGs7"}>
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
              <p className="text-xs"> Henvin Joy - 9048722567</p>
            </div>
            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faPhone} />
              <p className="text-xs"> Richin - 9526973086</p>
            </div>
          </div>
        </div>
        <Footer />

      </div>
    </>
  );
};

export default BotStrife;
