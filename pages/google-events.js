import Aos from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import React, { useEffect } from "react";
import EventCard from "../src/components/EventCard";
import toogleImage from "/public/images/Workshops/toogle-workshop.JPG";
import Footer from "/src/components/Footer";
import Navbar from "/src/components/Navbar";
import PageHeader from "/src/components/PageHeader";
import AndroidCampusFestImage from "/public/images/Workshops/Android Campus Fest.jpg";

const GoogleEvents = () => {
  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);
  return (
    <>
      <Head>
        <title>Google Events | Tekwiza 2022</title>
      </Head>
      <div className="h-max  overflow-hidden z-20 bg-black Events">
        <Navbar />
        <PageHeader title={"Google Events"} />
        <div className="grid grid-cols-1 lg:grid-cols-3 py-5 place-items-center lg:px-10">
          <EventCard
            name={"Advanced Python and Automation"}
            image={toogleImage}
            link={"https://toogle.co.in"}
          />
          <EventCard
            name={"Android Campus Fest"}
            image={AndroidCampusFestImage}
            link={"/workshops/android-campus-fest"}
          />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default GoogleEvents;
