import { faCalendarAlt, faDirections } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const WelcomeSection = () => {
  return (
    <div className="lg:px-10 px-1 WelcomeSection items-center my-5 grid grid-cols-1 lg:grid-cols-2">
      <div className="flex h-44 w-auto   justify-center">
        
        <iframe
          width="560"
          height="315"
        // className="w-40 h-auto"
          src="https://www.youtube-nocookie.com/embed/lNVsXntnCSY?controls=0&amp&mute=1&rel=0&loop=1&modestbranding=1;start=26"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="mt-6 lg:mt-0 bg-slate-900 bg-opacity-30 py-5 rounded-lg px-5">
        <h1 className="text-3xl text-center">Welcome to TEKWIZA</h1>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit unde perspiciatis iusto iste, ab voluptates nulla accusantium tenetur natus vero mollitia beatae at, maiores, blanditiis laboriosam esse cupiditate commodi aut!</h3>
        <h3><FontAwesomeIcon icon={faDirections} /> Directions</h3>
        <h3><FontAwesomeIcon icon={faCalendarAlt} /> December 2, 3 2022</h3>
      </div>
    </div>
  );
};

export default WelcomeSection;
