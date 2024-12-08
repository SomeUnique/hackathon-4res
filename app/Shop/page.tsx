import React from "react";
import { IoSearch } from "react-icons/io5"; // Search icon
import { PiHandbagBold } from "react-icons/pi"; // Shopping bag icon
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import Link from "next/link"

const Navbar = () => {
  return (
    <><nav className="bg-[#0D0D0D] text-white shadow-md">
      <div className="container mx-auto px-6 lg:px-12 py-4">
        {/* Top Header */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold">
            Food<span className="text-orange-500">tuck</span>
          </a>

          {/* Right Section: Search and Cart */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search Bar */}
            <div className="flex items-center bg-gray-800 px-4 py-2 rounded-full">
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent text-white placeholder-gray-400 focus:outline-none w-32 lg:w-48" />
              <IoSearch className="text-orange-500 ml-2" />
            </div>

            {/* Shopping Bag Icon */}
            <PiHandbagBold className="text-white text-2xl hover:text-orange-500 transition" />
          </div>
        </div>

        {/* Bottom Section: Navigation Links */}
        <div className="mt-4 flex justify-center space-x-6">
          <a href="#home" className="hover:text-orange-500 transition">
            Home
          </a>
          <a href="#menu" className="hover:text-orange-500 transition">
            Menu
          </a>
          <a href="#blog" className="hover:text-orange-500 transition">
            Blog
          </a>
          <a href="#pages" className="hover:text-orange-500 transition">
            Pages
          </a>
          <a href="#about" className="hover:text-orange-500 transition">
            About
          </a>
          <a href="#shop" className="hover:text-orange-500 transition">
            Shop
          </a>
          <a href="#contact" className="hover:text-orange-500 transition">
            Contact
          </a>
        </div>
      </div>
      <div>
        <img
          src="/menu 1.png" // Replace this with the actual leaf image path
          alt="Leaf"
          className="w-[1920px] h-[410px]" />
      </div>
      <div>

      </div>
    </nav><div className="container mx-auto py-8">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="Shop.png"
            alt="shop Image" />
        </div>

      </div></>

      

);
};

export default Navbar;

