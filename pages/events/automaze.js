import {
  faCaretDown,
  faCaretRight,
  faClock,
  faIndianRupeeSign,
  faMapMarkedAlt,
  faPhone,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ExportedImage from "next-image-export-optimizer";
import Head from "next/head";
import Aos from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import React, { useEffect } from "react";
import automazeImage from "../../public/images/Events/automaze.jpg";
import Footer from "../../src/components/Footer";
import Navbar from "../../src/components/Navbar";
import PageHeader from "../../src/components/PageHeader";
import Collapsible from "react-collapsible";

const AutoMaze = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <>
      <Head>
        <title>AutoMaze | TekWiza 2k22</title>
      </Head>
      <div className="bg-black  overflow-hidden h-full">
        <Navbar />
        <PageHeader title={"AutoMaze"} />
        <div className="  font-display grid gap-4 py-5 px-2 lg:px-12 lg:grid-cols-2">
          <div className="flex items-center font-thin mx-2 lg:mx-6">
            <p>
              RC cars and trucks look more realistic than ever, but until we’re
              all driving electric full-scale cars, battery-powered models are
              still highly unrealistic in the way they’re powered. For a truly
              realistic RC experience, nothing beats driving an RC machine with
              a real piston-pounding, fuel-burning engine under the body.
              <br />{" "}
              <span data-aos="fade-right">
                The participants must function as a team to design, engineer,
                build, test, promote and compete with an advanced race track.
                <br />
                “Life without RACING is like an unshaped pencil….. there’s no
                point”.
                <br />
                <span className="font-bold">
                  RACE IT *BREAK IT * FIX IT * REPEAT
                </span>
              </span>
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
            <ExportedImage className="h-46 w-auto" src={automazeImage} />
            <div className="mx-auto font-thin border mt-6 lg:w-72 w-48 border-gray-50 flex flex-col rounded-lg p-2 lg:p-4">
              <h2 className="text-center font-bold">Sub-Event 👾</h2>
              <ul>
                <li>
                  The RC car will be provided by main coordinators of the event.
                </li>
                <li>There will be only spot registration for the sub event.</li>
                <li>Registration Fee:- 50₹</li>
                <li>For 🥇- 1000₹</li>
                <li>For 🥈- 500₹</li>
                <li>
                  All the participants of the sub event is <b>eligible</b> for
                  consolation prize
                </li>
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
              <p className="font-bold">Guidelines</p>
            </div>
          }
          trigger={
            <div className="flex items-center p-2 gap-4">
              <FontAwesomeIcon icon={faCaretRight} />
              <p>Guidelines</p>
            </div>
          }
        >
          <br />
          <ul className="list-disc ml-3">
            <li>
              Get your RC cars whose task is to complete the desired amount of
              lap, and come first. If the RC is out of the track or flips over
              it is deemed disqualified.
            </li>
            <li>
              Different RC cars compete against each other in a survival
              tournament.
            </li>
            <li>
              Criterion : The RC must be of 1/8 and any others over the size
              will be automatically disqualified. The fuel for battery powered
              RC and the kit should be brought by the participants it's self.
              The safety of the RC are responsibilities of the participants.
            </li>
            <h2 className="font-normal">Remote Control:</h2>
            <li>
              All controls of the RC should be done remotely with all the power
              supply on board. It is the responsibility of the participants to
              ensure that their control system equipment does not interfere with
              the systems of any other.
            </li>
            <li>
              The transmitters and receivers should be able to reach the long
              distance. Any reception problems faced by the teams will not be
              the responsibility of the event managers.
            </li>
            <li>
              The team must ensure to have spare wireless remote-control circuit
              of two dual control circuits which maybe interchanged before the
              start of the race to avoid frequency interference with other
              teams.
            </li>
            <br />
            Note:- The rules of the competition may vary and can be changed by
            the event managers.
          </ul>
        </Collapsible>
        <div className="lg:flex-row flex-col flex text-white  items-center  justify-around">
          <div
            className="h-auto card border-2 mx-4 border-white py-4 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40"
            data-aos="fade-right"
            data-aos-delay="50"
          >
            <h2 className="border-b-2 text-xl font-mono">Event Details</h2>

            <p className="mt-3 text-xs">Dec - 2 & 3</p>
            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faClock} />
              <p className="text-xs">2:00 PM</p>
            </div>
            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faMapMarkedAlt} />
              <p className="text-xs">BB Car Parking Area</p>
            </div>
          </div>
          <div
            className="h-auto card border-2 mx-2 border-white py-2 font-display flex flex-col items-center  my-2 rounded-lg lg:w-48 w-40"
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

            <Link href={"https://forms.gle/31NceBVXFM2SfCXS9"}>
              <div className="text-center cursor-pointer rounded-lg mx-2 my-2 button font-mono bg-white text-black px-4 lg:px-5 py-2">
                Register Now
              </div>
            </Link>
            <br />
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
              <p className="text-xs"> Shalvin P A - 9745337457</p>
            </div>
            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faPhone} />
              <p className="text-xs"> Manukrishna - 7994380504</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AutoMaze;
