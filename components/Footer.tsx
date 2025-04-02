import { Quicksand } from "next/font/google";
import Image from "next/image";
import { BiStar } from "react-icons/bi";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

const quicksand = Quicksand({ subsets: ["latin-ext"] });

export default function Footer() {
  return (
    <footer className="text-white bg-cover bg-no-repeat bg-center" style={{
      backgroundImage: "url(https://t3.ftcdn.net/jpg/10/34/13/52/360_F_1034135202_w5wVDd7L6VpLrOPzFoCQmfs1VtWwOZ9c.jpg)"
    }}>
      <div className="bg-[rgba(0,22,47,0.92)] py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
          {/* Column 1: Logo */}
          <div>
          <h3 className="text-xl font-bold mb-4 footer-title relative pl-10 uppercase" style={quicksand.style}>Về chúng tôi</h3>
            <Image src="/logo.png" alt="University Logo" width={250} height={50} />
            <p className="mt-4 text-sm">
              Faculty of Information Technology, Hai Phong University. Empowering the next generation of technology leaders.
            </p>
          </div>

          {/* Column 2: Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4 footer-title relative pl-10 uppercase" style={quicksand.style}>Contact Us</h3>
            <p className="flex items-center">
              <HiOutlineLocationMarker className="mr-2" /> Address: 123 Hai Phong Street, Vietnam
            </p>
            <p className="flex items-center">
              <HiOutlineMail className="mr-2" /> Email: info@fit-hpu.edu.vn
            </p>
            <p className="flex items-center">
              <HiOutlinePhone className="mr-2" /> Phone: +84 123 456 789
            </p>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 footer-title relative pl-10 uppercase" style={quicksand.style}>Quick Links</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="mr-2 text-[#bf0a30]">
                  <BiStar />
                </span>
                <a href="#home" className="hover:underline">Home</a>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-[#bf0a30]">
                  <BiStar />
                </span>
                <a href="#about" className="hover:underline">About</a>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-[#bf0a30]">
                  <BiStar />
                </span>
                <a href="#programs" className="hover:underline">Programs</a>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-[#bf0a30]">
                  <BiStar />
                </span>
                <a href="#news" className="hover:underline">News</a>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-[#bf0a30]">
                  <BiStar />
                </span>
                <a href="#contact" className="hover:underline">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Form */}
          <div>
            <h3 className="text-xl font-bold mb-4 footer-title relative pl-10 uppercase" style={quicksand.style}>Get in Touch</h3>
            <form className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 p-2 rounded-md bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-white text-blue-700 font-bold px-6 py-2 rounded-md hover:bg-gray-100 transition duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm bg-[#000f21] py-4">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaFacebookF size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaTwitter size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaInstagram size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaLinkedinIn size={20} />
          </a>
        </div>
        <p>&copy; 2025 Faculty of Information Technology, Hai Phong University. All rights reserved.</p>
      </div>
    </footer>
  );
}