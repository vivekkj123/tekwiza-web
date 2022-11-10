import React from "react";
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

const Events = () => {
  return (
    <>
      <Head>
        <title>Events | Tekwiza 2022</title>
      </Head>
      <div className="h-max overflow-hidden z-20 bg-black Events">
        <Navbar />
        <PageHeader title={"TekWiza Events"} />
        <BMEvents />
        <BTEvents />
        <CEEvents />
        <CSEEvents />
        <EEEEvents />
        <ECEEvents />
        <OtherEvents />
      </div>
    </>
  );
};

export default Events;
