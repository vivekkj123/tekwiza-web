import React from "react";
import EventCard from "./EventCard";
import comingSoon from "../../public/images/Events/coming-soon.jpg";
import EventSeperator from "./EventSeperator";

const CEEvents = () => {
  return (
    <>
      <EventSeperator Header={"Civil Events"} />
      <div className="EventGallery grid grid-cols-1 lg:grid-cols-3 py-5 place-items-center lg:px-10">
        <EventCard
          name={"Coming Soon"}
          image={comingSoon}
        //   link={"https://tekothon.in/home"}
        />
      </div>
    </>
  );
};

export default CEEvents;
