import Image from "next/image";
import React from "react";
import posterImage from '../../public/images/poster.png'

const WhatYouCanExpect = () => {
  return (
    <div className="px-2 lg:px-10 WhatYouCanExpect items-center my-5 grid grid-cols-1 lg:grid-cols-2">
      
      <div className=" bg-slate-900 bg-opacity-30 py-5 rounded-lg px-5">
        <h1 className="text-3xl text-center">What You Can Expect?</h1>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          unde perspiciatis iusto iste, ab voluptates nulla accusantium tenetur
          natus vero mollitia beatae at, maiores, blanditiis laboriosam esse
          cupiditate commodi aut!
        </h3>
      </div>
      <Image className="mx-auto h-80 w-auto" src={posterImage} />
    </div>
  );
};

export default WhatYouCanExpect;
