/* eslint-disable @next/next/no-img-element */

"use client";

import Breadcrumb from "@/components/common/breadcrumb";
import { apiArticleList } from "@/services/article";
import dayjs from "dayjs";
import { Quicksand } from "next/font/google";
import Link from "next/link";
import { FaCalendar, FaEye } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

const quicksand = Quicksand({ subsets: ["latin-ext"] });

interface ArticleListItem {
    id: number;
    thumbnail: string;
    title: string;
    description: string;
    view: number;
    createdDate: string;
    url: string;
}

const Page: React.FC = () => {
    const [articles, setArticles] = useState<ArticleListItem[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchArticles = async () => {
            const response = await apiArticleList({ current: currentPage, pageSize: 12 });
            setArticles(response.data.data);
            setTotalPages(response.data.totalPages); // Assuming the API provides total pages
        };

        fetchArticles();
    }, [currentPage]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <main>
            <Breadcrumb
                title="Bài viết"
                items={[
                    {
                        label: "Trang chủ",
                        href: "/",
                    },
                    {
                        label: "Bài viết",
                        href: `/article`,
                    },
                ]}
            />
            <div className="container mx-auto px-4 py-8 lg:px-8 lg:py-12">
                <div data-aos="fade-up">
                    <div className="text-red-700 text-center font-bold text-sm">OUR BLOG</div>
                    <h2 className="text-3xl font-extrabold text-center mb-2" style={quicksand.style}>
                        Tin tức và Sự kiện
                    </h2>
                    <div className="title-separator"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8" data-aos="fade-up">
                    {articles.map((article) => (
                        <div
                            key={article.id}
                            className="relative rounded-lg shadow-md overflow-hidden bg-white transform transition-transform duration-300 hover:scale-105"
                        >
                            <img
                                src={article.thumbnail}
                                alt={article.title}
                                width={300}
                                height={250}
                                className="w-full h-64 object-cover"
                                loading="lazy"
                            />
                            <div className="p-4">
                                <Link href={`/article/${article.url}`}>
                                    <h3 className="text-xl font-bold line-clamp-2" style={quicksand.style}>
                                        {article.title}
                                    </h3>
                                </Link>
                                <p className="text-gray-500 mt-2 line-clamp-3">{article.description}</p>
                                <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                                    <span className="flex gap-1 items-center">
                                        <FaCalendar /> {dayjs(article.createdDate).format("DD/MM/YYYY")}
                                    </span>
                                    <span className="flex gap-1 items-center">
                                        {article.view}
                                        <FaEye />
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-8">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`px-4 py-2 mx-1 rounded ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed flex gap-1 items-center justify-center font-medium" : "bg-red-600 cursor-pointer text-white hover:bg-red-500 flex gap-1 items-center justify-center font-medium"
                            }`}
                    >
                        <BiLeftArrow /> Trang trước
                    </button>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(index + 1)}
                            className={`px-4 py-2 mx-1 rounded ${currentPage === index + 1 ? "bg-red-600 text-white" : "bg-gray-200 hover:bg-gray-300"
                                }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`px-4 py-2 mx-1 rounded ${currentPage === totalPages ? "bg-gray-300 cursor-pointer cursor-not-allowed" : "bg-red-600 text-white hover:bg-red-500 flex gap-1 items-center justify-center font-medium"
                            }`}
                    >
                        Trang sau <BiRightArrow />
                    </button>
                </div>
            </div>
        </main>
    );
};

export default Page;