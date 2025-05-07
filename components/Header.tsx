/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Quicksand } from "next/font/google";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { HiHome } from "react-icons/hi2";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const quicksand = Quicksand({ subsets: ["latin-ext"] });

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full z-50 fixed top-0 transition-colors duration-300 ${isScrolled ? "bg-white text-slate-900 shadow-md" : "bg-transparent text-white"
        }`}
      style={quicksand.style}
    >
      <div className="border-b border-gray-600">
        <div className="container mx-auto flex justify-between items-center">
          <div className="hidden md:block">
            <HiOutlineLocationMarker className="mr-1 inline" />C3, 171 Phan Đăng Lưu, Kiến An, Hải Phòng
          </div>
          <div className="flex justify-end">
            <a href="https://www.facebook.com/fithpu" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 px-4 py-3 border-l border-gray-600">
              <FaFacebookF size={16} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 px-4  py-3 border-l border-gray-600">
              <FaTwitter size={16} />
            </a>
            <a href="https://www.instagram.com/hpu.off/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 px-4 py-3 border-l border-gray-600">
              <FaInstagram size={16} />
            </a>
            <a href="https://www.linkedin.com/company/hai-phong-university/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 px-4 py-3 border-l border-gray-600">
              <FaLinkedinIn size={16} />
            </a>
            <a href="#" className="hover:text-blue-300 px-4 py-3 border-l border-gray-600">
              <FaSearch size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
          {isScrolled && <img src='https://dhhp.edu.vn/fit/checkin.png' alt="University Logo" width={152} height={30} className="object-contain" />}
          {!isScrolled && <Image src='/logo.png' alt="University Logo" width={80} height={47} className="object-contain py-4" />}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center uppercase font-bold">
          <Link href="/" className="hover:underline hover:text-blue-300 transition flex gap-2 items-center"><HiHome /> Trang chủ</Link>
          <div className="relative group">
            <button className="hover:underline hover:text-blue-300 transition flex items-center gap-1 uppercase">
              Giới thiệu
            </button>
            <div className="absolute left-0 mt-2 w-50 bg-white text-slate-900 rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
              <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">Về chúng tôi</Link>
              <Link href="/lecturer" className="block px-4 py-2 hover:bg-gray-100">Đội ngũ Giảng viên</Link>
            </div>
          </div>

          <a href="#programs" className="hover:underline hover:text-blue-300 transition">Ngành đào tạo</a>
          <Link href="/article" className="hover:underline hover:text-blue-300 transition">Tin tức</Link>
          {/* CTA Button */}
          <a
            href="#contact"
            className="bg-[#bf0a30] hover:bg-red-900 text-white font-bold py-3 px-8 rounded transition"
          >
            Liên hệ
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
          <Link href="/" className="block py-2 hover:underline hover:text-blue-300 transition flex items-center gap-2"><BsArrowRight />Trang chủ</Link>
          <a href="#about" className="block py-2 hover:underline hover:text-blue-300 transition flex items-center gap-2"><BsArrowRight />Giới thiệu</a>
          <a href="#programs" className="block py-2 hover:underline hover:text-blue-300 transition flex items-center gap-2"><BsArrowRight />Ngành đào tạo</a>
          <Link href="/article" className="block py-2 hover:underline hover:text-blue-300 transition flex items-center gap-2"><BsArrowRight />Tin tức</Link>
          <a href="#contact" className="block py-2 hover:underline hover:text-blue-300 transition flex items-center gap-2"><BsArrowRight />Liên hệ</a>
        </nav>
      )}
    </header>
  );
}