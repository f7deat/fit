"use client";

import { Quicksand } from "next/font/google";
import { BiCodeBlock } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { FaBrain, FaCode, FaGamepad } from "react-icons/fa6";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const quicksand = Quicksand({ subsets: ["latin-ext"] });

export default function ProgramsSection() {
  const programs = [
    {
      name: "Thiết kế Game và Multimedia",
      url: "https://tuyensinh.dhhp.edu.vn/academic-program/thiet-ke-game-va-multimedia-clc",
      icon: <FaGamepad className="text-red-700 text-2xl" />
    },
    {
      name: "Trí tuệ nhân tạo và khoa học dữ liệu",
      url: "https://tuyensinh.dhhp.edu.vn/academic-program/tri-tue-nhan-tao-va-koa-hoc-du-lieu",
      icon: <FaBrain className="text-red-700 text-2xl" />
    },
    {
      name: "Công nghệ thông tin",
      url: "https://tuyensinh.dhhp.edu.vn/academic-program/cong-nghe-thong-tin",
      icon: <FaCode className="text-red-700 text-2xl" />
    }
  ];
  return (
    <section id="programs" className="-mt-20 container mx-auto max-w-7xl relative mb-20">
      <div className="absolute inset-0">
        <Swiper
          autoplay
          modules={[Autoplay]}
          slidesPerView={1} spaceBetween={30}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
          className="mySwiper">
          {programs.map((program, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-8 rounded-lg flex gap-4 relative overflow-hidden">
                <div className="absolute -bottom-6 -right-10">
                  <BiCodeBlock className="text-gray-200 text-[150px] -rotate-45" />
                </div>
                <div className="w-20">
                  <div className="w-full h-16 bg-red-200 flex items-center justify-center text-white text-2xl font-bold rounded-t">
                    {program.icon}
                  </div>
                  <div className="p-1 bg-red-700 text-white text-center text-sm font-bold rounded-b">{index + 1}</div>
                </div>
                <div className="flex-1">
                  <div className="font-bold text-2xl mb-4" style={quicksand.style}>{program.name}</div>
                  <a href={program.url} target="_blank" rel="noopener noreferrer" className="text-[#bf0a30] hover:text-red-700 transition-colors duration-300">
                    <span className="font-bold pb-1 border-b-2 border-[#bf0a30]">Tìm hiểu thêm <BsArrowRight className="inline" /></span>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}