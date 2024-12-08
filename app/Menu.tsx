import React from "react";
import Image from "next/image";
import { IoSearch } from "react-icons/io5"; // Search icon
import { PiClockClockwiseBold, PiHandbagBold } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import Link from "next/link"

const Navbar = () => {
  return (
    <><><nav className="bg-[#0D0D0D] text-white shadow-md">
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
      </nav><div className="bg-white font-sans">
              {/* Starter Menu Section */}
              <section className="px-10 py-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="relative flex-item-center w-[1300px] h-[590px] py-5">
                          <Image src="/Starter Menu.png" alt="Starter" layout="fill" className="object-cover" />
                      </div>
                  </div>
              </section>

              {/* Main Course Section */}
              <section className="px-10 py-12 bg-white">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="relative flex-item-center w-[1300px] h-[590px] py-5">
                          <Image src="/Starter Menu 2.png" alt="Main Course" layout="fill" className="object-cover" />
                      </div>
                  </div>
              </section>

              <div className="relative w-[1923px] h-[463px] py-5">
                  <Image src="/Clients.png" alt="Main Course" layout="fill" className="object-cover" />
              </div>

              {/* Dessert Section */}
              <section className="px-10 py-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="relative flex-item-center w-[1300px] h-[590px] py-5">
                          <Image src="/Starter Menu 3.png" alt="Dessert" layout="fill" className="object-cover" />
                      </div>
                  </div>
              </section>

              {/* Drinks Section */}
              <section className="px-10 py-12 bg-white">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="relative flex-item-center w-[1300px] h-[590px] py-5">
                          <Image src="/Starter Menu 4.png" alt="Drinks" layout="fill" className="object-cover" />
                      </div>
                  </div>
              </section>

              <div className="relative w-[1300px] h-[270px] top-[32px] left-[295px]">
                  <Image src="/Clients and partner.png" alt="Main Course" layout="fill" className="object-cover" />
              </div>
          </div></><footer className=" bg-black">

              <div className="flex flex-col md:flex-row justify-between items-center bg-black px-[135px] py-[50px]">
                  <div className="text-white md:w-[50%] w-[100%]">
                      <h2 className="text-[20px] font-Helvetica md:text-[32px] font-semibold"><span className="text-[#FF9F0D]">St</span>ill Need Our Support</h2>
                      <p className="text-[10px]  font-Helvetica md:text-[16px] font-normal mt-[17px]">Don&#39;t wait make a smart & logical quote here. Its pretty easy.</p>
                  </div>

                  <div className="flex md:mt-0 mt-[20px]">
                      <input type="text" placeholder="Enter Your Email"
                          className="bg-[#FF9F0D] text-white py-[5px] px-[10px] md:py-[10px] md:px-[20px] mr-2" />
                      <button className="text-[#FF9F0D] bg-white py-[5px] md:py-[10px] font-Helvetica px-[10px] md:px-[20px]">Subscribe Now</button>
                  </div>


              </div>

              <hr className="my-4 border-[#FF9F0D] mx-[135px]" />

              <div className=" bg-black mx-auto w-full max-w-screen-xl ">
                  <div className="grid grid-cols-2  md:gap-[50px] px-0 md:px-[135px] py-6 lg:py-8 md:grid-cols-4">
                      <div>
                          <h2 className="mb-6 text-[24px] font-Helvetica font-semibold  text-white">
                              About Us
                          </h2>
                          <ul className="text-gray-500  font-medium">
                              <li className="mb-4">
                                  <p className="text-[#FFFFFF]  text-[16px] font-Helvetica hover:underline">
                                      orporate clients and leisure travelers has been relying on
                                      Groundlink for dependab safe, and professional chauffeured car
                                      service in major cities across World.
                                  </p>
                              </li>
                              <li className="flex gap-[16.5px]">
                                  <div className="bg-[#FF9F0D] flex justify-center items-center w-[72px] h-[72px]">
                                      <PiClockClockwiseBold className="text-white text-[40px]" />
                                  </div>

                                  <div className="ml-1">
                                      <h2 className="text-[16px] text-[#FFFFFF] font-Helvetica">
                                          Opening Hours
                                      </h2>
                                      <h3 className="text-[10px] font-Helvetica text-[#FFFFFF]">
                                          Mon - Sat(8.00 - 6.00)
                                      </h3>
                                      <h3 className="text-[10px] font-Helvetica text-[#FFFFFF]">
                                          Sunday - Closed
                                      </h3>
                                  </div>
                              </li>
                          </ul>
                      </div>
                      <div className=" font-Helvetica">
                          <h2 className="mb-6 text-[24px] font-semibold  text-white">
                              Useful Links
                          </h2>
                          <ul className="text-gray-500 dark:text-gray-400 font-medium">
                              <li className="mb-4">
                                  <a href="#" className="hover:underline">
                                      About
                                  </a>
                              </li>
                              <li className="mb-4">
                                  <a href="#" className="hover:underline">
                                      News
                                  </a>
                              </li>
                              <li className="mb-4">
                                  <a href="#" className="hover:underline">
                                      Partner
                                  </a>
                              </li>
                              <li className="mb-4">
                                  <a href="#" className="hover:underline">
                                      Team
                                  </a>
                              </li>

                              <li className="mb-4">
                                  <a href="#" className="hover:underline">
                                      Menu
                                  </a>
                              </li>

                              <li className="mb-4">
                                  <a href="#" className="hover:underline">
                                      Contact
                                  </a>
                              </li>
                          </ul>
                      </div>
                      <div className="mt-10 md:mt-0 font-Helvetica">
                          <h2 className="mb-6 text-[24px] font-semibold  text-white">
                              Help?
                          </h2>
                          <ul className="text-gray-500 dark:text-gray-400 font-medium">
                              <li className="mb-4">
                                  <a href="#" className="hover:underline">
                                      FAQ
                                  </a>
                              </li>
                              <li className="mb-4">
                                  <a href="#" className="hover:underline">
                                      Term & conditions
                                  </a>
                              </li>
                              <li className="mb-4">
                                  <a href="#" className="hover:underline">
                                      Reporting
                                  </a>
                              </li>
                              <li className="mb-4">
                                  <a href="#" className="hover:underline">
                                      Documentation
                                  </a>
                              </li>

                              <li className="mb-4">
                                  <a href="#" className="hover:underline">
                                      Support Policy
                                  </a>
                              </li>

                              <li className="mb-4">
                                  <a href="#" className="hover:underline">
                                      Privacy
                                  </a>
                              </li>
                          </ul>
                      </div>
                      <div className="mt-10 md:mt-0 font-Helvetica">
                          <h2 className="mb-6 text-[24px] font-semibold  text-white">
                              Recent Post
                          </h2>
                          <ul className="text-gray-500 dark:text-gray-400 font-medium gap-[14px]">
                              <li className="flex gap-[16.5px]">
                                  <Image src="/footer 1.png" alt="Fod" width={100} height={100} />

                                  <div className="ml-1">
                                      <h2 className="text-[12px] text-[#FFFFFF] ">
                                          20 Feb 2022
                                      </h2>
                                      <h3 className="text-[14px]  text-[#FFFFFF]">
                                          Keep Your Business
                                      </h3>
                                  </div>
                              </li>

                              <li className="flex gap-[16.5px] mt-[14px]">
                                  <Image src="/footer 2.png" alt="Fod" width={100} height={100} />

                                  <div className="ml-1">
                                      <h2 className="text-[12px] text-[#FFFFFF] font-Helvetica">
                                          20 Feb 2022
                                      </h2>
                                      <h3 className="text-[14px] font-Helvetica text-[#FFFFFF]">
                                          Keep Your Business
                                      </h3>
                                  </div>
                              </li>

                              <li className="flex gap-[16.5px] mt-[14px]">
                                  <Image src="/footer 3.png" alt="Fod" width={100} height={100} />
                                  <div className="ml-1">
                                      <h2 className="text-[12px] text-[#FFFFFF] font-Helvetica">
                                          20 Feb 2022
                                      </h2>
                                      <h3 className="text-[14px] font-Helvetica text-[#FFFFFF]">
                                          Keep Your Business
                                      </h3>
                                  </div>
                              </li>
                          </ul>
                      </div>
                  </div>

                  <div className="w-[1200px] h-[100px] flex justify-around  px-4 py-6 bg-[#4F4F4F] dark:bg-[#4F4F4F]">
                      <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
                          © 2023 <a href="https://flowbite.com/">Flowbite™</a>. All Rights
                          Reserved.
                      </span>

                      <div className="flex justify-center gap-[14px]">
                          <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded"><FaFacebookF /></div>
                          <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded"><FaTwitter /></div>
                          <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded"><FaInstagram /></div>
                          <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded"><FaYoutube /></div>
                          <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded"><FaPinterest /></div>
                      </div>

                  </div>
              </div>
          </footer></>
  );
};

export default Navbar;
