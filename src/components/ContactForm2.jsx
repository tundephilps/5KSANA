import React from "react";
import Bit1 from "../assets/Bit1.png";

import Bit2 from "../assets/Bit2.png";
import Bit3 from "../assets/Bit3.png";
import { CiMail } from "react-icons/ci";
import { FiSend } from "react-icons/fi";

const ContactForm2 = () => {
  return (
    <div className="bg-[#1a1a1a]/60 text-white lg:p-4 p-2 rounded-2xl relative ">
      <div className=" px-4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            LET'S STAY
            <br className="lg:hidden flex " /> CONNECTED
          </h2>
          <p className="text-gray-400 mb-4">
            Have a question or looking? Reach out the form, and I'll respond as
            soon as possible.
          </p>
          <p className="text-white underline font-semibold inline-flex items-center gap-2">
            <CiMail className="text-2xl" /> info@5ksana.art
          </p>
        </div>

        {/* Right Section (Form) */}
        <div>
          <form className="gap-4 grid lg:grid-cols-2 grid-cols-1">
            {/* Name and Email Fields */}
            <div className="grid grid-cols-1  gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-[#212121] text-white px-4 py-2 rounded-3xl focus:outline-none focus:ring focus:ring-yellow-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-[#212121] text-white px-4 py-2 rounded-3xl focus:outline-none focus:ring focus:ring-yellow-500"
              />
            </div>

            {/* Message Field */}
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full bg-[#212121] text-white px-4 py-2 rounded-3xl focus:outline-none focus:ring focus:ring-yellow-500"
            ></textarea>

            {/* Send Button */}
          </form>
          <div className="flex lg:flex-row flex-col  pt-4 justify-between">
            <div className="flex items-start ">
              <input
                type="checkbox"
                id="privacy"
                className="mt-1 h-4 w-4 text-yellow-500 bg-gray-800 border-gray-600 rounded focus:ring-yellow-500 focus:ring-offset-black"
              />
              <label
                htmlFor="privacy"
                className="ml-2 text-gray-400 lg:whitespace-nowrap whitespace-normal"
              >
                I have read and agree with the privacy policy
              </label>
            </div>
            <button
              type="submit"
              className="mt-8 flex items-center justify-center ml-0  bg-[#fcc800] text-black lg:w-[108px] w-full px-6 py-1 rounded-3xl font-bold hover:bg-yellow-600"
            >
              Send
              <span className="ml-2 text-lg p-2 bg-white rounded-full">
                <FiSend />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm2;
