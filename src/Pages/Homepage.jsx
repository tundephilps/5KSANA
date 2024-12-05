import React from "react";
import Hero from "../components/Hero";
import Explore from "../components/Explore";
import Connected from "../components/Connected";
import ExploreMobile from "../components/ExploreMobile";
import HeroMobile from "../components/HeroMobile";

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
