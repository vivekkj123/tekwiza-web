import ExportedImage from "next-image-export-optimizer";

import Link from "next/link";
import React from "react";
import JobinandJismy from "../../public/images/sponsors/JJ Final.png";

const Sponsors = () => {
  return (
    <div className="Sponsors mb-5 pt-5  pb-10 bg-black rounded-xl bg-opacity-30 lg:px-20 mx-3 lg:mx-20">
      <h1 className="text-center text-3xl">Sponsors</h1>
      <div className="flex lg:flex-row flex-col flex-wrap">
        <Link href={"https://www.jobinandjismi.com/"}>
          <ExportedImage alt="Jobin & Jismi" className="hover:bg-black p-2 hover:bg-opacity-40 rounded-xl h-10 m-4 w-auto" src={JobinandJismy} />
        </Link>
      </div>
    </div>
  );
};

export default Sponsors;
