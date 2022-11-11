import React from "react";
import Navbar from "../src/components/Navbar";
import PageHeader from "../src/components/PageHeader";
import posterPaperImage from "../public/images/Events/poster_paper.jpg";
import Image from "next/image";
import Collapsible from "react-collapsible";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Footer from "../src/components/Footer";

const PosterPaperPresentation = () => {
  return (
    <div className="bg-black h-full overflow-hidden  ">
      <Navbar />
      <PageHeader title={"Poster/Paper Presentation"} />
      <div className="font-display text-xs px-2 lg:px-20">
        <div className="grid lg:grid-cols-2 py-5 ">
          <div className="py-5 Description font-thin leading-5 p-4">
            <p>
              We are glad to inform you that our College is organizing TEKWIZA –
              the annual Techfest on 2nd and 3rd December 2022 at the college
              campus.
            </p>
            <p>
              Applications for poster and paper presentations are invited from
              Faculty/Research scholars, Postgraduate and undergraduate students
              from the following streams –{" "}
              <span className="font-semibold">
                Biomedical Engineering, Biotechnology, Civil Engineering,
                Computer Science Engineering, Electronics and Communication
                Engineering and Electrical and Electronics Engineering.
              </span>
            </p>
            <br />

            <p>The winners will be awarded attractive cash prizes.</p>
            <br />

            <h4 className="font-extrabold">IMPORTANT DATES</h4>
            <ul className="list-disc">
              <li>Abstract submission opens – October 25th</li>
              <li>Abstract submission closes – November 15th</li>
              <li>Acceptance notification- November 19th</li>
              <li>Registration commences –November 23rd</li>
              <li>Registration closes – November 25th</li>
            </ul>
            <br />
            <p>
              Please use the guidelines in the template for submission of
              abstract and fill the form which will be made available in the
              page on 25th October to attach the abstracts.
            </p>
            <br />

            <p className="font-bold">
              Attractive prizes will be distributed for the best paper and
              poster awards. E-certificates will be distributed to all
              participants.
            </p>
          </div>
          <div className="Image flex justify-center place-items-center">
            <Image className=" lg:h-96 w-auto" src={posterPaperImage} />
          </div>
        </div>
        <Link href={"https://forms.gle/FYFL7Pps3t9W2NKi6"}>
          <div className="text-center rounded-lg mx-auto button w-40 lg:w-48 mb-3 font-mono bg-white text-black px-4 lg:px-10 py-3">
            Click here to submit abstract
          </div>
        </Link>
        <div>
          <Collapsible
            openedClassName="py-3 px-2 lg:px-5 border-white border-2"
            className=" px-5 border-white border-2"
            triggerWhenOpen={
              <div className="flex items-center p-2 gap-4">
                <FontAwesomeIcon icon={faCaretDown} />
                <p>Paper Presentation</p>
              </div>
            }
            trigger={
              <div className="flex items-center p-2 gap-4">
                <FontAwesomeIcon icon={faCaretRight} />
                <p>Paper Presentation</p>
              </div>
            }
          >
            <p>
              <br />

              <h4 className="font-semibold">
                CONFERENCE PARTICIPATION AND SUBMISSION OF ABSTRACTS
              </h4>
              <br />

              <p>
                Participation is open to undergraduates, postgraduates, Research
                scholars/faculty. Participants are invited to contribute papers
                to be presented as short oral (Research papers -No reviews) or
                posters (Research and Reviews) in the areas of Biomedical
                Engineering, Biotechnology, Civil Engineering, Computer Science
                Engineering, Electronics and Communication Engineering and
                Electrical and Electronics Engineering.
              </p>
              <br />

              <h4 className="font-semibold">
                Abstracts – Preparation and submission
              </h4>
              <br />

              <p>
                We invite you to submit the abstracts of original research works
                for presentation as short oral or poster. The abstract must be
                submitted by the Presenting author who will be informed about
                its acceptance after evaluation. While abstract submission does
                not require registration to the conference, presentation of
                paper at the conference requires that the presenting author must
                register for the conference by paying the applicable
                registration fee.
              </p>
              <br />
              <Link
                className="cursor-pointer text-violet-700"
                href={"/docs/Tekwiza-2022_Abstract-guideline.docx"}
              >
                <p>Click here to view the abstract Submission Guidelines</p>
              </Link>
            </p>
          </Collapsible>
          <Collapsible
            openedClassName="py-3  px-5 border-white border-2"
            className="my-10 px-5 border-white border-2"
            triggerWhenOpen={
              <div className="flex items-center p-2 gap-4">
                <FontAwesomeIcon icon={faCaretDown} />
                <p>Poster Presentation</p>
              </div>
            }
            trigger={
              <div className="flex items-center p-2 gap-4">
                <FontAwesomeIcon icon={faCaretRight} />
                <p>Poster Presentation</p>
              </div>
            }
          >
            <br />
            <h4 className="font-semibold">Preparation of posters</h4>
            <br />
            <p>
              The space available for each poster would be of 80 cm width and 60
              cm height. Each poster will be allocated a number, which will be
              marked on the top of the poster board by the organizers. The
              poster should indicate its title, authors (underline the name of
              the presenting author and include his/her email id) and their
              affiliations, followed by the Introduction/Background, Results,
              Conclusions and Acknowledgements (if any). The presenting authors
              should be present near their posters during the poster session.
              The poster schedule will be announced in advance.{" "}
            </p>
          </Collapsible>
        </div>
      </div>
      <Footer />

    </div>
  );
};

export default PosterPaperPresentation;
