import React from "react";
import EventCard from "./EventCard";
import EventSeperator from "./EventSeperator";
import FiE from "../../public/images/Events/EV Expo[EEE Event 1].png";
import GladeGreever from "../../public/images/Events/The Glade[EEE Event 2].png";
import TechArcade from "../../public/images/Events/Tech arcade[ EEE subevent 1].png";
import Halo from "../../public/images/Events/Halo[ EEE Subevent 2 ].png";

const EEEEvents = () => {
  return (
    <>
      <EventSeperator Header={"Electrical & Electronics Events"} />
      <div className="EventGallery grid grid-cols-1 lg:grid-cols-3 py-5 place-items-center lg:px-10">
        <EventCard name={"FiE"} image={FiE} link={"/events/fie"} />
        <EventCard
          name={"Glade Greever"}
          image={GladeGreever}
          link={"/events/glade-greever"}
        />
        <EventCard
          name={"TechArcade"}
          image={TechArcade}
          link={"/events/tech-arcade"}
        />
        <EventCard name={"Halo"} image={Halo} link={"/events/halo"} />
      </div>
    </>
  );
};

export default EEEEvents;
