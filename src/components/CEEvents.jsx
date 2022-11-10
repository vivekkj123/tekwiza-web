import React from "react";
import EventCard from "./EventCard";
import comingSoon from "../../public/images/Events/coming-soon.jpg";
import EventSeperator from "./EventSeperator";
import ClueMinatiImage from '../../public/images/Events/clueminati.jpeg'
import NeonFootballImage from '../../public/images/Events/neon-football.jpeg'

const CEEvents = () => {
  return (
    <>
      <EventSeperator Header={"Civil Events"} />
      <div className="EventGallery grid grid-cols-1 lg:grid-cols-3 py-5 place-items-center lg:px-10">
        <EventCard
          name={"Build it High!"}
          image={comingSoon}
          link={"/events/build-it-high"}
        />
        <EventCard
          name={"CAD Mania"}
          image={comingSoon}
          link={"/events/cad-mania"}
        />
        <EventCard
          name={"Clueminati"}
          image={ClueMinatiImage}
          link={"/events/clueminati"}

        />
        <EventCard
          name={"Neon Football"}
          image={NeonFootballImage}
          link={"/events/neon-football"}
        />
      </div>
    </>
  );
};

export default CEEvents;
