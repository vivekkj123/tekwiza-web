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
import BTWorkshops from "../src/components/BTWorkshops";
import CEWorkshops from "../src/components/CEWorkshops";
import ECEWorkshops from "../src/components/ECEWorkshops";

const Workshops = () => {
  return (
    <>
      <Head>
        <title>Workshops | Tekwiza 2022</title>
      </Head>
      <div className="h-max overflow-hidden z-20 bg-black Workshops">
        <Navbar />
        <PageHeader title={"TekWiza Workshops"} />
        <BTWorkshops />
        <CEWorkshops />
        <ECEWorkshops />
      </div>
    </>
  );
};

export default Workshops;
