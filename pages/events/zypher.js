import {
  faMapMarkedAlt,
  faPhone,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Aos from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect } from "react";
import Footer from "../../src/components/Footer";
import Navbar from "../../src/components/Navbar";
import PageHeader from "../../src/components/PageHeader";
import UnfinishedImage from "/public/images/Events/Zypher/unfinished.jpeg";
import RiddleRookImage from "/public/images/Events/Zypher/riddle-rook.jpeg";
import TryAgainImage from "/public/images/Events/Zypher/try-again.jpeg";
import TwitPickerImage from "/public/images/Events/Zypher/twitpicker.jpeg";
import NefariousImage from "/public/images/Events/Zypher/nefarious.jpeg";
import DejavuImage from "/public/images/Events/Zypher/dejavu.jpeg";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import ExportedImage from "next-image-export-optimizer/legacy/ExportedImage";
import CrypsusImage from '/public/images/Events/Zypher/crypsus.jpeg'

const Zypher = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <>
      <Head>
        <title>Zypher | TekWiza 2k22</title>
      </Head>
      <div className="bg-black  overflow-hidden h-full">
        <Navbar />
        <PageHeader title={"Zypher"} />

        <div className="  font-display py-5 px-4 lg:px-20">
          <div className="flex items-center font-thin mx-2 lg:mx-6">
            <p>
              Zypher is an event conducted by the department of Computer Science
              and engineering in association with TEKWIZA. It is a multi-tier
              event with each tier emphasizing on different stages in
              Programming to test their Programming and Algorithmic skills.{" "}
              <span data-aos="fade-right" data-aos-delay="50">
                {" "}
                Participants can showcase their problem solving skills which
                helps them to tackle real-world challenges.
                <br />
                <br />
                Sub-Events Are (Click to zoom each images):
              </span>
              <br />
              <div
                data-aos="fade-right"
                data-aos-delay="40"
                className="grid w-fit mx-auto mt-4 gap-4 lg:grid-cols-3"
              >
                <div className="p-4 rounded-3xl text-center border border-gray-50">
                  <Zoom>
                    <ExportedImage
                      className="h-72 mb-2 w-auto"
                      src={UnfinishedImage}
                    />
                  </Zoom>
                </div>
                <div className="p-4 rounded-3xl text-center border border-gray-50">
                  <Zoom>
                    <ExportedImage
                      className="h-72 mb-2 w-auto"
                      src={CrypsusImage}
                    />
                  </Zoom>
                </div>
                <div className="p-4 rounded-3xl text-center border border-gray-50">
                  <Zoom>
                    <ExportedImage
                      className="h-72 mb-2 w-auto"
                      src={TryAgainImage}
                    />
                  </Zoom>
                </div>
                <div className="p-4 rounded-3xl text-center border border-gray-50">
                  <Zoom>
                    <ExportedImage
                      className="h-72 mb-2 w-auto"
                      src={TwitPickerImage}
                    />
                  </Zoom>
                </div>
                <div className="p-4 rounded-3xl text-center border border-gray-50">
                  <Zoom>
                    <ExportedImage
                      className="h-72 mb-2 w-auto"
                      src={NefariousImage}
                    />
                  </Zoom>
                </div>
                <div className="p-4 rounded-3xl text-center border border-gray-50">
                  <Zoom>
                    <ExportedImage
                      className="h-72 mb-2 w-auto"
                      src={DejavuImage}
                    />
                  </Zoom>
                </div>
                <span></span>
                <div className="p-4 rounded-3xl text-center border border-gray-50">
                  <Zoom>
                    <ExportedImage
                      className="h-72 mb-2 w-auto"
                      src={RiddleRookImage}
                    />
                  </Zoom>
                </div>
                <span></span>

              </div>
              <br />
              <span data-aos="fade-right" className="font-bold">
                RULES AND REGULATIONS
              </span>
              <br />
              <ul className="list-decimal" data-aos="fade-right">
                <li>
                  The entry fee for each team containing a maximum of 3 people
                  is Rs.150/-. Registrations for all events will be off-limits
                  after 11:59 pm on 30th November 2022.
                </li>
                <li>
                  All participating teams are requested to report at their
                  respective event arenas by 10:00 am on 2nd December 2022.
                </li>
                <li>
                  Team members are requested to produce a valid ID card from
                  their institute. College ID cards are mandatory for all
                  students.
                </li>
                <li>
                  Winners will be selected on the basis of their corresponding
                  group scores. The verdict of the judges will be final.
                </li>
                <li>Malpractices of any kind will not be entertained.</li>
              </ul>
              <iframe id="leaderboard" className="h-168 overflow-y-visible mx-auto mt-10 w-full text-center"  src="https://zypher-leaderboard.vercel.app/" scrolling="no"  frameborder="0"></iframe>
             <table
                className="table-auto mx-auto my-5 text-center border-white border-2"
                data-aos="zoom-in"
                data-aos-delay="50"
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
                    <td className="px-2 py-2">Rs. 20,000/-</td>
                  </tr>
                  <tr className=" border-b-2">
                    <td className="py-2 px-2 w-6">
                      2<sup>nd</sup>
                    </td>
                    <td className="px-2 py-2">Rs. 12,000/-</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-2 w-6">
                      3<sup>rd</sup>
                    </td>
                    <td className="px-2 py-2">Rs. 8,000/-</td>
                  </tr>
                </tbody>
              </table>
            </p>
          </div>
        </div>
        <div className="lg:flex-row flex-col flex text-white  items-center  justify-around">
          <div
            className="
h-auto card border-2 mx-4 border-white py-8 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40"
            data-aos="fade-right"
            data-aos-delay="50"
          >
            <h2 className="border-b-2 text-xl font-mono">Event Details</h2>

            <p className="mt-3 text-xs">Dec - 2 & 3</p>

            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faMapMarkedAlt} />
              <p className="text-xs">Decenial Block (203, 206, 207, 208)</p>
            </div>
          </div>
          <div
            className="h-auto card border-2 mx-4 border-white py-4 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <h2 className="border-b-2 text-xl font-mono">Registration</h2>
            <p className="mt-3 text-xs">3 members</p>

            <div className="register h-auto my-2 py-2 px-2 flex ">
              <div className="circle"></div> <p className="register-fee">FEE</p>
              <div></div>
              <p className="text-black price ">
               150 <span>/-</span>
              </p>
            </div>
            <Link href={"https://forms.gle/WAW7wuRWisRzqbrK7"}>
              <div className="text-center cursor-pointer rounded-lg mx-auto button font-mono bg-white text-black px-4 lg:px-5 py-2 my-2">
                Register Now
              </div>
            </Link>
            <p className="text-xs text-center">
              Deadline for Registrations
              <br /> 30th November 2022
            </p>
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
              <p className="text-xs">Mohammed Fahl : +91 94476 01111</p>
            </div>
            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faPhone} />
              <p className="text-xs">Sooraj - +91 89436 51774</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Zypher;
