import {
  faIndianRupeeSign,
  faLocation,
  faMapMarkedAlt,
  faMapMarker,
  faMapMarkerAlt,
  faPhone,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React , { useEffect }from "react";
import Navbar from "../../src/components/Navbar";
import PageHeader from "../../src/components/PageHeader";
import SnakeOMysteryImage from "/public/images/Events/Snake-O-Mystery.png";
import Aos from 'aos';
import 'aos/dist/aos.css';
import Footer from "../../src/components/Footer";

const SnakeOMystery = () => {
  useEffect(()=> {
    Aos.init({duration: 500})
  },[]);
  return (
    <>
      <Head>
        <title>Snake-O-Mystery | TekWiza 2k22</title>
      </Head>
      <div className="bg-black  overflow-hidden h-full">
        <Navbar />
        <PageHeader title={"Snake -o- mystery"} />
        <div className="  font-display grid gap-4 py-5 px-2 lg:px-12 lg:grid-cols-2">
          <div className="flex items-center font-thin mx-2 lg:mx-6">
            <p>
              The event is based on the well-known game “Snake and Ladder” with
              a bit of twist. Firstly, a question will be asked to each
              participant and then if the <span data-aos="fade-right" data-aos-delay="50" >
              answer is correct then one chance is
              given to him/her to throw a dice. Then the participant moves
              forward to the number that appears on the dice. If the participant
              fails to answer the question, then he/she will be sent back by one
              step. Discover yourself by exploring more games at
              Snake-O-Mystery.
              <br />
              All participants shall receive Certificate of Participation worth
              KTU activity points via the registered mail.
                </span> 
              <table className="table-auto mx-auto my-5 text-center border-white border-2" data-aos="zoom-in" >
                <thead className="border-b-white border-b-2">
                  <tr>
                    <th className="px-4 py-2">
                      <FontAwesomeIcon className="mx-2" icon={faTrophy} />
                      Prize Money Worth</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td  className="px-4 py-2">Rs. 1000/-</td>
                  </tr>
                </tbody>
              </table>
            </p>
          </div>
          <Image className="h-46 w-auto" src={SnakeOMysteryImage} />
        </div>
        <div className="flex lg:flex-row flex-col text-white  items-center  justify-around">
          <div className="h-auto border-2 mx-4 border-white py-10 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40" data-aos="fade-right" data-aos-delay="50">
            <h2 className="border-b-2 text-xl font-mono">Event Details</h2>

            <p className="mt-3 text-xs">Dec - 2 & 3</p>

            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faMapMarkedAlt} />
              <p className="text-xs">Bio Block (Seminar Hall I)</p>
            </div>
          </div>
          <div className="h-auto border-2 mx-4 border-white py-4 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40" data-aos="fade-right" data-aos-delay="100">
            <h2 className="border-b-2 text-xl font-mono">Registration</h2>
            <p className="mt-3 text-xs">2 members</p>

            <div className="register h-auto my-2 py-2 px-2 flex "><div className="circle"></div> <p className="register-fee">FEE</p><div></div><FontAwesomeIcon className="mx-2 text-black" icon={faIndianRupeeSign} /><p className="text-black price ">250<span>/-</span></p></div>
            <Link href={"https://forms.gle/kCmQUCkbJPeK18bb9"}>
              <div className="text-center cursor-pointer rounded-lg mx-auto button font-mono bg-white text-black px-4 lg:px-5 py-2">
                Register Now
              </div>
            </Link>
          </div>
          <div className="h-auto border-2 mx-4 border-white py-8 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40" data-aos="fade-right" data-aos-delay="150">
            <h2 className="border-b-2 text-xl font-mono py-1">Contact Details</h2>

            <p className="mt-3 text-xs">Coordinators</p>

            <div className="flex items-center mt-5">
              <FontAwesomeIcon className="mx-2" icon={faPhone} />
              <p className="text-xs">Christina Koshy : <br/>+91 94004 25654</p>
            </div>
          </div>
        </div>
        <Footer />

      </div>
    </>
  );
};

export default SnakeOMystery;
