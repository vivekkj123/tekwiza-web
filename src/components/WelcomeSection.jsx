import { faCalendarAlt, faDirections } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const WelcomeSection = () => {
  return (
    <div className="lg:px-10 gap-4 px-1 WelcomeSection items-center my-5 grid grid-cols-1 lg:grid-cols-2">
      <div className="flex h-40 w-auto justify-center">
        <video className=" rounded-lg" playsInline controlsList="nodownload noremoteplayback" controls src={require('../../public/videos/promo.mp4')}/>
      </div>
      <div className="text-sm mt-6 lg:mt-0 bg-slate-900 bg-opacity-30 py-5 rounded-lg px-5">
        <h1 className="text-3xl text-center">Welcome to TEKWIZA</h1>
        <br />
        <h3 className="font-display text-xs">
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
