"use client";

import { useState } from "react";
import {
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiArrowNarrowRight,
  HiOutlineShieldCheck,
  HiCheckCircle,
} from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa6";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    major: "all",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      return;
    }

    setLoading(true);

    // Xử lý Frontend (mô phỏng gửi form khi chưa có BE)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        major: "all",
        message: "",
      });
      // Tự động ẩn thông báo sau 6 giây
      setTimeout(() => setSubmitted(false), 6000);
    }, 700);
  };

  return (
    <section id="contact" className="py-14 md:py-18 bg-[#f8fafc] border-t border-slate-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Cột Trái: Vị Trí Khoa Công Nghệ Thông Tin */}
          <div className="lg:col-span-6" data-aos="fade-right">
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-bold uppercase tracking-wider mb-2.5">
              ĐỊA CHỈ &amp; KHUÔN VIÊN
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2.5 font-[family-name:var(--font-plus-jakarta-sans)]">
              Vị Trí Khoa Công Nghệ Thông Tin
            </h2>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              Tọa lạc tại trung tâm Khu A Trường Đại học Hải Phòng, cơ sở vật chất phòng máy C3 được trang bị hiện đại và đồng bộ.
            </p>

            {/* Google Map Container */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white h-[280px] md:h-[350px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.6043989960267!2d106.62390099999999!3d20.8072865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a7735d162afdb%3A0x70df39254ee1c357!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBI4bqjaSBQaMOybmc!5e0!3m2!1svi!2s!4v1743655123598!5m2!1svi!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="Bản đồ Khoa CNTT - Đại học Hải Phòng"
              />

              {/* Pin info nổi ở góc bản đồ */}
              <div className="absolute bottom-3 left-3 right-3 sm:right-auto bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-slate-200/80 shadow-md flex items-center gap-2.5 max-w-sm">
                <span className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                  <HiOutlineLocationMarker className="w-5 h-5" />
                </span>
                <div className="min-w-0">
                  <p className="font-bold text-xs text-slate-900 truncate">Tòa nhà C3 - FIT HPU</p>
                  <p className="text-[11px] text-slate-500 truncate">171 Phan Đăng Lưu, Kiến An, Hải Phòng</p>
                </div>
              </div>
            </div>

            {/* 3 Info Cards dưới bản đồ */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
              {/* Hotline */}
              <a
                href="tel:02253549277"
                className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:border-blue-400 hover:shadow-sm transition-all group flex items-center sm:items-start gap-3"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <HiOutlinePhone className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-semibold text-slate-500 uppercase">Hotline Tư Vấn</div>
                  <div className="text-xs font-bold text-slate-900 truncate mt-0.5">(02253) 549.277</div>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:kcntt@dhhp.edu.vn"
                className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:border-blue-400 hover:shadow-sm transition-all group flex items-center sm:items-start gap-3"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <HiOutlineMail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-semibold text-slate-500 uppercase">Email Học Vụ</div>
                  <div className="text-xs font-bold text-slate-900 truncate mt-0.5">kcntt@dhhp.edu.vn</div>
                </div>
              </a>

              {/* Cộng đồng Facebook */}
              <a
                href="https://facebook.com/fithpu"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:border-blue-400 hover:shadow-sm transition-all group flex items-center sm:items-start gap-3"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <FaFacebookF className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-semibold text-slate-500 uppercase">Cộng Đồng FIT</div>
                  <div className="text-xs font-bold text-slate-900 truncate mt-0.5">facebook.com/fithpu</div>
                </div>
              </a>
            </div>
          </div>

          {/* Cột Phải: Đăng Ký Tư Vấn Trực Tuyến */}
          <div className="lg:col-span-6" data-aos="fade-left">
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)] p-6 md:p-8">
              <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-bold uppercase tracking-wider mb-2.5">
                TUYỂN SINH &amp; KẾT NỐI 2026
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2 font-[family-name:var(--font-plus-jakarta-sans)]">
                Đăng Ký Tư Vấn Trực Tuyến
              </h2>
              <p className="text-xs md:text-sm text-slate-500 mb-6 leading-relaxed">
                Để lại thông tin để nhận tài liệu tuyển sinh, hướng dẫn chọn ngành và thông tin học bổng trực tiếp từ Ban Chủ nhiệm Khoa.
              </p>

              {/* Thông báo thành công */}
              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-start gap-3 animate-fadeIn">
                  <HiCheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-xs leading-relaxed">
                    <p className="font-bold text-sm">Gửi đăng ký thành công!</p>
                    <p className="mt-0.5 text-emerald-700">
                      Cảm ơn bạn đã quan tâm. Ban Tư vấn Tuyển sinh Khoa CNTT sẽ liên hệ với bạn trong thời gian sớm nhất.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Họ và tên */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 font-[family-name:var(--font-plus-jakarta-sans)]">
                    Họ và tên thí sinh / phụ huynh <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Ví dụ: Nguyễn Văn An"
                    required
                    className="w-full px-3.5 py-2.5 text-sm bg-[#f8fafc] border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all text-slate-900 placeholder:text-slate-400"
                  />
                </div>

                {/* Grid 2 cột: SĐT / Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5 font-[family-name:var(--font-plus-jakarta-sans)]">
                      Số điện thoại / Zalo <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="0912 xxx xxx"
                      required
                      className="w-full px-3.5 py-2.5 text-sm bg-[#f8fafc] border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all text-slate-900 placeholder:text-slate-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5 font-[family-name:var(--font-plus-jakarta-sans)]">
                      Email liên hệ
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className="w-full px-3.5 py-2.5 text-sm bg-[#f8fafc] border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all text-slate-900 placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Ngành đào tạo quan tâm */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 font-[family-name:var(--font-plus-jakarta-sans)]">
                    Ngành đào tạo quan tâm
                  </label>
                  <select
                    name="major"
                    value={formData.major}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-sm bg-[#f8fafc] border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all text-slate-900 cursor-pointer"
                  >
                    <option value="all">Tất cả các ngành đào tạo Khoa CNTT</option>
                    <option value="it">Công nghệ Thông tin</option>
                    <option value="ai">Trí tuệ nhân tạo &amp; KH Dữ liệu</option>
                    <option value="game">Thiết kế Game &amp; Multimedia</option>
                    <option value="se">Kỹ thuật Phần mềm</option>
                    <option value="security">An toàn Thông tin &amp; Mạng</option>
                  </select>
                </div>

                {/* Câu hỏi hoặc nội dung */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 font-[family-name:var(--font-plus-jakarta-sans)]">
                    Câu hỏi hoặc nội dung cần tư vấn
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Nhập câu hỏi về phương thức xét tuyển, điểm chuẩn, cơ hội việc làm..."
                    className="w-full px-3.5 py-2.5 text-sm bg-[#f8fafc] border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all text-slate-900 placeholder:text-slate-400 resize-none"
                  />
                </div>

                {/* Nút Submit đỏ */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#f63a35] hover:bg-[#ea3833] active:scale-[0.99] text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-all duration-200 disabled:opacity-70 cursor-pointer text-sm font-[family-name:var(--font-plus-jakarta-sans)]"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Đang gửi thông tin...
                    </span>
                  ) : (
                    <>
                      <span>Gửi thông tin đăng ký tư vấn</span>
                      <HiArrowNarrowRight className="w-4 h-4 ml-1" />
                    </>
                  )}
                </button>

                {/* Security footnote */}
                <div className="flex items-center justify-center gap-1.5 text-[12px] text-slate-500 pt-1">
                  <HiOutlineShieldCheck className="w-4 h-4 text-[#1d4ed8] shrink-0" />
                  <span>Thông tin được bảo mật theo quy chế tuyển sinh Trường Đại học Hải Phòng</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}