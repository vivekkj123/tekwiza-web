import React from "react";
import EventCard from "./EventCard";
import comingSoon from "../../public/images/Events/coming-soon.jpg";
import EventSeperator from "./EventSeperator";
import PipetteByNos from '../../public/images/Events/Pipette by Numbers.jpg'
import TurnInsideOut from '../../public/images/Events/Turn Inside Out.png'
import Scrios from '../../public/images/Events/SCRIOS.jpg'
import SnakeOMystery from '../../public/images/Events/Snake-O-Mystery.png'

const BTEvents = () => {
  return (
    <>
      <EventSeperator Header={"Biotechnology Events"} />
      <div className="EventGallery grid grid-cols-1 lg:grid-cols-3 py-5 place-items-center lg:px-10">
        <EventCard
          name={"Turn Inside Out"}
          image={TurnInsideOut}
          link={"/events/turn-inside-out"}

        />
        <EventCard
          name={"Snake-O-Mystery"}
          image={SnakeOMystery}
          link={"/events/snake-o-mystery"}

        />
         <EventCard
          name={"Pipette By Numbers"}
          image={PipetteByNos}
          link={"/events/pipette-by-numbers"}

        />
        <EventCard
          name={"SCRIOS"}
          image={Scrios}
          link={"/events/scrios"}
        />
      </div>
    </>
  );
};

export default BTEvents;
