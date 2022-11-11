import React , { useEffect }from "react";
import Navbar from "../src/components/Navbar";
import Head from "next/head";
import PageHeader from "../src/components/PageHeader";
import CSEEvents from "../src/components/CSEEvents";
import BTEvents from "../src/components/BTEvents";
import ECEEvents from "../src/components/ECEEvents";
import CEEvents from "../src/components/CEEvents";
import BMEvents from "../src/components/BMEvents";
import EEEEvents from "../src/components/EEEEvents";
import OtherEvents from "../src/components/OtherEvents";
import Aos from 'aos';
import 'aos/dist/aos.css';
import Footer from "../src/components/Footer";

const Events = () => {

    useEffect(()=> {
      Aos.init({duration: 600})
    },[]);
  return (
    <>
      <Head>
        <title>Events | Tekwiza 2022</title>
      </Head>
      <div className="h-max overflow-hidden z-20 bg-black Events">
        <Navbar />
        <PageHeader title={"TekWiza Events"} />
        <div >
          <BMEvents  />
        </div>
        <div data-aos="fade-down">
          <BTEvents />
        </div>
        <div data-aos="fade-down">
          <CEEvents />
        </div>
        <div data-aos="fade-down">
          <CSEEvents />
        </div>
        <div data-aos="fade-down">
          <EEEEvents />
        </div>
        <div data-aos="fade-down">
          <ECEEvents />
        </div>
        <div data-aos="fade-down">
          <OtherEvents />
        </div>
        <Footer />

      </div>
    </>
  );
};

export default Events;
