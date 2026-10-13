"use client";

interface Partner {
  name: string;
  renderLogo: () => React.ReactNode;
}

const partners: Partner[] = [
  // Hàng 1
  {
    name: "NVIDIA",
    renderLogo: () => (
      <span className="font-black text-lg md:text-xl tracking-tight text-slate-900 group-hover:text-[#76B900] transition-colors">
        NVIDIA
      </span>
    ),
  },
  {
    name: "intel.",
    renderLogo: () => (
      <span className="font-bold text-xl md:text-2xl tracking-tighter text-[#0071C5] font-sans">
        intel<span className="text-[#0071C5]">.</span>
      </span>
    ),
  },
  {
    name: "DELL",
    renderLogo: () => (
      <span className="font-black text-lg md:text-xl tracking-widest text-[#0076CE]">
        DELL
      </span>
    ),
  },
  {
    name: "SONY",
    renderLogo: () => (
      <span className="font-black text-lg md:text-xl tracking-[0.25em] text-slate-900 font-serif">
        SONY
      </span>
    ),
  },
  {
    name: "LG",
    renderLogo: () => (
      <div className="flex items-center gap-1.5 text-[#A50034]">
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M10 8v8h5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="8" cy="11" r="1.2" fill="currentColor" />
        </svg>
        <span className="font-extrabold text-xl tracking-wider">LG</span>
      </div>
    ),
  },
  {
    name: "HUAWEI",
    renderLogo: () => (
      <div className="flex items-center gap-1.5 text-slate-900 group-hover:text-[#ED1C24] transition-colors">
        <svg className="w-4 h-4 fill-[#ED1C24]" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z" />
        </svg>
        <span className="font-extrabold text-sm md:text-base tracking-widest">HUAWEI</span>
      </div>
    ),
  },
  // Hàng 2
  {
    name: "Google",
    renderLogo: () => (
      <div className="font-medium text-lg md:text-xl font-sans tracking-tight">
        <span className="text-[#4285F4]">G</span>
        <span className="text-[#EA4335]">o</span>
        <span className="text-[#FBBC05]">o</span>
        <span className="text-[#4285F4]">g</span>
        <span className="text-[#34A853]">l</span>
        <span className="text-[#EA4335]">e</span>
      </div>
    ),
  },
  {
    name: "Microsoft",
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <div className="grid grid-cols-2 gap-0.5 w-4 h-4 shrink-0">
          <div className="bg-[#F25022]"></div>
          <div className="bg-[#7FBA00]"></div>
          <div className="bg-[#00A4EF]"></div>
          <div className="bg-[#FFB900]"></div>
        </div>
        <span className="font-semibold text-base md:text-lg text-slate-700">Microsoft</span>
      </div>
    ),
  },
  {
    name: "amazon",
    renderLogo: () => (
      <div className="relative font-bold text-lg md:text-xl text-slate-900 tracking-tight">
        amazon
        <span className="absolute -bottom-1 left-0 right-0 h-1 bg-[#FF9900] rounded-full transform scale-x-75"></span>
      </div>
    ),
  },
  {
    name: "SAMSUNG",
    renderLogo: () => (
      <span className="font-black text-base md:text-lg tracking-widest text-[#1428A0]">
        SAMSUNG
      </span>
    ),
  },
  {
    name: "CISCO",
    renderLogo: () => (
      <div className="flex flex-col items-center">
        <div className="flex items-end gap-0.5 h-2.5 mb-0.5 text-[#049FD9]">
          <span className="w-0.5 h-1.5 bg-current rounded-full"></span>
          <span className="w-0.5 h-2.5 bg-current rounded-full"></span>
          <span className="w-0.5 h-1.5 bg-current rounded-full"></span>
        </div>
        <span className="font-bold text-sm md:text-base tracking-widest text-[#049FD9]">
          CISCO
        </span>
      </div>
    ),
  },
  {
    name: "ORACLE",
    renderLogo: () => (
      <span className="font-black text-base md:text-lg tracking-widest text-[#F80000]">
        ORACLE
      </span>
    ),
  },
];

export default function PartnersSection() {
  return (
    <section id="partners" className="py-14 md:py-16 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
          <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-bold uppercase tracking-wider mb-3">
            MẠNG LƯỚI DOANH NGHIỆP
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-3 font-[family-name:var(--font-plus-jakarta-sans)]">
            Đối Tác Liên Kết &amp; Hợp Tác Công Nghệ
          </h2>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            Khoa CNTT - ĐH Hải Phòng liên kết chặt chẽ với các tập đoàn công nghệ toàn cầu và doanh nghiệp phần mềm hàng đầu trong đào tạo, thực tập và việc làm.
          </p>
        </div>

        {/* 12 Partner Cards Grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 md:gap-4 mt-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-slate-200 transition-all duration-300 flex items-center justify-center h-16 md:h-20 px-4 group cursor-default select-none"
            >
              {partner.renderLogo()}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}