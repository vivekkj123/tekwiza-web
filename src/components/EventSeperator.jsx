import React from "react";

const EventSeperator = ({ Header }) => {
  return (
    <div className="w-full DeptSeperator  text-2xl mx-5 lg:mx-20 mt-3 lg:mt-12 border-b-2  border-b-gray-900">
      <h2 className="w-3/4">{Header}</h2>
    </div>
  );
};

export default EventSeperator;
