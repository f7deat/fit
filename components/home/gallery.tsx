/* eslint-disable @next/next/no-img-element */
"use client";

import { apiGalleryList } from "@/services/gallery";
import { Quicksand } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiArrowFromLeft, BiArrowToRight } from "react-icons/bi";

const quicksand = Quicksand({ subsets: ["latin-ext"] });

const Gallery: React.FC = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        apiGalleryList({ current: 1, pageSize: 3 }).then((response) => setData(response.data.data));
    }, []);

    return (
        <div className="px-4">
            <div data-aos="fade-up">
                <div className="text-red-700 text-center font-bold text-sm uppercase mb-2">Multimedia</div>
                <h2 className="text-3xl font-extrabold text-center mb-3" style={quicksand.style}>Thư viện ảnh</h2>
                <div className="title-separator"></div>
            </div>
            <div className="container mx-auto mt-10 mb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {data.map((item: { id: number; title: string; thumbnail: string; createdAt: string; updatedAt: string }, index: number) => (
                        <Link key={index} href={`/gallery/${item.id}`}>
                            <div
                                className="bg-gray-200 h-64 flex items-center justify-center overflow-hidden group relative"
                            >
                                <img
                                    src={item.thumbnail}
                                    alt={`Gallery Image ${index + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="font-medium text-white text-lg">{item.title}</div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="flex justify-center mb-10 2xl:mb-20">
                <Link href="/gallery" className="bg-[#bf0a30] text-white uppercase px-6 py-2 font-semibold text-sm flex gap-2 items-center hover:bg-red-600"><BiArrowFromLeft /> Xem tất cả <BiArrowToRight /></Link>
            </div>
        </div>
    );
};

export default Gallery;