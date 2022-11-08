import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Navbar from "../src/components/Navbar";
import PageHeader from "../src/components/PageHeader";

const ContactUS = () => {
  return (
    <div className="bg-black h-full overflow-hidden">
      <Navbar />
      <PageHeader title={"Contact Us"}/>
      <div className="grid lg:grid-cols-2 p-3 lg:p-10">
        <div >
          <h3 className="my-8"><FontAwesomeIcon className="mx-2 lg:mx-10" icon={faEnvelope}/>tekwiza@sahrdaya.ac.in</h3>
          <h3><FontAwesomeIcon className="mx-2 lg:mx-10" icon={faPhone}/>ph: +91 123 456 7890</h3>
        </div>
        <div className="flex flex-col my-6 lg:my-0">
          <label htmlFor="name">Name:</label>
          <input required className="text-black px-3" type="text" name="name" />
          <label htmlFor="email">Email:</label>
          <input required className="text-black px-3" type="text" name="email" />
          <label htmlFor="Message">Message:</label>
          <textarea required className="text-black px-3" type="text" name="name" />
            <div role={'button'} className="text-center w-36 text-xs my-6 py-2 mx-auto button bg-white text-black">
             Send
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
