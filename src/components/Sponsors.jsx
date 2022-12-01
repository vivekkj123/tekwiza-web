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
import panthalookaran from "../../public/images/sponsors/panthallookaran.png";
import polygon from "../../public/images/sponsors/Polygon.png";
import replit from "../../public/images/sponsors/replit.png";
import SilpiJewellers from "../../public/images/sponsors/SilpiJewellers.png";
import Solana from "../../public/images/sponsors/solana.png";
import unityTiles from "../../public/images/sponsors/unityTiles.png";
import WaterWorld from "../../public/images/sponsors/WaterWorld.png";
import Wellfit from "../../public/images/sponsors/Wellfit.png";
import WoodenPerk from "../../public/images/sponsors/Woodenperk.png";
// import surabhi from "../../public/images/sponsors/surabhi.jpg";
import AndroidEducators from "../../public/images/sponsors/android-educators.png";
import GoogleColab from "../../public/images/sponsors/colab.png";
import CSBBank from "../../public/images/sponsors/CSB_Bank.png";
import divineComputer from "../../public/images/sponsors/divine.png";
import expertzLab from "../../public/images/sponsors/expertzLab.webp";
import Fluke from "../../public/images/sponsors/Fluke.png";
import GlobalStudy from "../../public/images/sponsors/Global_Study.png";
import GraceAcademy from "../../public/images/sponsors/Grace_Academy.png";
import Hykon from "../../public/images/sponsors/hykon.jpeg";
import iedcSahrdaya from "../../public/images/sponsors/iedc-scet.png";
import IEDC from "../../public/images/sponsors/IEDC.png";
import IPCS from "../../public/images/sponsors/ipcs.png";
import IPLiedc from "../../public/images/sponsors/IPL-IEDC.png";
import JBEdufly from "../../public/images/sponsors/JB_Edufly.jpg";
import Maxvalue from "../../public/images/sponsors/maxvalue.jpeg";
import NirmalaStudy from "../../public/images/sponsors/Nirmala_Study.png";
import Oxygen from "../../public/images/sponsors/oxygen.svg";
import Peeyar from "../../public/images/sponsors/peeyar.jpeg";
import primeDecor from "../../public/images/sponsors/primeDecor.png";
import Progressum from "../../public/images/sponsors/progressum.png";
import RedTeam from "../../public/images/sponsors/redteam.jpg";
import sidbi from "../../public/images/sponsors/sidbi.png";
import SuriaHomes from "../../public/images/sponsors/suriaHomes.webp";
import TbiGecT from "../../public/images/sponsors/TBI-GECT.jpeg";
import TCS from "../../public/images/sponsors/tcs.webp";
import WebandCrafts from "../../public/images/sponsors/webandcrafts.jpg";
import WhiteRabbit from "../../public/images/sponsors/WhiteRabbit.png";
import clubfmLogo from "../../public/images/sponsors/media-partner.png";

