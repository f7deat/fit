/* eslint-disable @next/next/no-img-element */

"use client";

import Breadcrumb from "@/components/common/breadcrumb";
import { apiLecturerList } from "@/services/lecturer";
import { Quicksand } from "next/font/google";
import { useState, useEffect } from "react";

const quicksand = Quicksand({ subsets: ["latin-ext"] });

interface LecturerListItem {
    id: number;
    avatar: string;
    academicDegree: string;
    academicTitle: string;
    dateOfBirth: string;
    email: string;
    name: string;
    phoneNumber: number;
    degreeCode: string;
    titleCode: string;
    userName: string;
}

const Page: React.FC = () => {
    const [lecturers, setLecturers] = useState<LecturerListItem[]>([]);

    // Load giả dữ liệu giảng viên
    useEffect(() => {
        const fetchLecturers = async () => {
            try {
                const response = await apiLecturerList();
                const data = response.data.data;
                setLecturers(data);
            } catch (error) {
                console.error("Error fetching lecturers:", error);
            }
        };
        fetchLecturers();
    }, []);

    return (
        <main>
            <Breadcrumb title="Đội ngũ giảng viên" items={[]} />
            <div data-aos="fade-up" className="md:mt-8 mt-4">
                <div className="text-red-700 text-center font-bold text-sm">OUR TEAM</div>
                <h2 className="text-3xl font-extrabold text-center mb-2" style={quicksand.style}>
                    Đội ngũ giảng viên
                </h2>
                <div className="title-separator"></div>
            </div>
            <div className="container mx-auto px-4 py-8 lg:px-8 lg:py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                    {lecturers.map((item) => (
                        <div key={item.id}>
                            <div
                                key={item.id}
                                className="relative bg-white rounded overflow-hidden shadow group"
                            >
                                <img
                                    src={item.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=random&color=fff`}
                                    alt={`${item.degreeCode || ''}${item.degreeCode && item.titleCode ? '/' : ''}${item.titleCode || ''}.${item.name}`}
                                    className="w-full h-80 object-cover"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-start justify-start p-4 group-hover:rotate-[360deg]">
                                    <div className="absolute top-0 left-0 m-3 flex flex-col space-y-2 z-10">
                                        <a
                                            href="#"
                                            className="w-9 h-9 flex items-center justify-center bg-white rounded text-slate-900 hover:bg-red-600 hover:text-white transition"
                                        >
                                            <svg
                                                className="w-4 h-4"
                                                fill="currentColor"
                                                viewBox="0 0 320 512"
                                            >
                                                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06H293V6.26S259.5 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                                            </svg>
                                        </a>
                                        <a
                                            href="#"
                                            className="w-9 h-9 flex items-center justify-center bg-white rounded text-slate-900 hover:bg-red-600 hover:text-white transition"
                                        >
                                            <svg
                                                className="w-4 h-4"
                                                fill="currentColor"
                                                viewBox="0 0 512 512"
                                            >
                                                <path d="M475.5 39.4L278.6 241.1 480.2 471H367.3L229.8 310.9 73.3 471H32L214.7 280.5 16.7 41H132.2l127.9 145.3L417 41h58.5zM364.4 432h43.7L147.6 80h-43.9L364.4 432z" />
                                            </svg>
                                        </a>
                                        <a
                                            href="#"
                                            className="w-9 h-9 flex items-center justify-center bg-white rounded text-slate-900 hover:bg-red-600 hover:text-white transition"
                                        >
                                            <svg
                                                className="w-4 h-4"
                                                fill="currentColor"
                                                viewBox="0 0 448 512"
                                            >
                                                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9S160.5 370.9 224.1 370.9 339 319.6 339 256 287.7 141 224.1 141zm0 186.6c-39.6 0-71.7-32.1-71.7-71.7S184.5 184.2 224.1 184.2 295.8 216.3 295.8 256s-32.1 71.6-71.7 71.6zm146.4-194.3c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zM398.8 80C378.1 80 358.5 90.4 345 104.9 331.5 119.4 321 139 321 159.7V352c0 20.7 10.5 40.3 24 54.8C358.5 421.6 378.1 432 398.8 432H49.2C69.9 432 89.5 421.6 103 406.1 116.5 391.6 127 372 127 351.3V160.7c0-20.7-10.5-40.3-24-54.8C89.5 90.4 69.9 80 49.2 80H398.8M398.8 48H49.2C21.7 48 0 69.7 0 97.2V414.8C0 442.3 21.7 464 49.2 464H398.8C426.3 464 448 442.3 448 414.8V97.2C448 69.7 426.3 48 398.8 48z" />
                                            </svg>
                                        </a>
                                        <a
                                            href="#"
                                            className="w-9 h-9 flex items-center justify-center bg-white rounded text-slate-900 hover:bg-red-600 hover:text-white transition"
                                        >
                                            <svg
                                                className="w-4 h-4"
                                                fill="currentColor"
                                                viewBox="0 0 448 512"
                                            >
                                                <path d="M100.28 448H7.4V149.1h92.88zm-46.44-339a53.41 53.41 0 1 1 53.4-53.4 53.4 53.4 0 0 1-53.4 53.4zM447.9 448h-92.4V302.4c0-34.7-12.4-58.4-43.4-58.4-23.6 0-37.6 15.8-43.8 31V448h-92.4V149.1h88.7v40.9h1.3c12.4-23.4 42.6-48 87.7-48 64.3 0 112.3 42 112.3 132.3V448z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <a href={`https://user.dhhp.edu.vn/profile/${item.userName}`}>
                                <div className="pt-8 pb-4 px-4 bg-slate-900 text-white text-center">
                                    <h3 className="text-lg font-bold hover:text-red-600">{
                                        `${item.titleCode || ''}${item.titleCode && item.degreeCode ? '.' : ''}${item.degreeCode || ''} ${item.name || 'N/A'}`
                                    }</h3>
                                    <p className="text-sm opacity-80">{item.email || "-"}</p>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Page;
