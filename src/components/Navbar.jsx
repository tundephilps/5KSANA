import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../assets/Logo.png";
import { CiSearch } from "react-icons/ci";
import { CgShoppingBag } from "react-icons/cg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#000000] text-white py-4 px-6 md:px-8 lg:px-[80px] border-b border-white">
      <div className="flex justify-between items-center">
        <img src={Logo} className="text-xl font-bold" />
        <div className="flex flex-row items-center gap-12">
          <div className="hidden md:flex space-x-6">
            <a href="/shop" className="hover:text-gray-400">
              SHOP
            </a>
            <a href="/bitcoin-art-gallery" className="hover:text-gray-400">
              BITCOIN ART GALLERY
            </a>
            <a href="/contact" className="hover:text-gray-400">
              CONTACT
            </a>
            <a href="/about-me" className="hover:text-gray-400">
              ABOUT ME
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="/cart" className="hover:text-gray-400">
              <CiSearch size={24} className="text-white font-extrabold" />
            </a>
            <a href="/search" className="hover:text-gray-400">
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
          <a href="/shop" className="block hover:text-gray-400">
            SHOP
          </a>
          <a href="/bitcoin-art-gallery" className="block hover:text-gray-400">
            BITCOIN ART GALLERY
          </a>
          <a href="/contact" className="block hover:text-gray-400">
            CONTACT
          </a>
          <a href="/about-me" className="block hover:text-gray-400">
            ABOUT ME
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