const Sponsors = () => {
  return (
    <>
      <div className="Sponsors mb-5 pt-5  pb-10 bg-black rounded-xl bg-opacity-30 grid md:grid-cols-2 lg:px-16 mx-3 lg:mx-20">
        <div>

        <h1 className="text-center text-3xl">Main Sponsor</h1>
          {/* flex lg:flex-row flex-col flex-wrap */}
          <Link href={""}>
            <ExportedImage
              alt="Panthalookaran Home Depot"
              className=" hover:bg-black mx-auto p-2 hover:bg-opacity-40 rounded-xl w-24 m-4 h-auto"
              src={panthalookaran}
            />
          </Link>
              </div>
              <div>
        <h1 className="text-center text-3xl">Media Partner</h1>
          {/* flex lg:flex-row flex-col flex-wrap */}
          <Link
          href={"https://www.clubfm.in/"}
        >
          <ExportedImage
            alt="ClubFM thrissur 104.8"
            className="hover:bg-black mx-auto p-2 hover:bg-opacity-40 rounded-xl w-24 m-4 h-auto"
            src={clubfmLogo}
          />
        </Link>
              </div>
      </div>
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
              className="bg-white p-2 hover:bg-opacity-40 rounded-xl w-24 m-4 h-auto"
              src={JoysRestaurent}
            />
          </Link>
          <Link href={"https://gracoustics.com/"}>
            <ExportedImage
              alt="GR Acoustics"
              className=" bg-white p-2 hover:bg-opacity-40 rounded-xl w-24 m-4 h-auto"
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
          
          {/* <Link href={""}>
          <ExportedImage
            alt="Surabhi Home"
            className=" hover:bg-black p-2 hover:bg-opacity-40 rounded-xl w-24 m-4 h-auto"
            src={surabhi}
          />
        </Link> */}
          <Link href={"https://colab.research.google.com/"}>
            <ExportedImage
              alt="Google Colab"
              className=" hover:bg-black p-2 hover:bg-opacity-40 rounded-xl w-24 m-4 h-auto"
              src={GoogleColab}
            />
          </Link>
          <Link href={"https://www.tcs.com/"}>
            <ExportedImage
              alt="TCS"
              className=" hover:bg-black p-2 hover:bg-opacity-40 rounded-xl w-24 m-4 h-auto"
              src={TCS}
            />
          </Link>
          <Link href={"https://whiterabbit.group/"}>
            <ExportedImage
              alt="White Rabbit"
              className=" hover:bg-black p-2 hover:bg-opacity-40 rounded-xl w-24 m-4 h-auto"
              src={WhiteRabbit}
            />
          </Link>
          <Link href={"https://webandcrafts.com/"}>
            <ExportedImage
              alt="Web and Crafts"
              className=" hover:bg-black p-2 hover:bg-opacity-40 rounded-xl w-24 m-4 h-auto"
              src={WebandCrafts}
            />
          </Link>
          <Link href={"https://redteamacademy.com/"}>
            <ExportedImage
              alt="Red Team Hacker Academy"
              className=" hover:bg-black p-2 hover:bg-opacity-40 rounded-xl w-24 m-4 h-auto"
              src={RedTeam}
            />
          </Link>
          <Link href={"http://www.primedecor.in/"}>
            <ExportedImage
              alt="Prime Decor"
              className="bg-white p-2 hover:bg-opacity-40 rounded-xl w-24 m-4 h-auto"
              src={primeDecor}
            />
          </Link>
          <Link href={"https://www.sidbi.in/en"}>
            <ExportedImage
              alt="SIDBI"
              className="bg-white p-2 hover:bg-opacity-40 rounded-xl w-24 m-4 h-auto"
              src={sidbi}
            />
          </Link>
          <Link href={"https://iedcsahrdaya.co.in/"}>
            <ExportedImage
              alt="IEDC Sahrdaya"
              className="bg-white p-2 hover:bg-opacity-40 rounded-xl w-24 m-4 h-auto"
              src={iedcSahrdaya}
            />
          </Link>
          <Link href={"https://www.expertzlab.com/"}>
            <ExportedImage
              alt="Expertz Lab"
              className="bg-white p-2 hover:bg-opacity-40 rounded-xl w-24 m-4 h-auto"
              src={expertzLab}
            />
          </Link>
          <Link href={""}>
            <ExportedImage
              alt="Divine Computer shop"
              className="bg-white p-2 hover:bg-opacity-40 rounded-xl w-24 m-4 h-auto"
              src={divineComputer}
            />
          </Link>
          <Link href={"https://www.oxygendigitalshop.com/"}>
            <ExportedImage
              alt="Oxygen Digital Shop"
              className="hover:bg-black p-2 hover:bg-opacity-40 rounded-xl w-24 m-4 h-auto"
              src={Oxygen}
            />
          </Link>
          <Link href={"https://suriahomes.com/"}>
            <ExportedImage
              alt="Suria Homes"
              className="hover:bg-black p-2 hover:bg-opacity-40 rounded-xl w-24 m-4 h-auto"
              src={SuriaHomes}
            />
          </Link>
          <Link href={"https://iedc.startupmission.in/"}>
            <ExportedImage
              alt="IEDC"
              className="hover:bg-black p-2 hover:bg-opacity-40 rounded-xl w-24 m-4 h-auto"
              src={IEDC}
            />
          </Link>
          <Link href={"https://developer.android.com/teach"}>
            <ExportedImage
              alt="Android Educators"
              className="hover:bg-black p-2 hover:bg-opacity-40 rounded-xl w-24 m-4 h-auto"
              src={AndroidEducators}
            />
          </Link>
          <Link href={"https://gectcr.ac.in/links/tbi/"}>
            <ExportedImage
              alt="TBI GEC Thrissur"
              className="hover:bg-black p-2 hover:bg-opacity-40 rounded-xl w-24 m-4 h-auto"
              src={TbiGecT}
            />
          </Link>
          <Link href={"https://ipl.startupmission.in/"}>
            <ExportedImage
              alt="Innovation Premier League - IEDC"
              className="hover:bg-black p-2 hover:bg-opacity-40 rounded-xl w-24 m-4 h-auto"
              src={IPLiedc}
            />
          </Link>
          <Link href={"https://www.instagram.com/peeyar_exporters"}>
            <ExportedImage
              alt="Peeyar"
              className=" hover:bg-black p-2 hover:bg-opacity-40 rounded-xl w-24 m-4 h-auto"
              src={Peeyar}
            />
          </Link>
          <Link href={"https://maxvaluecredits.com/"}>
            <ExportedImage
              alt="Max Value"
              className=" hover:bg-black p-2 hover:bg-opacity-40 rounded-xl w-28 m-4 h-auto"
              src={Maxvalue}
            />
          </Link>
          <Link href={"https://ipcsautomation.com/"}>
            <ExportedImage
              alt="IPCS"
              className=" hover:bg-black p-2 hover:bg-opacity-40 rounded-xl w-24 m-4 h-auto"
              src={IPCS}
            />
          </Link>
          <Link href={"https://www.hykonindia.com/"}>
            <ExportedImage
              alt="Hykon"
              className=" hover:bg-black p-2 hover:bg-opacity-40 rounded-xl w-24 m-4 h-auto"
              src={Hykon}
            />
          </Link>
          <Link href={"https://progressum.in/"}>
            <ExportedImage
              alt="Progressum"
              className="bg-white p-2 hover:bg-opacity-40 rounded-xl w-24 m-4 h-auto"
              src={Progressum}
            />
          </Link>
          <Link href={"https://www.csb.co.in/"}>
            <ExportedImage
              alt="CSB Bank"
              className=" bg-white  p-2 hover:bg-opacity-40 rounded-xl w-24 m-4 h-auto"
              src={CSBBank}
            />
          </Link>
          <Link href={"https://nirmala-international-studies.business.site/"}>
            <ExportedImage
              alt="Nirmala Study Abroad"
              className=" bg-white p-2 hover:bg-opacity-40 rounded-xl w-24 m-4 h-auto"
              src={NirmalaStudy}
            />
          </Link>
          <Link href={"https://grace-academy.in/"}>
            <ExportedImage
              alt="Grace Academy"
              className=" bg-white p-2 hover:bg-opacity-40 rounded-xl w-24 m-4 h-auto"
              src={GraceAcademy}
            />
          </Link>
          <Link href={"https://jbedufly.com/"}>
            <ExportedImage
              alt="JB Edufly"
              className=" hover:bg-black p-2 hover:bg-opacity-40 rounded-xl w-24 m-4 h-auto"
              src={JBEdufly}
            />
          </Link>
          <Link href={"https://www.flukeindia.com/"}>
            <ExportedImage
              alt="Fluke"
              className=" hover:bg-black p-2 hover:bg-opacity-40 rounded-xl w-24 m-4 h-auto"
              src={Fluke}
            />
          </Link>
          <Link href={"https://www.globalstudylink.co.uk/"}>
            <ExportedImage
              alt="Global Study Link"
              className="bg-white p-2 hover:bg-opacity-40 rounded-xl w-24 m-4 h-auto"
              src={GlobalStudy}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sponsors;
