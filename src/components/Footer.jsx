import React from "react";
import styles from "../../styles/Footer.module.css";
import TekWizaLogo from "../../public/images/tekwiza-logo-1.png";
import scetLogo from "../../public/images/scet-logo.png";
import clubfmLogo from "../../public/images/sponsors/media-partner.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";

const Footer = () => {
  return (
    <div className={`${styles.footer} text-sm`}>
      <div className="flex px-2 lg:px-16 lg:flex-row flex-col justify-around items-center py-8">
        <div className="logos flex flex-col justify-center items-center">
          <ExportedImage
            alt="Tekwiza Logo"
            src={TekWizaLogo}
            className="h-6 my-2 w-auto"
          />
          <p>In Association With</p>
          <Link href={"https://sahrdaya.ac.in"}>
            <ExportedImage
              alt="Sahrdaya Logo"
              className="brightness-0 my-2 h-6 w-auto invert"
              src={scetLogo}
            />
          </Link>
        </div>
        <Link
          href={"https://www.clubfm.in/"}
          className="mediaPartner flex flex-col items-center"
        >
          <h2>Media Partner</h2>
          <ExportedImage
            alt="ClubFM Logo - Media Partner Tekwiza"
            className="brightness-0 my-2 h-12 w-auto invert"
            src={clubfmLogo}
          />
        </Link>
        <div className="quickLinks">
          <h2 className="text-center text-lg lg:mt-0 mt-3">Quick Links</h2>
          <div className="grid mt-4 grid-cols-2 text-center">
            <div>
              <Link
                className="hover:underline pink decoration-purple-600 underline-offset-4 "
                href={"/events"}
              >
                <p>Events</p>
              </Link>
              <Link
                className="hover:underline pink decoration-purple-600 underline-offset-4 "
                href={"/workshops"}
              >
                <p>Workshops</p>
              </Link>
            </div>
            <div>
              <Link
                className="hover:underline pink decoration-purple-600 underline-offset-4 "
                href={"/contact-us"}
              >
                <p>Contact Us</p>
              </Link>
              <Link
                className="hover:underline pink decoration-purple-600 underline-offset-4 "
                href={"/the-team"}
              >
                <p>Meet the Team</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="GetTouch text-center ">
          <h2 className="mt-4 text-lg lg:mt-0">Get In Touch</h2>
          <Link
            className="hover:underline pink decoration-purple-600 underline-offset-4"
            href={"mailto:tekwiza@sahrdaya.ac.in"}
          >
            <h4>tekwiza@sahrdaya.ac.in</h4>
          </Link>
          <h2 className="text-lg">FOLLOW US</h2>
          <div className="socialMediaIcon mt-2">
            <Link
              href={"https://www.facebook.com/profile.php?id=100087384447381"}
            >
              <FontAwesomeIcon className="mr-2" icon={faFacebook} />
            </Link>
            <Link href={"https://www.instagram.com/tekwiza/"}>
              <FontAwesomeIcon className="mx-2" icon={faInstagram} />
            </Link>
            <Link href={"https://twitter.com/tekwiza"}>
              <FontAwesomeIcon className="mx-2" icon={faTwitter} />
            </Link>
            <Link href={"https://www.youtube.com/c/SahrdayaOfficialChannel"}>
              <FontAwesomeIcon className="mx-2" icon={faYoutube} />
            </Link>
          </div>
        </div>
      </div>
      <div className="copyRightPart text-center px-4">
        &copy; Developed and Maintained by{" "}
        <Link
          className="hover:underline pink decoration-purple-600 underline-offset-4"
          href={"https://sahrdaya.ac.in/cse/"}
        >
          Dept. of Computer Science and Engineering
        </Link>
        , SCET
      </div>
    </div>
  );
};

export default Footer;
