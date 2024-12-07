import React from "react";
import Owner from "../assets/Owner.png";

import Cube1 from "../assets/Cube1.png";

import Cube2 from "../assets/Cube2.png";

import Cube3 from "../assets/Cube3.png";

import { FaTrophy } from "react-icons/fa";
import { Link } from "react-router-dom";
import Connected from "../components/Homepage/Connected";
import ContactForm2 from "../components/ContactForm2";

const About = () => {
  const exhibitions = [
    { title: "CoinFest, Manchester, UK", year: "2021" },
    { title: "Lugano Plan ₿, Lugano, Switzerland", year: "2023" },
    { title: "Bitcoin Atlantis, Funchal, Portugal", year: "2024" },
    { title: "Bitcoin Atlantis, Funchal, Portugal", year: "2024" },
    { title: "Bitcoin FilmFest, Warsaw, Poland", year: "2024" },
    { title: "Lugano Plan ₿, Lugano, Switzerland", year: "2024" },
  ];
  return (
    <div className=" lg:px-[80px] px-4 py-8 bg-black text-white overflow-hidden">
      <p className="text-3xl font-semibold pb-6">ABOUT ME</p>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
        <img src={Owner} className="w-full" />
        <img src={Owner} className="w-full" />{" "}
        <img src={Owner} className="w-full" />
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 py-16">
        <div>
          <p className="text-3xl font-semibold pb-6">BIOGRAPHY</p>
          <p className="text-[#cfcfcf]">
            I’m Aksana, also known as 5Ksana. I’m a Bitcoin artist and Fashion
            designer from Poland!
            <br />
            <br />
            I’ve been creating Bitcoin Physical Art since 2017!
            <br />
            <br /> Also,I am a professional tailor (a person that cuts and sews)
            with over 22 years of experience!{" "}
          </p>
        </div>
        <div className="flex items-center justify-center animate-bounce ">
          <img src={Cube1} />
        </div>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 lg:py-16 py-6">
        <div className="flex items-center justify-center animate-spin ">
          <img src={Cube2} className="h-60 w-60" />
        </div>
        <div>
          <p className="text-3xl font-semibold pb-6">EDUCATION</p>
          <p className="text-[#cfcfcf]">
            Vocational-Technical Education (Professional Technical Program based
            on General Education with a specialization in Women’s Outerwear
            Cutting), 2001.
            <br />
            <br />
            Bachelor’s Degree in Consumer Services Technology (Instructor of
            Cutting and Sewing Technology), 2008.
            <br />
            <br /> Main Technique: hand embroidery and sewing.
          </p>
        </div>
      </div>

      <div className=" text-white flex lg:flex-row flex-col items-center relative pt-12">
        <img
          src={Cube3}
          className="h-60 w-60 absolute right-[-6%] top-[-45%]"
        />
        {/* Group Exhibitions Section */}
        <div className="w-full max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">
            GROUP EXHIBITIONS /
            <br />
            ASSOCIATIONS:
          </h2>
          <ul className="space-y-4">
            {exhibitions.map((item, index) => (
              <li key={index} className="flex items-center text-lg">
                <FaTrophy className="text-yellow-500 mr-3" />
                {item.title},{" "}
                <span className="ml-1 font-semibold">{item.year}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side Section */}
        <div className="w-full max-w-4xl mt-16 text-[#cfcfcf] ">
          <p className="text-lg leading-8 mb-4">
            To me, Bitcoin embodies the idea of absolute freedom, and I want to
            share that message with the world through my art.
          </p>
          <p className="text-lg leading-8 mb-4">
            One of my favorite ways to be creative is through embroidery. I love
            making pretty paintings about Bitcoin using colorful threads.
            Embroidery lets me add a special touch to each piece, making them
            unique and interesting.
          </p>
          <p className="text-lg leading-8">
            <span className="font-semibold">Publication:</span>{" "}
            <Link
              to="https://lovebitcoin.com/weaving-bitcoin-into-art-the-unique-creations-of-5ksana/"
              className="text-yellow-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Weaving Bitcoin into Art: The Unique Creations of 5Ksana
            </Link>
          </p>
        </div>
      </div>

      <div className="py-20">
        <ContactForm2 />
      </div>
    </div>
  );
};

export default About;
