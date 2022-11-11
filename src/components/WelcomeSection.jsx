import { faCalendarAlt, faDirections } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
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
        <h3>
          Tekwiza provides young people with a platform for leveraging their
          technical expertise. Moreover, it helps in encouraging young minds to
          explore, learn and upskill themselves through a variety of workshops
          and interactive events in different engineering fields.
        </h3>
        <br />
        <Link
          className="hover:underline pink decoration-purple-600 underline-offset-4 "
          href={"https://g.page/SahrdayaCET?share"}
        >
          <h3>
            <FontAwesomeIcon icon={faDirections} /> Get Directions
          </h3>
        </Link>
        <h3>
          <FontAwesomeIcon icon={faCalendarAlt} /> December 2-3, 2022
        </h3>
      </div>
    </div>
  );
};

export default WelcomeSection;
