"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { BiCode } from "react-icons/bi";

export default function HeroSection() {
  return (
    <section id="home" className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
      >
        <SwiperSlide>
          <div className="text-center h-[800px] flex flex-col justify-center items-center relative ">
            <div className="bg-[rgba(0,22,47,0.92)] absolute inset-0">
              <div className="h-full flex flex-col justify-center items-center text-white">
                <div className="mb-2">
                <BiCode className="text-6xl" />
                </div>
                <div className="text-red-700 font-bold text-xl mb-6 uppercase">
                You can do IT, we are ready to accompany
                </div>
                <h1 className="text-6xl font-bold text-white uppercase mb-2">
                  Khoa Công Nghệ Thông Tin
                </h1>
                <p className="text-lg text-white mt-4">
                Truyền đạt kiến thức vững chắc để sinh viên vào đời vững vàng!
                </p>
                <button className="mt-6 bg-red-700 hover:bg-red-600 text-white font-bold py-4 px-8 rounded transition">
                  Liên hệ với chúng tôi
                </button>
              </div>
            </div>
            <Image
              src="/hero-bg.png"
              alt="Students learning"
              width={1920}
              height={800}
              className="mx-auto mt-8"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}