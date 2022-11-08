import React from "react";
import Navbar from "../src/components/Navbar";
import EventSeperator from "../src/components/EventSeperator";
import Head from "next/head";
import PageHeader from "../src/components/PageHeader";
import CSEEvents from "../src/components/CSEEvents";

const Events = () => {
  return (
    <>
      <Head>
        <title>Events | Tekwiza 2022</title>
      </Head>
      <div className="h-max overflow-hidden z-20 bg-black Events">
        <Navbar />
        <PageHeader title={"TekWiza Events"} />
        <EventSeperator Header={"CSE Events"} />
        <CSEEvents />
      </div>
    </>
  );
};

export default Events;
