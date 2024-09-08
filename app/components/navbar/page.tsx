'use client'
import React, { useState } from 'react';
import { TiThMenu } from 'react-icons/ti';
import Link from 'next/link';
import { BiSearch, BiShoppingBag, BiUserCircle, BiHeart } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai'; // Close icon
import { FiSearch } from 'react-icons/fi'; // Search icon

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-screen h-12 text-black flex justify-between items-center bg-yellow-500 fixed z-50">
      {/* Mobile Menu */}
      <div
        className={`block md:hidden w-full h-[400px] bg-yellow-500 absolute top-0 left-0 transition-transform duration-700 ease-in-out ${
          isMenuOpen ? 'translate-x-0 z-50' : '-translate-x-full'
        }`}
      >
        {/* Logo and Close Icon */}
        <div className="flex justify-between items-center p-4 border-b">
          <h1 className="text-xl text-black font-bold">Logo.</h1>
          <AiOutlineClose
            className="text-black text-2xl cursor-pointer"
            onClick={toggleMenu}
          />
        </div>

        {/* Search Bar */}
        <div className="flex items-center p-4 border-b">
          <FiSearch className="text-black text-xl mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="w-full border-none focus:outline-none bg-transparent text-black"
          />
        </div>

        {/* Menu Links */}
        <ul className="flex flex-col p-4 text-lg">
          <Link href="/">
            <li className="py-2 ">Home</li>
          </Link>
          <Link href="/product">
            <li className="py-2 ">product</li>
          </Link>
          <Link href="/components/about">
            <li className="py-2 ">About</li>
          </Link>
          <Link href="/components/contact">
            <li className="py-2 ">Contact Us</li>
          </Link>
        </ul>

        {/* Cart and Wishlist Icons */}
        {/* <div className="p-4 mt-4 border-t">
          <div className="flex items-center justify-between py-2">
            <span className="text-lg">Cart</span>
            <div className="relative">
              <BiShoppingBag className="text-2xl" />
              <span className="absolute top-0 right-0 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">6</span>
            </div>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-lg">Wishlist</span>
            <div className="relative">
              <BiHeart className="text-2xl" />
              <span className="absolute top-0 right-0 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">9+</span>
            </div>
          </div>
        </div> */}
      </div>

      {/* Logo and Menu Icon */}
      <div className="w-[10%] h-full font-serif flex justify-center items-center">
        <TiThMenu
          className="block text-black text-2xl ml-3 md:hidden cursor-pointer"
          onClick={toggleMenu}
        />
        <h1 className="text-xl text-black hidden md:flex">Logo</h1>
      </div>

      {/* Desktop Menu */}
      <div className="w-[70%] h-full hidden md:flex items-center justify-center">
        <ul className="flex justify-center items-center text-xl font-mono">
          <Link href="/">
            <li className="ml-5 hover:underline hover:scale-105">Home</li>
          </Link>
          <Link href="/product">
            <li className="ml-6 hover:underline hover:scale-105">Product</li>
          </Link>
          <Link href="/components/about">
            <li className="ml-6 hover:underline hover:scale-105">About</li>
          </Link>
          <Link href="/components/contact">
            <li className="ml-6 hover:underline hover:scale-105">Contact Us</li>
          </Link>
        </ul>
      </div>

      {/* Icons */}
      <div className="w-[20%] h-full flex justify-center items-center">
        <BiSearch className="font-bold text-2xl mr-2 md:mr-0 ml-0 md:ml-3 hidden md:flex hover:text-3xl" />
        <BiUserCircle className="font-bold text-2xl ml-3 hover:text-3xl hidden md:flex" />
        <BiShoppingBag className="font-bold text-2xl ml-3 hover:text-3xl hidden md:flex" />
      </div>
    </div>
  );
}

export default Navbar;
