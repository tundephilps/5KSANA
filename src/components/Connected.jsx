import React from "react";
import Frame from "../assets/Frame2.png";
import ContactForm from "./ContactForm";

const Connected = () => {
  return (
    <div className="bg-black relative overflow-x-clip">
      {/* Background Image */}

      <img
        src={Frame}
        className="lg:h-full h-[160vh] w-full object-cover"
        alt="Frame"
      />

      {/* Centered Text */}

      <div className="absolute inset-0 flex items-center justify-center lg:px-32 px-8">
        <ContactForm />
      </div>
    </div>
  );
};

export default Connected;
