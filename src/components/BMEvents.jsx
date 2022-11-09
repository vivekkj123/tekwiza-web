import React from "react";
import EventCard from "./EventCard";
import EventSeperator from "./EventSeperator";
import codeBlue from "../../public/images/Events/Code Blue.png";
import mysterio from "../../public/images/Events/Mysterio.jpg";
import ojingo from "../../public/images/Events/Ojingo.png";
import salvatore from "../../public/images/Events/Salvadore.png";
import illusion from "../../public/images/Events/The Illusion.jpg";

const BMEvents = () => {
  return (
    <>
      <EventSeperator Header={"BioMedical Events"} />
      <div className="EventGallery grid grid-cols-1 lg:grid-cols-3 py-5 place-items-center lg:px-10">
        <EventCard
          name={"Code Blue"}
          image={codeBlue}
            link={"/events/code-blue"}
        />
        <EventCard
          name={"Mysterio"}
          image={mysterio}
            link={"/events/mysterio"}
        />
        <EventCard
          name={"Ojingo"}
          image={ojingo}
            link={"/events/ojingo"}
        />
        <EventCard
          name={"Salvatore"}
          image={salvatore}
          //   link={"https://tekothon.in/home"}
        />
        <EventCard
          name={"The Illusion"}
          image={illusion}
          //   link={"https://tekothon.in/home"}
        />
      </div>
    </>
  );
};

export default BMEvents;
