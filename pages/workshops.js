import Head from "next/head";
import React from "react";
import EventCard from "../src/components/EventCard";
import Footer from "../src/components/Footer";
import Navbar from "../src/components/Navbar";
import PageHeader from "../src/components/PageHeader";
import bioEnterpreneurshipImage from "/public/images/Workshops/Bio-Entrepreneurship Workshop.png";
import IbotImage from "/public/images/Workshops/IBot wrk.jpg";
import sketchWizImage from "/public/images/Workshops/Sketch Wiz.png";
import toogleImage from "/public/images/Workshops/toogle-workshop.JPG";
import AssistonImage from "/public/images/Workshops/Assiston.jpg";
import AndroidCampusFestImage from "/public/images/Workshops/Android Campus Fest.jpg";
import ElectronicVehicleWorkshop from "/public/images/Workshops/ElectricVehicle.jpeg";
import IndustrialAutomation from "/public/images/Workshops/industrialAutomation.jpeg";

const Workshops = () => {
  return (
    <>
      <Head>
        <title>Workshops | Tekwiza 2022</title>
      </Head>
      <div className="h-max overflow-hidden z-20 bg-black Workshops">
        <Navbar />
        <PageHeader title={"TekWiza Workshops"} />
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
          <EventCard
            name={"Assiston"}
            image={AssistonImage}
            link={"/workshops/assiston"}
          />
          <EventCard
            name={"Bio-Entrepreneurship"}
            image={bioEnterpreneurshipImage}
            link={"/workshops/bio-entrepreneurship"}
          />
          <EventCard
            name={"Electric Vehicle Workshop"}
            image={ElectronicVehicleWorkshop}
            link={"/workshops/ev-workshop"}
          />
          <EventCard name={"IBot"} image={IbotImage} link={"/workshops/ibot"} />
          <EventCard
            name={"Industrial Automation"}
            image={IndustrialAutomation}
            link={"/workshops/industrial-automation"}
          />
          <EventCard name={"Sketchwiz"} image={sketchWizImage} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Workshops;
