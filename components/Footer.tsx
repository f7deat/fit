"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
  HiCheckCircle,
} from "react-icons/hi";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;

    setSubscribed(true);
    setNewsletterEmail("");
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600 text-sm">
      <div className="container mx-auto px-4 max-w-7xl pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Cột 1: Thông tin FIT - HPU (col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            {/* Logo FIT-HPU */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 relative shrink-0">
                <Image
                  src="/logo.png"
                  alt="FIT - HPU Logo"
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-extrabold text-base text-slate-900 leading-tight font-[family-name:var(--font-plus-jakarta-sans)]">
                  FIT - HPU
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Khoa Công nghệ Thông tin - ĐH Hải Phòng
                </p>
              </div>
            </div>

            {/* Triết lý đào tạo */}
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
              <span className="text-slate-500">Triết lý đào tạo: </span>
              <strong className="text-slate-900 font-semibold">
                “Truyền đạt kiến thức vững chắc để sinh viên vào đời vững vàng - Học thành người và học thành nghề”
              </strong>
              . Tiên phong đào tạo nhân lực CNTT chất lượng cao vùng Duyên hải Bắc Bộ.
            </p>

            {/* Danh sách liên hệ */}
            <ul className="space-y-2 text-xs md:text-sm text-slate-600 pt-1">
              <li className="flex items-start gap-2.5">
                <HiOutlineLocationMarker className="w-4 h-4 text-[#f63a35] shrink-0 mt-0.5" />
                <span>Tòa C3, Số 171 Phan Đăng Lưu, Phường Phù Liễn, Quận Kiến An, TP. Hải Phòng</span>
              </li>
              <li className="flex items-center gap-2.5">
                <HiOutlinePhone className="w-4 h-4 text-[#f63a35] shrink-0" />
                <span>
                  Hotline:{" "}
                  <a href="tel:02253549277" className="hover:text-blue-600 font-medium text-slate-800">
                    (02253) 549.277
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <HiOutlineMail className="w-4 h-4 text-[#f63a35] shrink-0" />
                <span>
                  Email:{" "}
                  <a href="mailto:kcntt@dhhp.edu.vn" className="hover:text-blue-600 font-medium text-slate-800">
                    kcntt@dhhp.edu.vn
                  </a>
                </span>
              </li>
            </ul>
          </div>

          {/* Cột 2: Ngành đào tạo (col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-base md:text-lg text-slate-900 mb-4 font-[family-name:var(--font-plus-jakarta-sans)]">
              Ngành đào tạo
            </h4>
            <ul className="space-y-2.5 text-xs md:text-sm">
              <li>
                <Link
                  href="https://tuyensinh.dhhp.edu.vn/academic-program/cong-nghe-thong-tin"
                  className="hover:text-red-600 transition-colors"
                >
                  Công nghệ Thông tin
                </Link>
              </li>
              <li>
                <Link
                  href="https://tuyensinh.dhhp.edu.vn/academic-program/tri-tue-nhan-tao-va-koa-hoc-du-lieu"
                  className="hover:text-red-600 transition-colors"
                >
                  Trí tuệ nhân tạo &amp; KH Dữ liệu
                </Link>
              </li>
              <li>
                <Link
                  href="https://tuyensinh.dhhp.edu.vn/academic-program/thiet-ke-game-va-multimedia-clc"
                  className="hover:text-red-600 transition-colors"
                >
                  Thiết kế Game &amp; Multimedia
                </Link>
              </li>
              <li>
                <Link
                  href="/category/575"
                  className="hover:text-red-600 transition-colors"
                >
                  Kỹ thuật Phần mềm
                </Link>
              </li>
              <li>
                <Link
                  href="/category/575"
                  className="hover:text-red-600 transition-colors"
                >
                  An toàn Thông tin &amp; Mạng
                </Link>
              </li>
            </ul>
          </div>

          {/* Cột 3: Liên kết nhanh (col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-base md:text-lg text-slate-900 mb-4 font-[family-name:var(--font-plus-jakarta-sans)]">
              Liên kết nhanh
            </h4>
            <ul className="space-y-2.5 text-xs md:text-sm">
              <li>
                <Link href="/article" className="hover:text-red-600 transition-colors">
                  Lịch sử 25 năm FIT HPU
                </Link>
              </li>
              <li>
                <Link href="/lecturer" className="hover:text-red-600 transition-colors">
                  Đội ngũ Giảng viên
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-red-600 transition-colors">
                  Phương thức Tuyển sinh 2026
                </Link>
              </li>
              <li>
                <Link href="#partners" className="hover:text-red-600 transition-colors">
                  Hợp tác Doanh nghiệp Tech
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-red-600 transition-colors">
                  CLB Lập trình &amp; AI FIT
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-red-600 transition-colors">
                  Liên hệ &amp; Bản đồ khuôn viên
                </Link>
              </li>
            </ul>
          </div>

          {/* Cột 4: Bản tin Khoa CNTT (col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-base md:text-lg text-slate-900 mb-4 font-[family-name:var(--font-plus-jakarta-sans)]">
              Bản tin Khoa CNTT
            </h4>
            <p className="text-xs md:text-sm text-slate-500 mb-3.5 leading-relaxed">
              Đăng ký nhận thông tin tuyển sinh 2026, học bổng và sự kiện công nghệ mới nhất.
            </p>

            {subscribed ? (
              <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg text-xs flex items-center gap-2">
                <HiCheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Đã ghi nhận email của bạn! Cảm ơn bạn.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Nhập email của bạn..."
                  required
                  className="w-full px-3.5 py-2.5 text-xs md:text-sm bg-[#f8fafc] border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-900 placeholder:text-slate-400"
                />
                <button
                  type="submit"
                  className="w-full bg-[#1d4ed8] hover:bg-[#1e40af] active:scale-[0.99] text-white font-semibold py-2.5 px-4 rounded-lg text-xs md:text-sm transition-all duration-200 cursor-pointer shadow-xs font-[family-name:var(--font-plus-jakarta-sans)]"
                >
                  Đăng ký ngay
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom copyright & links */}
        <div className="border-t border-slate-100 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p className="text-center sm:text-left">
            © 2026 Khoa Công nghệ Thông tin - Trường Đại học Hải Phòng (FIT - HPU). Mọi quyền được bảo lưu.
          </p>
          <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 font-[family-name:var(--font-plus-jakarta-sans)]">
            <Link href="/privacy" className="hover:text-slate-900 transition-colors">
              Quy chế bảo mật
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-slate-900 transition-colors">
              Điều khoản sử dụng
            </Link>
            <span>•</span>
            <Link href="https://dhhp.edu.vn" className="hover:text-slate-900 transition-colors">
              Cổng nội bộ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}