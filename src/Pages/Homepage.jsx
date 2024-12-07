import React from "react";
import Hero from "../components/Homepage/Hero";
import Explore from "../components/Homepage/Explore";
import Connected from "../components/Homepage/Connected";
import ExploreMobile from "../components/Homepage/ExploreMobile";
import HeroMobile from "../components/Homepage/HeroMobile";

const Homepage = () => {
  return (
    <div>
      <div className="block lg:hidden">
        <HeroMobile />
      </div>
      <div className="hidden lg:block">
        <Hero />
      </div>
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
