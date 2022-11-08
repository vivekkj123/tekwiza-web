import React from "react";
import EventCard from "./EventCard";
import comingSoon from "../../public/images/Events/coming-soon.jpg";
import EventSeperator from "./EventSeperator";

const BTEvents = () => {
  return (
    <>
      <EventSeperator Header={"Biotechnology Events"} />
      <div className="EventGallery grid grid-cols-1 lg:grid-cols-3 py-5 place-items-center lg:px-10">
        <EventCard
          name={"Turn Inside Out"}
          image={comingSoon}
        //   link={"https://tekothon.in/home"}
        />
         <EventCard
          name={"Pipette By Numbers"}
          image={comingSoon}
        //   link={"https://tekothon.in/home"}
        />
        <EventCard
          name={"SCRIOS"}
          image={comingSoon}
        //   link={"https://tekothon.in/home"}
        />
      </div>
    </>
  );
};

export default BTEvents;
