/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Quicksand } from "next/font/google";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import { BsCaretDown, BsCaretRight } from "react-icons/bs";
import { apiMenuList } from "@/services/menu";

const quicksand = Quicksand({ subsets: ["latin-ext"] });

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menus, setMenus] = useState<Array<{ id: number; name: string; url: string, children: Array<{ id: number; name: string; url: string }> }>>([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const fetchMenus = async () => {
      const response = await apiMenuList();
      setMenus(response.data.data);
    };

    fetchMenus();
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
          {!isScrolled && <Image src='/logo.png' alt="University Logo" width={80} height={47} className="object-contain md:py-4 py-2" />}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center uppercase font-bold">
          {menus.map((menu) => {
            if (menu.children && menu.children.length > 0) {
              return (
                <div key={menu.id} className="relative group">
                  <span className="hover:underline hover:text-blue-300 transition cursor-pointer py-3 flex gap-2 items-center">{menu.name} <BsCaretDown /></span>
                  <div className="absolute left-0 top-full hidden group-hover:block bg-white text-slate-900 shadow-lg rounded-lg p-4 min-w-64">
                    {menu.children.map((child) => (
                      <Link key={child.id} href={child.url} className="flex items-center gap-2 py-1 hover:underline hover:text-blue-300 transition">
                        <BsCaretRight /> {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return ((
              <Link key={menu.id} href={menu.url} className="hover:underline hover:text-blue-300 transition">
                {menu.name}
              </Link>
            ))
          })}
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
          {menus.map((menu) => {
            if (menu.children && menu.children.length > 0) {
              return (
                <div key={menu.id} className="relative mb-4">
                  <span className="block py-2 hover:underline hover:text-blue-300 transition cursor-pointer">{menu.name}</span>
                  <div className="pl-4">
                    {menu.children.map((child) => (
                      <Link key={child.id} href={child.url} className="block py-1 hover:underline hover:text-blue-300 transition">
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <Link key={menu.id} href={menu.url} className="block py-2 hover:underline hover:text-blue-300 transition">
                {menu.name}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}