import {
  faCaretDown,
  faCaretRight,
  faIndianRupeeSign,
  faMapMarkedAlt,
  faPhone,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Aos from "aos";
import "aos/dist/aos.css";
import ExportedImage from "next-image-export-optimizer";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect } from "react";
import Collapsible from "react-collapsible";
import botStrifeImage from "../../public/images/Events/BotStrife.png";
import Footer from "../../src/components/Footer";
import Navbar from "../../src/components/Navbar";
import PageHeader from "../../src/components/PageHeader";

const BotStrife = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <>
      <Head>
        <title>Botstrife | TekWiza 2k22</title>
      </Head>
      <div className="bg-black  overflow-hidden h-full">
        <Navbar />
        <PageHeader title={"Botstrife"} />
        <div className="font-display grid gap-4 py-5 px-2 lg:px-12 lg:grid-cols-2">
          <div className="flex items-center font-thin mx-2 lg:mx-6">
            <p className="anywhere">
              Botstrife is an engineering design competition for engineering
              aspirants. The objective of the competition is to simulate
              real-world engineering design projects and their related
              challenges. The participants must function as a team or as an
              individual to design, engineer, build, test, promote and compete
              with a bot within the limits of the rules <br /> Event is to build
              a robot whose task is to push the opposing robot out of the
              circular ring or flip it over. Different robots compete one-on-one
              against each other in a knock-out tournament.
              <br />
              <table
                className="table-auto mx-auto my-5 text-center border-white border-2"
                data-aos="zoom-in"
              >
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
          <div className="mx-auto">
            <ExportedImage className="h-46 w-auto" src={botStrifeImage} />
            <div className="mx-auto font-thin border mt-6 lg:w-72 w-48 border-gray-50 flex flex-col rounded-lg p-2 lg:p-4">
              <h2 className="text-center font-bold">Sub-Event 👾</h2>
              <ul>
                <li>Robots to fight will be provided by coordinators.</li>
                <li>Registration is spot registration</li>
                <li>Registration fee: ₹100</li>
                <li>Prize money: ₹150</li>
                <li>Winners will also be awarded with points .</li>
                <li>
                  At the end of the event the one with maximum point based on
                  the ranking will be awarded with an extra cash prize .
                </li>
                <li>For 🥇- ₹3000</li>
                <li>For 🥈- ₹2000</li>
              </ul>
            </div>
          </div>
        </div>
        <Collapsible
          openedClassName="font-display font-thin py-3 lg:mx-20 mx-2 px-2 lg:px-10 border-white rounded-lg border-2"
          className="lg:mx-20 mx-2 font-display font-thin my-5 px-2 lg:px-5 rounded-lg border-white border-2"
          triggerWhenOpen={
            <div className="flex items-center p-2 gap-4">
              <FontAwesomeIcon icon={faCaretDown} />
              <p className="font-bold">Rules & Regulations</p>
            </div>
          }
          trigger={
            <div className="flex items-center p-2 gap-4">
              <FontAwesomeIcon icon={faCaretRight} />
              <p>Rules & Regulations</p>
            </div>
          }
        >
          <span className="font-normal">Dimensions :</span> The bot should fit
          inside a 800mm*800mm*800mm(l*b*h)box. <br />
          <span className="font-normal">Weight :</span> 15kg - 33.07 lbs. <br />
          Robot can be <span className="font-normal">wired</span> <br />
          The maximum allowed voltage used for the weapon and motion systems is
          60V. However, any usage of voltage higher than{" "}
          <span className="font-normal">60V</span> may be allowed with specific
          reasons as long as it is pre-approved by the Event managers. Battery
          to power the robot should be brought by the participants.
        </Collapsible>
        <div className="lg:flex-row flex-col flex text-white  items-center  justify-around">
          <div
            className="
h-auto card border-2 mx-4 border-white py-8 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40"
            data-aos="fade-right"
            data-aos-delay="50"
          >
            <h2 className="border-b-2 text-xl font-mono">Event Details</h2>

            <p className="mt-3 text-xs">Dec 3rd</p>

            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faMapMarkedAlt} />
              <p className="text-xs">Bio Block Quadrangle</p>
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
                1000<span>/-</span>
              </p>
            </div>

            <Link href={"https://forms.gle/RUPNhoyAS4R6yDGs7"}>
              <div className="text-center cursor-pointer rounded-lg mx-auto button font-mono bg-white text-black px-4 lg:px-5 py-2 my-2">
                Register Now
              </div>
            </Link>
            <i className="text-xs text-center">( Minimum registration to conduct the event is 4, else the cash will be refunded)</i>

          </div>
          <div
            className="h-auto card border-2 mx-4 border-white py-4 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40"
            data-aos="fade-right"
            data-aos-delay="150"
          >
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
