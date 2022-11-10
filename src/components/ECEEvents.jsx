git commit commit import React from "react";
import EventCard from "./EventCard";
import comingSoon from "../../public/images/Events/coming-soon.jpg";
import EventSeperator from "./EventSeperator";

const ECEEvents = () => {
  return (
    <>
      <EventSeperator Header={"Electronics & Communication Events"} />
      <div className="EventGallery grid grid-cols-1 lg:grid-cols-3 py-5 place-items-center lg:px-10">
        <EventCard
          name={"BotStrife"}
          image={comingSoon}
          link={'/events/bot-strife'}
        />
        <EventCard
          name={"Automaze"}
          image={comingSoon}
          link={'/events/automaze'}

        />
        <EventCard
          name={"Qark Fento"}
          image={comingSoon}
          link={'/events/qark-fento'}

        />
      </div>
    </>
  );
};

export default ECEEvents;
