import React, { useState } from "react";
import Art from "../assets/Art2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CardSwiper = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const images = [
    Art, // Replace with your image paths
    Art,
    Art,
    Art,
    Art,
  ];

  return (
    <div className="w-full lg:px-[80px] px-4 mx-auto bg-black">
      {/* Main Image Swiper */}
      <Swiper
        modules={[Navigation, Thumbs]}
        navigation={{
          prevEl: ".prev-button",
          nextEl: ".next-button",
        }}
        thumbs={{ swiper: thumbsSwiper }}
        className="rounded-lg"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[330px] rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mt-4">
        <button className="prev-button text-white text-2xl">
          <FaChevronLeft />
        </button>
        <button className="next-button text-white text-2xl">
          <FaChevronRight />
        </button>
      </div>

      {/* Thumbnail Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        watchSlidesProgress
        modules={[Thumbs]}
        className="mt-4"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="cursor-pointer border border-gray-700 h-24 w-24 mx-auto rounded-md hover:border-white"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSwiper;
