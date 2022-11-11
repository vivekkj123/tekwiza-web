import React from "react";
import EventCard from "./EventCard";
import EventSeperator from "./EventSeperator";
import IbotImage from '../../public/images/Workshops/IBot wrk.jpg'

const ECEWorkshops = () => {
  return (
    <>
      <EventSeperator Header={"Electronics & Communication Workshops"} />
      <div className="EventGallery grid grid-cols-1 lg:grid-cols-3 py-5 place-items-center lg:px-10">
        <EventCard
          name={"IBot"}
          image={IbotImage}
          link={"/workshops/ibot"}

        />
      </div>
    </>
  );
};

export default ECEWorkshops;
