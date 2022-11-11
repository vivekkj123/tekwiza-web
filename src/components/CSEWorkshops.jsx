import React from "react";
import EventCard from "./EventCard";
import EventSeperator from "./EventSeperator";
import toogleImage from '../../public/images/Workshops/toogle-workshop.JPG'

const ECEWorkshops = () => {
  return (
    <>
      <EventSeperator Header={"CSE Workshops"} />
      <div className="EventGallery grid grid-cols-1 lg:grid-cols-3 py-5 place-items-center lg:px-10">
        <EventCard
          name={"Advanced Python and Automation"}
          image={toogleImage}
          link={"/workshops/toogle"}

        />
      </div>
    </>
  );
};

export default ECEWorkshops;
