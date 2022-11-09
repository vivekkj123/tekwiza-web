import React from "react";
import EventCard from "./EventCard";
import comingSoon from "../../public/images/Events/coming-soon.jpg";
import EventSeperator from "./EventSeperator";

const EEEEvents = () => {
  return (
    <>
      <EventSeperator Header={"Electrical & Electronics Events"} />
      <div className="EventGallery grid grid-cols-1 lg:grid-cols-3 py-5 place-items-center lg:px-10">
        <EventCard
          name={"FiE"}
          image={comingSoon}
          //   link={"https://tekothon.in/home"}
        />
         <EventCard
          name={"Glade Greever"}
          image={comingSoon}
          //   link={"https://tekothon.in/home"}
        />
         <EventCard
          name={"TechArcade"}
          image={comingSoon}
          //   link={"https://tekothon.in/home"}
        />
        <EventCard
          name={"Halo"}
          image={comingSoon}
          //   link={"https://tekothon.in/home"}
        />
      </div>
    </>
  );
};

export default EEEEvents;
