import {
  faIndianRupeeSign,
  faLocation,
  faMapMarkedAlt,
  faMapMarker,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navbar from "../../src/components/Navbar";
import PageHeader from "../../src/components/PageHeader";
//   import ZypherImage from "/public/images/Events/Snake-O-Mystery.png";

const Zypher = () => {
  return (
    <>
      <Head>
        <title>Zypher | TekWiza 2k22</title>
      </Head>
      <div className="bg-black  overflow-hidden h-full">
        <Navbar />
        <PageHeader title={"Zypher"} />
        <div className="  font-display grid gap-4 py-5 px-2 lg:px-12 lg:grid-cols-2">
          <div className="flex items-center font-thin mx-2 lg:mx-6">
            <p>
              Zypher is an event conducted by the department of Computer Science
              and engineering in association with TEKWIZA. It is a multi-tier
              event with each tier emphasizing on different stages in
              Programming to test their Programming and Algorithmic skills.
              Participants can showcase their problem solving skills which helps
              them to tackle real-world challenges.
              <br />
              <span className="font-bold">ASSEMBLY:</span> Do you know what
              makes up the different components of a computer? If so, hop on in
              for our competition where we test your skills to rebuild a
              computer article.
              <br />
              <span className="font-bold">CTF:</span> Showcase your cyber
              security mastermind by working alongside a team to crack different
              information security in an attempt to find that hidden flag. Do
              you have what it takes to Capture The Flag?
              <br />
              <span className="font-bold">BLIND CODING:</span> Anybody can code,
              but is coding your best forte? Then we invite you to our blinding
              coding platform where we help you unravel your capabilities
              through a series of passage writing challenges.
              <br />
              <span className="font-bold">Web Designing:</span> An offline web
              designing event that tests your knowledge of coding and
              creativity. Construct and implement websites, using both creative
              and technical skills in a rapidly evolving industry.
              <br />
              <span className="font-bold">Debugging:</span> An offline coding
              event that tests your knowledge of coding and programming
              languages. Detecting and removing of existing and potential errors
              in a given set of codes.
              <br />
              <span className="font-bold">Competitive Coding:</span> An offline
              coding event that tests your knowledge of coding and programming
              languages. Programmers compete against each other to solve
              programming questions in a limited amount of time.
              <br />
              <span className="font-bold">TECH HUNT:</span> Selected 5 teams
              will participate in Tech Hunt . Top 3 teams will be selected.
              <br />
              <br />
              <span className="font-bold">RULES AND REGULATIONS</span>
              <br />
              <ul className="list-decimal">
                <li>
                  The entry fee for each team containing a maximum of 3 people
                  is Rs.450/-. Registrations for all events will be off-limits
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
            </p>
          </div>
          {/* <Image className="h-46 w-auto" src={SnakeOMysteryImage} /> */}
        </div>
        <div className="flex text-white   justify-around">
          <div className="h-auto border-2 mx-4 border-white py-4 font-display flex flex-col items-center my-4 rounded-lg w-48">
            <h2 className="border-b-2 text-xl font-mono">Event Details</h2>

            <p className="mt-3 text-xs">Dec - 2 & 3</p>

            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faMapMarkedAlt} />
              <p className="text-xs">Decenial Block (203, 206, 207, 208)</p>
            </div>
          </div>
          <div className="h-auto border-2 mx-4 border-white py-4 font-display flex flex-col items-center my-4 rounded-lg w-48">
            <h2 className="border-b-2 text-xl font-mono">Registration</h2>
            <p className="mt-3 text-xs">3 members</p>

            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faIndianRupeeSign} />
              <p className="text-xs">Registration Fee: Rs.450/-</p>
            </div>
            <br />
            <p className="text-xs text-center">
              Deadline for Registrations
              <br /> 30th November 2022
            </p>
          </div>
          <div className="h-auto border-2 mx-4 border-white py-4 font-display flex flex-col items-center my-4 rounded-lg w-48">
            <h2 className="border-b-2 text-xl font-mono">Contact Details</h2>

            <p className="mt-3 text-xs">Coordinators</p>

            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faPhone} />
              <p className="text-xs">Mohammed Fahl : +91 94476 01111</p>
            </div>
            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faPhone} />
              <p className="text-xs">Sooraj - +91 79943 80504</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Zypher;
