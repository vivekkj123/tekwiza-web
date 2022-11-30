import ExportedImage from "next-image-export-optimizer";

import Link from "next/link";
import React from "react";
import Aissol from "../../public/images/sponsors/Aissol.png";
import BillionBees from "../../public/images/sponsors/BillionBees.png";
import BrightEnergy from "../../public/images/sponsors/BrightEnergy.png";
import DCJewellers from "../../public/images/sponsors/DCJewellers.png";
import Devfolio from "../../public/images/sponsors/devfolio.png";
import Dstyle from "../../public/images/sponsors/DStyle.png";
import EverestJewellary from "../../public/images/sponsors/Everest Jewellery.png";
import FileCoin from "../../public/images/sponsors/filecoin.png";
import FlorenceAcademy from "../../public/images/sponsors/florenceAcademy.png";
import GRAcoustics from "../../public/images/sponsors/GRAcoustics.png";
import IndotPhotoGifts from "../../public/images/sponsors/IndotPhotoGifts.png";
import JobinandJismy from "../../public/images/sponsors/JJ Final.png";
import JoysRestaurent from "../../public/images/sponsors/JoysRestaurent.png";
import KalyanSilks from "../../public/images/sponsors/kalyan.png";
import Konikkara from "../../public/images/sponsors/Konikkara.jpg";
import LeosGD from "../../public/images/sponsors/Leo's Gold & Diamonds.png";
import polygon from "../../public/images/sponsors/Polygon.png";
import replit from "../../public/images/sponsors/replit.png";
import SilpiJewellers from "../../public/images/sponsors/SilpiJewellers.png";
import Solana from "../../public/images/sponsors/solana.png";
import unityTiles from "../../public/images/sponsors/unityTiles.png";
import WaterWorld from "../../public/images/sponsors/WaterWorld.png";
import Wellfit from "../../public/images/sponsors/Wellfit.png";
import WoodenPerk from "../../public/images/sponsors/Woodenperk.png";

