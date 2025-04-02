import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* Column 1: Logo */}
        <div>
          <Image src="/logo.svg" alt="University Logo" width={150} height={50} />
          <p className="mt-4 text-sm">
            Faculty of Information Technology, Hai Phong University. Empowering the next generation of technology leaders.
          </p>
        </div>

        {/* Column 2: Contact Information */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p className="text-sm flex items-center">
            <HiOutlineLocationMarker className="mr-2" /> Address: 123 Hai Phong Street, Vietnam
          </p>
          <p className="text-sm flex items-center">
            <HiOutlineMail className="mr-2" /> Email: info@fit-hpu.edu.vn
          </p>
          <p className="text-sm flex items-center">
            <HiOutlinePhone className="mr-2" /> Phone: +84 123 456 789
          </p>
        </div>

        {/* Column 3: Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="mr-2">➤</span>
              <a href="#home" className="hover:underline">Home</a>
            </li>
            <li className="flex items-center">
              <span className="mr-2">➤</span>
              <a href="#about" className="hover:underline">About</a>
            </li>
            <li className="flex items-center">
              <span className="mr-2">➤</span>
              <a href="#programs" className="hover:underline">Programs</a>
            </li>
            <li className="flex items-center">
              <span className="mr-2">➤</span>
              <a href="#news" className="hover:underline">News</a>
            </li>
            <li className="flex items-center">
              <span className="mr-2">➤</span>
              <a href="#contact" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Form */}
        <div>
          <h3 className="text-lg font-bold mb-4">Get in Touch</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 rounded bg-white text-black"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 rounded bg-white text-black"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-2 rounded bg-white text-black"
              rows={3}
            ></textarea>
            <button
              type="submit"
              className="w-full bg-white text-blue-700 font-bold py-2 rounded hover:bg-gray-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-sm border-t border-blue-600 pt-4">
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