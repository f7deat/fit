"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="h-[500px]"
      >
        <SwiperSlide>
          <div className="bg-blue-100 text-center py-20 h-full flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold text-blue-700">
              Welcome to the Faculty of Information Technology
            </h1>
            <p className="text-lg text-gray-700 mt-4">
              Empowering the next generation of technology leaders.
            </p>
            <Image
              src="/hero-image.jpg"
              alt="Students learning"
              width={600}
              height={400}
              className="mx-auto mt-8"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-blue-100 text-center py-20 h-full flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold text-blue-700">
              Explore Our Cutting-Edge Programs
            </h1>
            <p className="text-lg text-gray-700 mt-4">
              From Artificial Intelligence to Cybersecurity.
            </p>
            <Image
              src="/programs-image.jpg"
              alt="Programs"
              width={600}
              height={400}
              className="mx-auto mt-8"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-blue-100 text-center py-20 h-full flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold text-blue-700">
              Join Our Vibrant Community
            </h1>
            <p className="text-lg text-gray-700 mt-4">
              Collaborate, innovate, and grow with us.
            </p>
            <Image
              src="/community-image.jpg"
              alt="Community"
              width={600}
              height={400}
              className="mx-auto mt-8"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}