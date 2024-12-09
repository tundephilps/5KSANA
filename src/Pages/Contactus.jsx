import React from "react";
import Contact from "../assets/Contact.png";

const Contactus = () => {
  return (
    <div>
      <div class="bg-black text-gray-100 px-8 py-12">
        <div class="max-w-screen-xl mt-1 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-[#212121] text-gray-900 rounded-lg shadow-lg">
          <div
            class="flex flex-col justify-between"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-easing="ease-in-sine"
          >
            <div>
              <h2 class="text-4xl text-white lg:text-5xl font-bold leading-tight">
                Lets talk about everything!
              </h2>
              <div class="text-gray-100 mt-8">
                Hate forms? Send us an <span class="underline">email</span>{" "}
                instead.
              </div>
            </div>
            <div class="mt-8 text-center">
              <img src={Contact} />
            </div>
          </div>
          <div
            class=""
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-easing="ease-in-sine"
          >
            <div>
              <span class="uppercase text-sm text-yellow-500 font-bold">
                Full Name
              </span>
              <input
                class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder=""
              />
            </div>
            <div class="mt-8">
              <span class="uppercase text-sm text-yellow-500 font-bold">
                Email
              </span>
              <input
                class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
              />
            </div>
            <div class="mt-8">
              <span class="uppercase text-sm text-yellow-500 font-bold">
                Message
              </span>
              <textarea class="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
            </div>
            <div class="mt-8">
              <button class="uppercase text-sm font-bold tracking-wide bg-[#fcc000] text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
