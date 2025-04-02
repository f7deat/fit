"use client";

import { useState } from "react";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-900 fixed top-0 w-full shadow-md z-50">
      <div className="container mx-auto text-white p-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center hover:opacity-80 transition-opacity">
          <Image src="/logo.png" alt="University Logo" width={250} height={50} className="object-contain" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          <a href="#home" className="hover:underline hover:text-blue-300 transition">Home</a>
          <a href="#about" className="hover:underline hover:text-blue-300 transition">About</a>
          <a href="#programs" className="hover:underline hover:text-blue-300 transition">Programs</a>
          <a href="#news" className="hover:underline hover:text-blue-300 transition">News</a>
          <a href="#contact" className="hover:underline hover:text-blue-300 transition">Contact</a>
          {/* CTA Button */}
          <a
            href="#contact"
            className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition"
          >
            Contact Us
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-blue-800 text-white p-4">
          <a href="#home" className="block py-2 hover:underline hover:text-blue-300 transition">Home</a>
          <a href="#about" className="block py-2 hover:underline hover:text-blue-300 transition">About</a>
          <a href="#programs" className="block py-2 hover:underline hover:text-blue-300 transition">Programs</a>
          <a href="#news" className="block py-2 hover:underline hover:text-blue-300 transition">News</a>
          <a href="#contact" className="block py-2 hover:underline hover:text-blue-300 transition">Contact</a>
        </nav>
      )}
    </header>
  );
}