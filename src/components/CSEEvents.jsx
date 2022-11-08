import React from "react";
import EventCard from "./EventCard";
import tekothon from "../../public/images/Events/tekothon.png";

const CSEEvents = () => {
  return (
    <div className="EventGallery grid grid-cols-1 lg:grid-cols-3 py-5 place-items-center lg:px-10">
      <EventCard
        name={"Tek-O-Thon"}
        image={tekothon}
        link={"https://tekothon.in/home"}
      />
    </div>
  );
};

export default CSEEvents;
