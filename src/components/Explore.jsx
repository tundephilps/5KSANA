import React from "react";
import Frame from "../assets/Frame.png";

const Explore = () => {
  return (
    <div className="bg-black relative">
      {/* Background Image */}
      <img src={Frame} className="h-screen w-full object-cover" alt="Frame" />

      {/* Centered Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-5xl md:text-9xl font-bold text-center">
          EXPLORE THE
          <br /> COLLECTION
        </h1>
      </div>
    </div>
  );
};

export default Explore;
