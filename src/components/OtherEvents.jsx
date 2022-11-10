import React from "react";
import EventCard from "./EventCard";
import EventSeperator from "./EventSeperator";
import posterpaperImage from '../../public/images/Events/paper-poster-02.jpeg'

const OtherEvents = () => {
  return (
    <>
      <EventSeperator Header={"Other Events"} />
      <div className="EventGallery grid grid-cols-1 lg:grid-cols-3 py-5 place-items-center lg:px-10">
        <EventCard
          name={"Poster / Paper Presentation"}
          image={posterpaperImage}
          link={"/poster-paper-presentation"}

        />
      </div>
    </>
  );
};

export default OtherEvents;
