import React from "react";

const Gallery = () => {
  return (
    <div className="bg-black overflow-x-scroll">
      <div class="gallerycontainer">
        <h1
          className="text-white  font-sansation font-bold "
          data-aos="fade-right"
        >
          Gallery
        </h1>
        <div className="overflow-x-scroll" data-aos="flip-up">
          <div class="gallery-wrap">
            <div class="item item-1"></div>
            <div class="item item-2"></div>
            <div class="item item-3"></div>
            <div class="item item-4"></div>
            <div class="item item-5"></div>

            <div class="item item-6"></div>
            <div class="item item-7"></div>
          </div>
        </div>
      </div>
      <div class="social">
        <a href="https://twitter.com" target="_blank">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/149103/twitter.svg"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default Gallery;
