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
          <div className="text-center h-[500px] md:h-[750px] flex flex-col justify-center items-center relative ">
            <div className="bg-[rgba(0,22,47,0.92)] absolute inset-0">
              <div className="h-full flex flex-col justify-center items-center text-white px-4">
                <div className="mb-2">
                <BiCode className="text-4xl md:text-8xl" />
                </div>
                <div className="text-[#bf0a30] font-bold text-sm md:text-xl mb-2 md:mb-6 uppercase" data-aos="fade-down">
                You can do IT, we are ready to accompany
                </div>
                <h1 className="text-xl md:text-6xl font-bold text-white uppercase mb-2" data-aos="zoom-out" data-aos-delay="200">
                  Khoa Công Nghệ Thông Tin
                </h1>
                <p className="text-lg text-white" data-aos="fade-up" data-aos-delay="400">
                Truyền đạt kiến thức vững chắc để sinh viên vào đời vững vàng!
                </p>
                <a href="https://zalo.me/g/ybwswy123" target="_blank" rel="noopener noreferrer" className="mt-6 bg-[#bf0a30] hover:bg-red-900 text-white font-bold py-2 md:py-4 px-8 rounded transition" data-aos="fade-up" data-aos-delay="600">
                  Liên hệ với chúng tôi
                </a>
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