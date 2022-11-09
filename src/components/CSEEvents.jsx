import React from "react";
import EventCard from "./EventCard";
import tekothon from "../../public/images/Events/tekothon.png";
import EventSeperator from "./EventSeperator";
import comingSoon from '../../public/images/Events/coming-soon.jpg'

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
          image={comingSoon}
          // link={"https://tekothon.in/home"}
        />
        <EventCard
          name={"TomorrowLand"}
          image={comingSoon}
          // link={"https://tekothon.in/home"}
        />
        <EventCard
          name={"Arcade"}
          image={comingSoon}
          // link={"https://tekothon.in/home"}
        />
      </div>
    </>
  );
};

export default CSEEvents;
