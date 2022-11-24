import {
  faClock,
  faIndianRupeeSign,
  faMapMarkedAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Aos from "aos";
import "aos/dist/aos.css";
import ExportedImage from "next-image-export-optimizer";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect } from "react";
import AndroidCampusFestImage from "/public/images/Workshops/Android Campus Fest.jpg";

import Footer from "../../src/components/Footer";
import Navbar from "../../src/components/Navbar";
import PageHeader from "../../src/components/PageHeader";

const AndroidCampusFest = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <>
      <Head>
        <title>Android Campus Fest | TekWiza 2k22</title>
      </Head>
      <div className="bg-black  overflow-hidden h-full">
        <Navbar />
        <PageHeader title={"Android Campus Fest"} />
        <div className="  font-display grid gap-4 py-5 px-2 lg:px-12 lg:grid-cols-2">
          <div className="flex items-center font-thin mx-2 lg:mx-6">
            <p>
              We are conducting an Android app development Appathon in
              association with Tekwiza - Techfest of Sahrdaya on 2nd of December
              2022. The program is a collaboration between Android Educator
              Community and Sahrdaya College of Engineering and Technology.
              Theme of the Appathon is "Building Apps useful for KTU"  <br />
              But I don't know Android Development yet  <br />
                We have planned the appathon as a workshop + mentoring kind of
              model. Morning session, there will be a workshop on android
              development basics and afternoon it will be a self paced study +
              implement model. We want this appathon to serve as a starting
              point on android development for our participants. We expect that
              students without prior app development knowledge will be able to
              gain the basics of building their own android apps once they
              complete this appathon. This is not a branch specific event.
              Students from any stream can join the event if they have some kind
              of programming knowledge in any coding platform.  <br />
                 What are the deliverables?  <br />
                Be the first from your campus to learn about "kotlin" - the
              latest google backed framework in Android Development. This
              automatically makes them the best suited candidates for Android
              development based companies during interviews.  <br />
              e-Certificates to claim Activity Points.  <br />
              The top performing teams will receive exciting the Tech Giant
              Sponsored Goodies.  <br />
              Early bird discounts for registration is available now.  <br />
            </p>
          </div>
          <ExportedImage className="h-46 w-auto" src={AndroidCampusFestImage} />
        </div>
        <div className="lg:flex-row flex flex-col text-white  items-center  lg:justify-around">
          <div
            className="h-auto card border-2 mx-4 border-white py-9 font-display flex flex-col items-center my-4 rounded-lg lg:w-48 w-40"
            data-aos="fade-right"
            data-aos-delay="50"
          >
            <h2 className="border-b-2 text-xl font-mono">Event Details</h2>

            <p className="mt-3 text-xs">Dec 2nd</p>
            <div className="flex mt-5">
              <FontAwesomeIcon icon={faClock} />
              <p className="text-xs"> 9am - 12:30pm</p>
            </div>
            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faMapMarkedAlt} />
              <p className="text-xs">
                BME Tutorial Room ( Bio Block - Ground Floor )
              </p>
            </div>
          </div>
          <div
            className="h-auto card border-2 mx-4 border-white py-7 font-display flex flex-col items-center my-4 rounded-lg w-40 lg:w-48"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <h2 className="border-b-2 text-xl font-mono">Registration</h2>

            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faIndianRupeeSign} />
              <p className="text-xs">Registration Fee: Rs.399/- per Team</p>
            </div>
            <br />
            <Link href={"https://rzp.io/l/scet"}>
              <div className="text-center cursor-pointer rounded-lg mx-auto button font-mono bg-white text-black px-4 lg:px-5 py-2">
                Register Now
              </div>
            </Link>
            <br />
          </div>
          <div
            className="h-auto card border-2 mx-4 border-white py-3 font-display flex flex-col items-center my-4 rounded-lg  w-40 lg:w-48"
            data-aos="fade-right"
            data-aos-delay="150"
          >
            <h2 className="border-b-2 text-xl font-mono">Contact Details</h2>

            <p className="mt-3 text-xs">Coordinators</p>

            <div className="flex  mt-5">
              <FontAwesomeIcon className="mx-2" icon={faPhone} />
              <div>
                <p className="text-xs">Nikhil Siby : 82812 86410</p>
                <p className="text-xs">Aloshious : 81138 45134</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AndroidCampusFest;
