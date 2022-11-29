import ExportedImage from "next-image-export-optimizer";

import Link from "next/link";
import React from "react";
// import JobinandJismy from "../../public/images/sponsors/JJ Final.png";
import Dstyle from "../../public/images/sponsors/DStyle.png";
import EverestJewellary from "../../public/images/sponsors/Everest Jewellery.png";
import WoodenPerk from "../../public/images/sponsors/Woodenperk.png";
import BillionBees from "../../public/images/sponsors/BillionBees.png";
import LeosGD from "../../public/images/sponsors/Leo's Gold & Diamonds.png";
import Konikkara from "../../public/images/sponsors/Konikkara.jpg";

const Sponsors = () => {
  return (
    <div className="Sponsors mb-5 pt-5  pb-10 bg-black rounded-xl bg-opacity-30 lg:px-16 mx-3 lg:mx-20">
      <h1 className="text-center text-3xl">Sponsors</h1>
      <div className="SponsorImages place-items-center grid grid-cols-1 lg:grid-cols-4">
        {/* flex lg:flex-row flex-col flex-wrap */}
        {/* <Link href={"https://www.jobinandjismi.com/"}>
          <ExportedImage alt="Jobin & Jismi" className="hover:bg-black p-2 hover:bg-opacity-40 rounded-xl h-10 m-4 w-auto" src={JobinandJismy} />
        </Link> */}
        <Link href={"https://www.dstyleinteriors.com/"}>
          <ExportedImage
            alt="D Style Interiors"
            className="hover:bg-black p-2 hover:bg-opacity-40 rounded-xl h-20 m-4 w-auto"
            src={Dstyle}
          />
        </Link>
        <Link href={"https://everestjewellers.in/"}>
          <ExportedImage
            alt="Everest Jewellary Manufactures"
            className="hover:bg-black p-2 hover:bg-opacity-40 rounded-xl h-20 m-4 w-auto"
            src={EverestJewellary}
          />
        </Link>
        <Link href={"http://woodenperk.com/"}>
          <ExportedImage
            alt="Wooden Perk"
            className="hover:bg-black p-2 hover:bg-opacity-40 rounded-xl h-20 m-4 w-auto"
            src={WoodenPerk}
          />
        </Link>
        <Link href={""}>
          <ExportedImage
            alt="Billion Bees International Pvt. Ltd."
            className="hover:bg-black p-2 hover:bg-opacity-40 rounded-xl h-14 m-4 w-auto"
            src={BillionBees}
          />
        </Link>
        <Link href={"https://www.instagram.com/leosgoldanddiamonds"}>
          <ExportedImage
            alt="Leo's Gold and Diamonds"
            className="hover:bg-black p-2 hover:bg-opacity-40 rounded-xl h-20 m-4 w-auto"
            src={LeosGD}
          />
        </Link>
        <Link href={"https://www.instagram.com/konikkara_gold_diamonds"}>
          <ExportedImage
            alt="Konikkara Gold & Diamonds"
            className="hover:bg-black p-2 hover:bg-opacity-40 rounded-xl h-20 m-4 w-auto"
            src={Konikkara}
          />
        </Link>
      </div>
    </div>
  );
};

export default Sponsors;
