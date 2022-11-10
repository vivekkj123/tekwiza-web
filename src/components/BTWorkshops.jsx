import React from "react";
import EventCard from "./EventCard";
import EventSeperator from "./EventSeperator";
import bioEnterpreneurshipImage from '../../public/images/Workshops/Bio-Entrepreneurship Workshop.png'

const BTWorkshops = () => {
  return (
    <>
      <EventSeperator Header={"Biotechnology Workshops"} />
      <div className="EventGallery grid grid-cols-1 lg:grid-cols-3 py-5 place-items-center lg:px-10">
        <EventCard
          name={"Bio-Entrepreneurship"}
          image={bioEnterpreneurshipImage}
          link={"/workshops/bio-entrepreneurship"}

        />
      </div>
    </>
  );
};

export default BTWorkshops;
