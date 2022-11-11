import React from "react";
import Navbar from "../src/components/Navbar";
import Head from "next/head";
import PageHeader from "../src/components/PageHeader";

import BTWorkshops from "../src/components/BTWorkshops";
import CSEWorkshops from "../src/components/CSEWorkshops";
import CEWorkshops from "../src/components/CEWorkshops";
import ECEWorkshops from "../src/components/ECEWorkshops";
import Footer from "../src/components/Footer";

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
        <CSEWorkshops />
        <ECEWorkshops />
        <Footer />

      </div>
    </>
  );
};

export default Workshops;
