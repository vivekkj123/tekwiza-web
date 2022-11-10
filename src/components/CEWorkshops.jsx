import React from "react";
import EventCard from "./EventCard";
import EventSeperator from "./EventSeperator";
import comingSoon from '../../public/images/Events/coming-soon.jpg'
import sketchWizImage from '../../public/images/Workshops/sketchwiz.jpeg'

const CEWorkshops = () => {
  return (
    <>
      <EventSeperator Header={"Civil Workshops"} />
      <div className="EventGallery grid grid-cols-1 lg:grid-cols-3 py-5 place-items-center lg:px-10">
        <EventCard
          name={"Sketchwiz"}
          image={sketchWizImage}
        //   link={"/workshops/bio-entrepreneurship"}

        />
      </div>
    </>
  );
};

export default CEWorkshops;
