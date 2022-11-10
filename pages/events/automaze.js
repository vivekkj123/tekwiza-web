import {
  faClock,
  faIndianRupeeSign,
  faMapMarkedAlt,
  faPhone,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import automazeImage from '../../public/images/Events/automaze.jpg'
import React , { useEffect }from "react";
import Navbar from "../../src/components/Navbar";
import PageHeader from "../../src/components/PageHeader";
import Aos from 'aos';
import 'aos/dist/aos.css';

const AutoMaze = () => {
  useEffect(()=> {
    Aos.init({duration: 500})
  },[]);
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
            <p  >
              RC cars and trucks look more realistic than ever, but until we’re
              all driving electric full-scale cars, battery-powered models are
              still highly unrealistic in the way they’re powered. For a truly
              realistic RC experience, nothing beats driving an RC machine with
              a real piston-pounding, fuel-burning engine under the body.
              <br /> <span data-aos="fade-right" >
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
                    <td className="px-2 py-2">Rs. 40,000/-</td>
                  </tr>
                  <tr className=" border-b-2">
                    <td className="py-2 px-2 w-6">
                      2<sup>nd</sup>
                    </td>
                    <td className="px-2 py-2">Rs. 20,000/-</td>
                  </tr>
                </tbody>
              </table>
            </p>
          </div>
          <Image className="h-46 w-auto" src={automazeImage} />
        </div>
        <div className="lg:flex-row flex-col flex text-white  items-center  justify-around">
          <div className="h-auto border-2 mx-4 border-white py-4 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40" data-aos="fade-right" data-aos-delay="50">
            <h2 className="border-b-2 text-xl font-mono">Event Details</h2>

            <p className="mt-3 text-xs">Dec - 2 & 3</p>
            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faClock} />
              <p className="text-xs">2:00 PM</p>
            </div>
            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faMapMarkedAlt} />
              <p className="text-xs">Basket Ball Court</p>
            </div>
          </div>
          <div className="h-auto border-2 mx-2 border-white py-2 font-display flex flex-col items-center  my-2 rounded-lg lg:w-48 w-40" data-aos="fade-right" data-aos-delay="100">
            <h2 className="border-b-2 text-xl font-mono">Registration</h2>

            <div className="register h-auto my-2 py-2 px-2 flex "><div className="circle"></div> <p className="register-fee">FEE</p><div></div><FontAwesomeIcon className="mx-2 text-black" icon={faIndianRupeeSign} /><p className="text-black price ">2000<span>/-</span></p></div>
            
            <Link href={"https://forms.gle/31NceBVXFM2SfCXS9"}>

              <div className="text-center cursor-pointer rounded-lg mx-2 my-2 button font-mono bg-white text-black px-4 lg:px-5 py-2">
                Register Now

              </div>
            </Link>
            <br />
          </div>
          <div className="h-auto border-2 mx-4 border-white py-4 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40" data-aos="fade-right" data-aos-delay="150">
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
      </div>
    </>
  );
};

export default AutoMaze;
