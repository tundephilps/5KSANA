import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../assets/Logo.png";
import { CiSearch } from "react-icons/ci";
import { CgShoppingBag } from "react-icons/cg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#000000] text-white py-4 px-6 md:px-8 lg:px-[80px] border-b border-white">
      <div className="flex justify-between items-center" data-aos="fade-up">
        <img src={Logo} className="text-xl font-bold" />
        <div className="flex flex-row items-center gap-12">
          <div className="hidden md:inline-flex items-center space-x-6">
            <Link to="/" className="hover:text-gray-400">
              SHOP
            </Link>
            <Link to="/" className="hover:text-gray-400">
              BITCOIN ART GALLERY
            </Link>
            <Link to="/" className="hover:text-gray-400">
              CONTACT
            </Link>
            <Link to="/" className="hover:text-gray-400">
              ABOUT ME
            </Link>
            <Link
              to="/"
              className="w-[100px] bg-[#FCCB00] text-sm py-1.5 flex items-center justify-center rounded-full cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-yellow-200 before:to-[rgb(149,136,27)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
            >
              Login
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <a href="/" className="hover:text-gray-400">
              <CiSearch size={24} className="text-white font-extrabold" />
            </a>
            <a href="/" className="hover:text-gray-400">
              <CgShoppingBag size={20} />
            </a>
            <button className="md:hidden" onClick={toggleMenu}>
              <GiHamburgerMenu size={24} />
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <Link to="/" className="block hover:text-gray-400">
            SHOP
          </Link>
          <Link to="/" className="block hover:text-gray-400">
            BITCOIN ART GALLERY
          </Link>
          <Link to="/" className="block hover:text-gray-400">
            CONTACT
          </Link>
          <Link to="/" className="block hover:text-gray-400">
            ABOUT ME
          </Link>
          <Link
            to="/"
            className="w-[100px] bg-[#FCCB00] text-sm py-1.5 flex items-center justify-center rounded-full cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-yellow-200 before:to-[rgb(149,136,27)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
