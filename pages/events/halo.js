import {
  faCaretDown,
  faCaretRight,
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
import HaloImage from "../../public/images/Events/Halo[ EEE Subevent 2 ].png";
import Footer from "../../src/components/Footer";
import Navbar from "../../src/components/Navbar";
import PageHeader from "../../src/components/PageHeader";
import Collapsible from "react-collapsible";

const Halo = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <>
      <Head>
        <title>Halo | TekWiza 2k22</title>
      </Head>
      <div className="bg-black  overflow-hidden h-full">
        <Navbar />
        <PageHeader title={"Halo"} />
        <div className="  font-display grid gap-4 py-5 px-2 lg:px-12 lg:grid-cols-2">
          <div className="flex items-center font-thin mx-2 lg:mx-6">
            <p>
              "Halo" is a free for all, real time strategy game that utilizes an
              arena with laser guns , vest and certain blockades specially made
              for the laser tag arena. The goal of the individual is to
              eliminate the other player from the particular round. The death
              match ends on a time limit and the winner of the game is the last
              man standing out of the four players in a round. Each player gets
              a vest that is usually covered with sensors that can be hit by a
              laser emitted from the laser gun. When the beam hits the sensor,
              that player either scores a point or reduces the health tag placed
              with them. Obstacles are placed for better cover and lights will
              be dimmed to make the game intense and thrilling. <br />
              <br />
              <span className="font-semibold">EQUIPMENTS</span>
              <br />
              <ul className="list-disc">
                <li>Vest with sensors</li>
                <li>Shoe where the front is closed</li>
                <li>Laser gun</li>
              </ul>
              <br />
              <span className="font-semibold">STRATEGY</span>
              <ul className="list-disc">
                <li>Keep a low profile.</li>
                <li>Try to move fast from one spot to another.</li>
                <li>Try to be precise while shooting</li>
                <li>
                  Become familiar with the layout of the room and understand the
                  best spots
                </li>
              </ul>
            </p>
          </div>
          <ExportedImage className="h-46 w-auto" src={HaloImage} />
        </div>
        <Collapsible
          openedClassName="font-display font-thin py-3 lg:mx-20 mx-2 px-2 lg:px-10 border-white rounded-lg border-2"
          className="lg:mx-20 mx-2 font-display font-thin my-5 px-2 lg:px-5 rounded-lg border-white border-2"
          triggerWhenOpen={
            <div className="flex items-center p-2 gap-4">
              <FontAwesomeIcon icon={faCaretDown} />
              <p className="font-bold">How to Play?</p>
            </div>
          }
          trigger={
            <div className="flex items-center p-2 gap-4">
              <FontAwesomeIcon icon={faCaretRight} />
              <p>How to Play</p>
            </div>
          }
        >
          <br />
          <ul className="list-disc ml-3">
            <li>
              Each game is a <span className="font-normal">7 minutes</span> long
              experience from start to finish.
            </li>
            <li>
              You have <span className="font-normal">a minute to plan</span>{" "}
              before the math to strategize and come up with the plan.
            </li>
            <li>
              Each player wears a vest with sensors on the front and the back.
            </li>
            <li>
              Additionally,each player will have a gun that is connected to the
              vest they are wearing.
            </li>
            <li>
              You can shoot the opponents by aiming your gun at the opponents
              sensors on their vest by triggering the gun.
            </li>
          </ul>
        </Collapsible>
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
              <span className="font-normal">running,climbing or crawling</span>{" "}
            </li>
            <li>
              Players should{" "}
              <span className="font-normal">not make physical contact</span> or
              use of foul language
            </li>
            <li>
              Should{" "}
              <span className="font-normal">
                not cover or block the vest sensors
              </span>
              , having both hands on the gun is preferable
            </li>
            <li>
              Players should make sure to{" "}
              <span className="font-normal">
                not point the laser gun at the players eyes
              </span>
            </li>
            <li>
              <span className="font-normal">Closed shoes</span> are to be worn
              all times. No sandals,high heels, flip flops,socks,bare feet.
            </li>
            <li>
              <span className="font-normal">No food, gum or drinks</span>{" "}
              allowed in the arena
            </li>
            <li>
              All electronic devices and personal items should be personally
              safely secured before entering the arena.{" "}
              <span className="font-normal">Loss of personal belongings</span>{" "}
              is your responsibility.
            </li>
            <li>
              Those who suffer, get seizures , ear problems , headache,
              migraines or are uncomfortable or any health or physical condition
              with fog , strobe lights, lasers etc and even under the influence
              of alcohol or drugs could be affected therefore should{" "}
              <span className="font-normal">NOT PLAY.</span>
            </li>
            <li>
              All players who play do so at their{" "}
              <span className="font-normal">own risk</span>. Any misconduct
              deemed inappropriate by the attendant will be cause for{" "}
              <span className="font-normal">immediate dismissal</span> from the
              arena with <span className="font-normal">no refunds</span>.
            </li>
          </ul>
        </Collapsible>
        <div className="lg:flex-row flex-col flex text-white  items-center  justify-around">
          <div
            className="h-auto card border-2 mx-4 border-white py-6 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40"
            data-aos="fade-right"
            data-aos-delay="50"
          >
            <h2 className="border-b-2 text-xl font-mono">Event Details</h2>

            <p className="mt-3 text-xs">Dec - 2 & 3</p>

            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faMapMarkedAlt} />
              <p className="text-xs">EEE Power Electronics Lab</p>
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
              <p className="text-black price ">
                20<span>/-</span>
              </p>
            </div>

            <p className="bg-white text-black text-center px-3 rounded my-2">
              Spot Registration
            </p>
          </div>
          <div
            className="
h-auto card border-2 mx-4 border-white py-8 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40"
            data-aos="fade-right"
            data-aos-delay="150"
          >
            <h2 className="border-b-2 text-xl font-mono">Contact Details</h2>

            <p className="mt-3 text-xs">Coordinators</p>

            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faPhone} />
              <p className="text-xs">Rosh John - 7902491624</p>
            </div>
            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faPhone} />
              <p className="text-xs">Albert Roy - 9188477837</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Halo;
