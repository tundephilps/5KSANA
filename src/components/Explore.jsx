import React from "react";
import Frame from "../assets/Frame.png";

const Explore = () => {
  return (
    <div className="bg-black relative">
      {/* Background Image */}
      <img src={Frame} className="h-screen w-full object-cover" alt="Frame" />

      {/* Centered Text */}
      <div className="absolute font-sansation inset-0 flex flex-col items-center justify-center">
        <h1
          className="text-white  text-5xl md:text-9xl font-bold text-center"
          data-aos="zoom-in-up"
        >
          EXPLORE THE
        </h1>

        {/* <br data-aos="fade-down" /> */}
        <p
          className="text-white text-5xl md:text-9xl font-bold text-center"
          data-aos="fade-down"
        >
          {" "}
          COLLECTION
        </p>
      </div>
    </div>
  );
};

export default Explore;
