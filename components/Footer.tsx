/* eslint-disable @next/next/no-img-element */
import { Quicksand } from "next/font/google";
import { BiStar } from "react-icons/bi";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { AOSInit } from "./aos";

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
            <img src="https://dhhp.edu.vn/fit/checkin.png" alt="University Logo" width={162} height={80} loading="lazy" />
            <p className="mt-4 text-sm">
            Truyền đạt kiến thức vững chắc để sinh viên vào đời vững vàng! “You can do IT, we are ready to accompany”
            </p>
          </div>

          {/* Column 2: Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4 footer-title relative pl-10 uppercase" style={quicksand.style}>Liên hệ</h3>
            <p className="mb-2">
              <HiOutlineMail className="mr-1 inline" /> Email: kcntt@dhhp.edu.vn
            </p>
            <p className="mb-2">
              <HiOutlinePhone className="mr-1 inline" /> Điện thoại: (02253) 549.277
            </p>
            <div className="mb-2">
              <HiOutlineLocationMarker className="mr-1 inline" /> Địa chỉ: Tòa C3, 171 Phan Đăng Lưu, Kiến An, Hải Phòng
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 footer-title relative pl-10 uppercase" style={quicksand.style}>Ngành đào tạo</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="mr-2 text-[#bf0a30]">
                  <BiStar />
                </span>
                <a href="https://tuyensinh.dhhp.edu.vn/academic-program/thiet-ke-game-va-multimedia-clc" className="hover:underline">Thiết kế Game và Multimedia</a>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-[#bf0a30]">
                  <BiStar />
                </span>
                <a href="https://tuyensinh.dhhp.edu.vn/academic-program/tri-tue-nhan-tao-va-koa-hoc-du-lieu" className="hover:underline">Trí tuệ nhân tạo và koa học dữ liệu</a>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-[#bf0a30]">
                  <BiStar />
                </span>
                <a href="https://tuyensinh.dhhp.edu.vn/academic-program/cong-nghe-thong-tin" className="hover:underline">Công nghệ thông tin</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Form */}
          <div>
            <h3 className="text-xl font-bold mb-4 footer-title relative pl-10 uppercase" style={quicksand.style}>Get in Touch</h3>
            <div className="text-slate-100 mb-4">
              Đăng ký để nhận thông tin mới nhất từ chúng tôi
            </div>
            <form className="flex flex-col space-y-4 md:space-y-0 md:flex-row">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                required
                className="flex-1 p-3 rounded-l-md bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-red-500 text-white font-bold px-6 py-2 rounded-r-md hover:bg-gray-100 transition duration-200"
              >
                Đăng ký
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm bg-[#000f21] py-4">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://www.facebook.com/fithpu" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaFacebookF size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaTwitter size={20} />
          </a>
          <a href="https://www.instagram.com/hpu.off/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaInstagram size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaLinkedinIn size={20} />
          </a>
        </div>
        <p>&copy; 2025 Faculty of Information Technology, Hai Phong University. All rights reserved.</p>
      </div>
      
      <AOSInit />
    </footer>
  );
}