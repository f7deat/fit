/* eslint-disable @next/next/no-img-element */
"use client";

import { apiArticleList } from "@/services/article";
import dayjs from "dayjs";
import { Quicksand } from "next/font/google";
import { useEffect, useState } from "react";
import { FaCalendar, FaEye } from "react-icons/fa6";

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

export default function NewsSection() {

  const [articles, setArticles] = useState<ArticleListItem[]>([]);

  useEffect(() => {
    apiArticleList({ current: 1, pageSize: 3 }).then((res) => setArticles(res.data.data)).catch((err) => console.error(err));
  }, [])

  return (
    <section id="news" className="py-16 px-8">
      <div className="container mx-auto max-w-7xl">
        <div data-aos="fade-up">
          <div className="text-red-700 text-center font-bold text-sm">OUR BLOG</div>
          <h2 className="text-3xl font-extrabold text-center mb-2" style={quicksand.style}>Tin tức và Sự kiện</h2>
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
                <a href={`https://dhhp.edu.vn/post/${article.url}-${article.id}.html`} target="_blank" rel="noopener noreferrer" className="hover:text-red-700 transition-colors duration-300">
                  <h3 className="text-xl font-bold line-clamp-2" style={quicksand.style}>{article.title}</h3>
                </a>
                <p className="text-gray-500 mt-2 line-clamp-3">{article.description}</p>
                <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                  <span className="flex gap-1 items-center"><FaCalendar /> {dayjs(article.createdDate).format('DD/MM/YYYY')}</span>
                  <span className="flex gap-1 items-center">{article.view}<FaEye /></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}