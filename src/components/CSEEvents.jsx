import React from "react";
import EventCard from "./EventCard";
import tekothon from "../../public/images/Events/tekothon.png";
import zypher from "../../public/images/Events/Zypher.png";
import arcade from "../../public/images/Events/CSArcade.png";
import tomorrowLand from "../../public/images/Events/TomorrowLand.png";
import EventSeperator from "./EventSeperator";

const CSEEvents = () => {
  return (
    <>
      <EventSeperator Header={"CSE Events"} />
      <div className="EventGallery grid grid-cols-1 lg:grid-cols-3 py-5 place-items-center lg:px-10">
        <EventCard
          name={"Tek-O-Thon"}
          image={tekothon}
          link={"https://tekothon.in/home"}
        />
        <EventCard
          name={"Zypher"}
          image={zypher}
          link={"/events/zypher"}
        />
        <EventCard
          name={"TomorrowLand"}
          image={tomorrowLand}
          link={"/events/tomorrow-land"}
        />
        <EventCard
          name={"Arcade"}
          image={arcade}
          link={"/events/arcade"}
        />
      </div>
    </>
  );
};

export default CSEEvents;
