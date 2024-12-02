import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = ({ totalPages = 8 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex justify-center items-center space-x-2 bg-black py-8">
      {/* Previous Button */}
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className={`p-2 rounded-full ${
          currentPage === 1
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-gray-700"
        }`}
      >
        <FaChevronLeft className="text-white" />
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }).map((_, index) => {
        const page = index + 1;
        return (
          <button
            key={page}
            onClick={() => handlePageClick(page)}
            className={`px-4 py-2 rounded-full ${
              currentPage === page
                ? "bg-slate-600 text-black"
                : "bg-[#191919] text-white hover:bg-gray-700"
            }`}
          >
            {page}
          </button>
        );
      })}

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`p-2 rounded-full ${
          currentPage === totalPages
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-gray-700"
        }`}
      >
        <FaChevronRight className="text-white" />
      </button>
    </div>
  );
};

export default Pagination;
