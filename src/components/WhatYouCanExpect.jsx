import ExportedImage from "next-image-export-optimizer";

import React from "react";
import posterImage from "../../public/images/poster.png";

const WhatYouCanExpect = () => {
  return (
    <div className=" text-sm px-2 lg:px-10 WhatYouCanExpect items-center my-5 grid grid-cols-1 lg:grid-cols-2">
      <div className=" bg-slate-900 bg-opacity-30 py-5 rounded-lg px-5">
        <h1 className="text-3xl text-center">What You Can Expect?</h1>
        <br />
        <h3>
          Over 25+ events and workshops covering 6 major engineering departments
          have been organized by our team with hours of hard work and
          dedication.
          <br />
          Visit our exhibitions on future technologies and immerse yourself in
          them. Explore the world of mystery and simulation games. Engage your
          brain with puzzles, mystery games, and treasure hunts. Thrill yourself
          with arcade games. Compete with others through roborace, robowar and
          hackathons.
          <br />
          <br />
          <b className="font-medium">
            “Discover your inner tekwizard at the Tech Fest with multiple
            dimensions and engineering domains!”
            <br /> Come and explore yourself !!!
          </b>
        </h3>
      </div>
      <ExportedImage
        className="mx-auto h-80 w-auto"
        alt="Tekwiza Poster"
        src={posterImage}
      />
    </div>
  );
};

export default WhatYouCanExpect;
