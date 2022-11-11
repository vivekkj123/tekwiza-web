import React from "react";
import EventCard from "./EventCard";
import EventSeperator from "./EventSeperator";
import ClueMinatiImage from '../../public/images/Events/Clueminati.png'
import NeonFootballImage from '../../public/images/Events/Neon Football.png'
import BuildItHighImage from '../../public/images/Events/Build it High.png'
import CADManiaImage from '../../public/images/Events/CAD Mania.png'

const CEEvents = () => {
  return (
    <>
      <EventSeperator Header={"Civil Events"} />
      <div className="EventGallery grid grid-cols-1 lg:grid-cols-3 py-5 place-items-center lg:px-10">
        <EventCard
          name={"Build it High!"}
          image={BuildItHighImage}
          link={"/events/build-it-high"}
        />
        <EventCard
          name={"CAD Mania"}
          image={CADManiaImage}
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
