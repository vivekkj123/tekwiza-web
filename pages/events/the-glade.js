import {
  faCaretDown,
  faCaretRight,
  faIndianRupeeSign,
  faMapMarkedAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Aos from "aos";
import "aos/dist/aos.css";
import ExportedImage from "next-image-export-optimizer";
import Head from "next/head";
import React, { useEffect } from "react";
import Collapsible from "react-collapsible";
import GladeGreeverImage from "../../public/images/Events/The Glade[EEE Event 2].png";
import Footer from "../../src/components/Footer";
import Navbar from "../../src/components/Navbar";
import PageHeader from "../../src/components/PageHeader";

const GladeGreever = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <>
      <Head>
        <title>The Glade | TekWiza 2k22</title>
      </Head>
      <div className="bg-black  overflow-hidden h-full">
        <Navbar />
        <PageHeader title={"The Glade"} />
        <div className="  font-display grid gap-4 py-5 px-2 lg:px-12 lg:grid-cols-2">
          <div className="flex flex-col justify-center font-thin mx-2 lg:mx-6">
            <p>
              " The GLADE " is a life-sized Labyrinth which has been combined
              with Logic puzzles and electronic circuits to test the
              participant’s capabilities in problem solving abilities and
              cognitive skills. Unlike usual Labyrinths, participants would have
              to follow the light indications to reach from the START to the END
              in a dimly lit arena. The{" "}
              <span className="font-normal">darkness</span> is just one of the
              many challenges faced by the contestants. Participate to
              experience the fun! <br />
              <br />
              <span className="font-bold">GAME CONDUCT</span> <br />
              <br />
              <ul className="list-disc">
                <li>
                  Maximum time for each game is{" "}
                  <span className="font-normal">Reset</span> to the{" "}
                  <span className="font-normal">
                    10<sup>th</sup> player’s
                  </span>{" "}
                  best time in the leaderboards.
                </li>
                <li>
                  Each player will be given a suitable location to{" "}
                  <span className="font-normal">start</span>.
                </li>
                <li>
                  Once the contestants are in position, they will be provided
                  with the <span className="font-normal">first puzzle</span> to
                  solve.
                </li>
                <li>
                  The <span className="font-normal">timer starts</span> when the
                  players are in <span className="font-normal">position</span>.
                </li>
                <li>
                  Each contestant will be timed from the{" "}
                  <span className="font-normal">
                    start point till the end point
                  </span>
                  .
                </li>
                <li>
                  Contestants are arranged in the{" "}
                  <span className="font-normal">least time first (LTF)</span>{" "}
                  order and is put up in the leaderboard display.
                </li>
                <li>
                  <span className="font-normal">First two </span>winners are
                  selected for prize distribution at the
                  <span className="font-normal"> end</span> each{" "}
                  <span className="font-normal">of the day</span>.
                </li>
                <li>
                  Certificates will be given to{" "}
                  <span className="font-normal">all</span> participants.
                </li>
              </ul>
            </p>
          </div>
          <ExportedImage className="h-46 w-auto" src={GladeGreeverImage} />
        </div>
        <Collapsible
          openedClassName="font-display font-thin py-3 lg:mx-20 mx-2 px-2 lg:px-10 border-white rounded-lg border-2"
          className="lg:mx-20 mx-2 font-display font-thin my-5 px-2 lg:px-5 rounded-lg border-white border-2"
          triggerWhenOpen={
            <div className="flex items-center p-2 gap-4">
              <FontAwesomeIcon icon={faCaretDown} />
              <p className="font-bold">Rules</p>
            </div>
          }
          trigger={
            <div className="flex items-center p-2 gap-4">
              <FontAwesomeIcon icon={faCaretRight} />
              <p>Rules</p>
            </div>
          }
        >
          <br />
          <ul className="list-disc ml-3">
            <li>
              No{" "}
              <span className="font-normal">
                running, climbing, jumping or crawling
              </span>{" "}
              is allowed throughout the Labyrinth.
            </li>
            <li>
              Contestants should cooperate with the organizing team and any
              dispute should be reported only to the organizing team and should
              not take maters to their own hands
            </li>
            <li>
              Contestants can either register as a{" "}
              <span className="font-normal">pair</span> or{" "}
              <span className="font-normal">solo</span>.
            </li>
            <li>
              Contestants should{" "}
              <span className="font-normal">peacefully leave</span> the arena
              once they exceed the
              <span className="font-normal"> maximum time</span>. No further
              arguments are entertained.
            </li>
            <li>
              <span className="font-normal">No food, gum or drinks</span>{" "}
              allowed in the arena.
            </li>
            <li>
              Contestants are <span className="font-normal">not allowed</span>{" "}
              to take any <span className="font-normal">external help</span> or
              browse
              <span className="font-normal"> the internet</span> while at the
              game. Any misconduct deemed inappropriate by the attendant will be
              cause for <span className="font-normal">immediate dismissal</span>{" "}
              from the arena with{" "}
              <span className="font-normal">no refunds</span>.
            </li>
          </ul>
        </Collapsible>
        <Collapsible
          openedClassName="font-display font-thin py-3 lg:mx-20 mx-2 px-2 lg:px-10 border-white rounded-lg border-2"
          className="lg:mx-20 mx-2 font-display font-thin my-5 px-2 lg:px-5 rounded-lg border-white border-2"
          triggerWhenOpen={
            <div className="flex items-center p-2 gap-4">
              <FontAwesomeIcon icon={faCaretDown} />
              <p className="font-bold">Disclaimer</p>
            </div>
          }
          trigger={
            <div className="flex items-center p-2 gap-4">
              <FontAwesomeIcon icon={faCaretRight} />
              <p>Disclaimer</p>
            </div>
          }
        >
          <br />
          <ul className="list-disc ml-3">
            <li>
              The decisions made by the{" "}
              <span className="font-normal">lead organizer</span> will be{" "}
              <span className="font-normal">final</span> and conclusive no
              further disputes will be entertained.
            </li>
            <li>
              The event organizers or the college will not be responsible for
              loss of any personal belongings during/at the time of the game.
            </li>
            <li>
              Contestants showing anti-social behavior shall be expelled from
              the game without refunds.
            </li>
            <li>
              Those who suffer from any health or physical condition with dim or
              strobe lights and/or are under the influence of alcohol or drugs
              are prohibited from registering for the event.
            </li>
            <li>Entry without registration is not permitted</li>
          </ul>
        </Collapsible>
        <div className="lg:flex-row flex-col flex text-white  items-center  justify-around">
          <div
            className="
h-auto card border-2 mx-4 border-white py-7 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40"
            data-aos="fade-right"
            data-aos-delay="50"
          >
            <h2 className="border-b-2 text-xl font-mono">Event Details</h2>

            <p className="mt-3 text-xs">Dec - 2 & 3</p>

            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faMapMarkedAlt} />
              <p className="text-xs">Ground Floor (DB)</p>
            </div>
          </div>
          <div
            className="h-auto card border-2 mx-4 border-white py-4 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40"
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

            <p className="bg-white text-black text-center px-3 my-1 rounded">
              Spot Registration
            </p>
          </div>
          <div
            className="
h-auto card border-2 mx-4 border-white py-7 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40"
            data-aos="fade-right"
            data-aos-delay="150"
          >
            <h2 className="border-b-2 text-xl font-mono">Contact Details</h2>

            <p className="mt-3 text-xs">Coordinators</p>

            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faPhone} />
              <p className="text-xs">Ashwin Jaison - 7511163335</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default GladeGreever;
