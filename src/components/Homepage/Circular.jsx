import React from "react";
import { FaArrowDown } from "react-icons/fa";

const CircularText = () => {
  return (
    <div className="relative flex items-center justify-center h-20 w-20">
      {/* Circular Text */}
      <div className="absolute inset-0">
        <svg className="h-full w-full hover:motion-safe:animate-spin">
          <defs>
            <path
              id="circlePath"
              d="M 40,40 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
            />
          </defs>
          <text className="text-[6px] fill-white">
            <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
              EXPLORE MORE • SCROLL DOWN • 5KSANA • EXPLORE MORE • SCROLL DOWN •
            </textPath>
          </text>
        </svg>
      </div>

      {/* Center Icon */}
      <div className="absolute flex items-center justify-center">
        <FaArrowDown className="text-white text-xs" />
      </div>
    </div>
  );
};

const Circular = () => {
  return (
    <div className="flex  items-center ">
      <CircularText />
    </div>
  );
};

export default Circular;
