import React from "react";
import Hero from "../components/Hero";
import Explore from "../components/Explore";
import Connected from "../components/Connected";
import ExploreMobile from "../components/ExploreMobile";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <div className="lg:block hidden">
        <Explore />
      </div>
      <div className="lg:hidden block">
        <ExploreMobile />
      </div>
      <Connected />
    </div>
  );
};

export default Homepage;