const Sponsors = () => {
  return (
    <div className="Sponsors mb-5 pt-5  pb-10 bg-black rounded-xl bg-opacity-30 lg:px-16 mx-3 lg:mx-20">
      <h1 className="text-center text-3xl">Sponsors</h1>
      <div className="SponsorImages place-items-center grid grid-cols-1 lg:grid-cols-4">
        {/* flex lg:flex-row flex-col flex-wrap */}
        <Link href={"https://www.jobinandjismi.com/"}>
          <ExportedImage
            alt="Jobin & Jismi"
            className="hover:bg-black p-2 hover:bg-opacity-40 rounded-xl w-24 m-4 h-auto"
            src={JobinandJismy}
          />
        </Link>
        <Link href={"https://www.dstyleinteriors.com/"}>
          <ExportedImage
            alt="D Style Interiors"
            className="hover:bg-black p-2 hover:bg-opacity-40 rounded-xl w-24 m-4 h-auto"
            src={Dstyle}
          />
        </Link>
        <Link href={"https://everestjewellers.in/"}>
          <ExportedImage
            alt="Everest Jewellary Manufactures"
            className=" bg-white p-2 hover:bg-opacity-40 rounded-xl w-24 m-4 h-auto"
            src={EverestJewellary}
          />
        </Link>
        <Link href={"http://woodenperk.com/"}>
          <ExportedImage
            alt="Wooden Perk"
            className="hover:bg-black p-2 hover:bg-opacity-40 rounded-xl w-24 m-4 h-auto"
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
            className=" bg-white  p-2 hover:bg-opacity-40 rounded-xl w-24 m-4 h-auto"
            src={LeosGD}
          />
        </Link>
        <Link href={"https://www.instagram.com/konikkara_gold_diamonds"}>
          <ExportedImage
            alt="Konikkara Gold & Diamonds"
            className="hover:bg-black p-2 hover:bg-opacity-40 rounded-xl w-24 m-4 h-auto"
            src={Konikkara}
          />
        </Link>
        <Link href={"https://dcjewellers.net/"}>
          <ExportedImage
            alt="DC Jewellers"
            className=" bg-white  p-2 hover:bg-opacity-40 rounded-xl w-24 m-4 h-auto"
            src={DCJewellers}
          />
        </Link>
        <Link href={"https://www.kalyansilks.com/"}>
          <ExportedImage
            alt="Kalyan Silks"
            className="hover:bg-black p-2 hover:bg-opacity-40 rounded-xl w-24 m-4 h-auto"
            src={KalyanSilks}
          />
        </Link>
        <Link href={""}>
          <ExportedImage
            alt="Silpi Jewellers"
            className="hover:bg-black p-2 hover:bg-opacity-40 rounded-xl w-24 m-4 h-auto"
            src={SilpiJewellers}
          />
        </Link>
        <Link href={""}>
          <ExportedImage
            alt="Bright Energy Solutions"
            className="hover:bg-black p-2 hover:bg-opacity-40 rounded-xl w-24 m-4 h-auto"
            src={BrightEnergy}
          />
        </Link>
        <Link href={"https://florenceacademy.in/"}>
          <ExportedImage
            alt="Florence Academy"
            className=" bg-white p-2 hover:bg-opacity-40 rounded-xl w-24 m-4 h-auto"
            src={FlorenceAcademy}
          />
        </Link>
        <Link href={"https://unitytiles.com/"}>
          <ExportedImage
            alt="Unity Tiles"
            className=" bg-white p-2 hover:bg-opacity-40 rounded-xl w-24 m-4 h-auto"
            src={unityTiles}
          />
        </Link>
        <Link href={"https://polygon.technology/"}>
          <ExportedImage
            alt="Polygon"
            className=" hover:bg-black p-2 hover:bg-opacity-40 rounded-xl w-24 m-4 h-auto"
            src={polygon}
          />
        </Link>
        <Link href={"https://replit.com/"}>
          <ExportedImage
            alt="Replit"
            className=" hover:bg-black p-2 hover:bg-opacity-40 rounded-xl w-24 m-4 h-auto"
            src={replit}
          />
        </Link>
        <Link href={""}>
          <ExportedImage
            alt="WaterWorld"
            className=" hover:bg-black p-2 hover:bg-opacity-40 rounded-xl w-24 m-4 h-auto"
            src={WaterWorld}
          />
        </Link>
        <Link href={"https://solana.com/"}>
          <ExportedImage
            alt="Solana"
            className=" hover:bg-black p-2 hover:bg-opacity-40 rounded-xl w-24 m-4 h-auto"
            src={Solana}
          />
        </Link>
        <Link href={"https://indotphotobook.com"}>
          <ExportedImage
            alt="Indot Photo Gifts"
            className=" hover:bg-black p-2 hover:bg-opacity-40 rounded-xl w-24 m-4 h-auto"
            src={IndotPhotoGifts}
          />
        </Link>
        <Link href={"https://www.wellfitworld.com/"}>
          <ExportedImage
            alt="Wellfit"
            className=" bg-white p-2 hover:bg-opacity-40 rounded-xl w-24 m-4 h-auto"
            src={Wellfit}
          />
        </Link>
        <Link href={"https://joysrestaurant.in/"}>
          <ExportedImage
            alt="Joys Restaurent"
            className=" hover:bg-black p-2 hover:bg-opacity-40 rounded-xl w-24 m-4 h-auto"
            src={JoysRestaurent}
          />
        </Link>
        <Link href={"https://gracoustics.com/"}>
          <ExportedImage
            alt="GR Acoustics"
            className=" hover:bg-black p-2 hover:bg-opacity-40 rounded-xl w-24 m-4 h-auto"
            src={GRAcoustics}
          />
        </Link>
        <Link href={"https://devfolio.co/"}>
          <ExportedImage
            alt="DevFolio"
            className=" hover:bg-black p-2 hover:bg-opacity-40 rounded-xl w-24 m-4 h-auto"
            src={Devfolio}
          />
        </Link>
        <Link href={"https://filecoin.io/"}>
          <ExportedImage
            alt="FileCoin"
            className=" hover:bg-black p-2 hover:bg-opacity-40 rounded-xl w-24 m-4 h-auto"
            src={FileCoin}
          />
        </Link>
        <Link href={"https://www.aissol.com/"}>
          <ExportedImage
            alt="Aissol"
            className=" hover:bg-black p-2 hover:bg-opacity-40 rounded-xl w-24 m-4 h-auto"
            src={Aissol}
          />
        </Link>
      </div>
    </div>
  );
};

export default Sponsors;
