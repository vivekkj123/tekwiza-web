import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Footer from "../src/components/Footer";
import Navbar from "../src/components/Navbar";
import PageHeader from "../src/components/PageHeader";

const ContactUS = () => {
  return (
    <div className="bg-black h-full overflow-hidden">
      <Navbar />
      <PageHeader title={"Contact Us"} />
      <div className="grid lg:grid-cols-2 p-3 lg:p-10">
        <div>
          <h3 className="my-8">
            <FontAwesomeIcon className="mx-2 lg:mx-10" icon={faEnvelope} />
            tekwiza@sahrdaya.ac.in
          </h3>
          <div className="mx-2 lg:mx-10 flex">
            <FontAwesomeIcon icon={faPhone} />
            <div className="flex flex-col mx-2 lg:mx-10">
              <h3>Sreenesh M V</h3>
              <h3>ph: +91 94964 25438</h3>
            </div>
          </div>
        </div>
        <form
          action="https://submit-form.com/vfs77Kad"
          className="flex flex-col my-6 lg:my-0"
        >
          <label htmlFor="name">Name:</label>
          <input required className="text-black px-3" type="text" name="name" />
          <label htmlFor="email">Email:</label>
          <input
            required
            className="text-black px-3"
            type="text"
            name="email"
          />
          <label htmlFor="Message">Message:</label>
          <textarea
            required
            className="text-black px-3"
            type="text"
            name="message"
          />
          <button
            type={"submit"}
            className="text-center w-36 text-xs my-6 py-2 mx-auto button bg-white text-black"
          >
            Send
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUS;
