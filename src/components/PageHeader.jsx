import React from "react";

const PageHeader = ({ title }) => {
  return (
    <div className="h-30 py-2 lg:py-6 border-gray-900 border-2 text-2xl lg:text-4xl items-center px-4 lg:px-20">
      {title.split(" ").map((t) => (
        <>
          <h2 key={t}>{t}</h2>
        </>
      ))}
    </div>
  );
};

export default PageHeader;
