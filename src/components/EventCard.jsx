import Image from "next/image";
import Link from "next/link";
import React from "react";

const EventCard = ({name, image, link}) => {
  return (
    <div className="event rounded-lg my-5 lg:mx-20 border-2 pt-2 flex flex-col justify-center w-40 h-auto border-gray-400">
      <Image className="" src={image} />
      <h2 className="text-2xl mx-4">{name}</h2>
      <div className="bg-white rounded-b-lg px-4 py-2 mt-3 text-black">
        <Link href={link}>
          <h4 className="text-sm">Learn More...</h4>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
