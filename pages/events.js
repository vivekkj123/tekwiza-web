import Image from "next/image";
import React from "react";
import Navbar from "../src/components/Navbar";
import eventImage from "../public/images/Events/demo.jpg";
import tekothon from '../public/images/Events/tekothon.png'

const Events = () => {
  return (
    <div className="h-max overflow-hidden z-20 bg-black Events">
      <Navbar />
      <div className="h-30 py-6 border-slate-700 border-2 flex text-4xl items-center px-20">
        <h2>
          Tekwiza <br /> Events
        </h2>
      </div>
        <div className="DeptSeperator w-screen text-2xl mx-20 mt-12 border-b-2  border-b-gray-800">
          <h2>CSE Events</h2>
        </div>
      <div className="EventGallery grid grid-cols-3 py-5 px-10">
        <div className="event my-5 mx-20 border-2 pt-2 flex flex-col justify-center w-40 h-auto border-gray-400">
          <Image className="" src={tekothon} />
          <h2 className="text-2xl mx-4">Tek-O-Thon</h2>
          <div className="bg-white px-4 py-2 mt-3 text-black">
            <h4 className="text-sm">Learn More...</h4>
          </div>
        </div>
        </div>
        {/* <div className="DeptSeperator w-screen text-2xl mx-20 mt-12 border-b-2  border-b-gray-800">
          <h2>Civil Engineering Events</h2>
        </div>
      <div className="EventGallery grid grid-cols-3 py-5 px-10">
        <div className="event my-5 mx-20 border-2 pt-2 flex flex-col justify-center w-40 h-auto border-gray-400">
          <Image className="" src={eventImage} />
          <h2 className="text-2xl mx-4">Demo Event</h2>
          <div className="bg-white px-4 py-2 mt-3 text-black">
            <h4 className="text-sm">Learn More...</h4>
          </div>
        </div></div> */}
        
        
        {/* <div className="event my-5 mx-20 border-2 p-10 w-40 h-44 border-gray-400">
          <Image className="h-28 w-auto" src={eventImage} />
        </div>
        <div className="event my-5 mx-20 border-2 p-10 w-40 h-44 border-gray-400">
          <Image className="h-28 w-auto" src={eventImage} />
        </div>
        <div className="event my-5 mx-20 border-2 p-10 w-40 h-44 border-gray-400">
          <Image className="h-28 w-auto" src={eventImage} />
        </div> */}
        {/* <div className="event m-20">Event 1</div>
        <div className="event m-20">Event 1</div>
        <div className="event m-20">Event 1</div>
        <div className="event m-20">Event 1</div>
        <div className="event m-20">Event 1</div>
        <div className="event m-20">Event 1</div> */}
      {/* </div> */}
    </div>
  );
};

export default Events;
