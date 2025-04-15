/* eslint-disable @next/next/no-img-element */
"use client";

import { apiArticleList } from "@/services/article";
import dayjs from "dayjs";
import { Quicksand } from "next/font/google";
import Link from "next/link";
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

interface Category {
  id: number;
  title: string;
}

const categories: Category[] = [
  { id: 575, title: "Công tác Đào tạo, khảo thí" },
  { id: 576, title: "Hoạt động khoa học công nghệ, hợp tác quốc tế" },
  { id: 577, title: "Hoạt động sinh viên, liên chi đoàn" },
  { id: 578, title: "Hoạt động thực tập, thực tế" },
  { id: 579, title: "Hoạt động Chi bộ, công đoàn" },
  { id: 580, title: "Tuyển sinh" },
];

export default function NewsSection() {
  const [articlesByCategory, setArticlesByCategory] = useState<Record<number, ArticleListItem[]>>({});

  useEffect(() => {
    const fetchArticles = async () => {
      const promises = categories.map((category) =>
        apiArticleList({ current: 1, pageSize: 5, categoryId: category.id })
          .then((res) => ({ categoryId: category.id, data: res.data.data }))
          .catch((err) => {
            console.error(err);
            return { categoryId: category.id, data: [] };
          })
      );

      const results = await Promise.all(promises);
      const groupedArticles = results.reduce((acc, result) => {
        acc[result.categoryId] = result.data;
        return acc;
      }, {} as Record<number, ArticleListItem[]>);

      setArticlesByCategory(groupedArticles);
    };

    fetchArticles();
  }, []);

  const renderCategory = (category: Category) => {
    const articles = articlesByCategory[category.id] || [];
    return (
      <div key={category.id}>
        <div data-aos="fade-up" className="mb-4">
          <div className="text-red-700 font-bold text-xs">OUR BLOG</div>
          <h2 className="text-xl font-extrabold mb-2" style={quicksand.style}>
            {category.title}
          </h2>
        </div>
        <div className="md:flex gap-4">
          {/* Left Column: First Article with Thumbnail */}
          <div className="flex-1">
            {articles.slice(0, 1).map((article) => (
              <div
                key={article.id}
                className="relative rounded-lg mb-1 shadow overflow-hidden bg-white transform transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={article.thumbnail}
                  alt={article.title}
                  width={300}
                  height={250}
                  className="w-full h-52 object-cover"
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

          {/* Right Column: Other Articles */}
          <div className="flex-1">
            {articles.slice(1).map((article) => (
              <div
                key={article.id}
                className="flex items-start gap-4 mb-1 p-4 rounded-lg shadow bg-white transform transition-transform duration-300 hover:scale-105"
              >
                <div className="flex-1">
                  <Link href={`/article/${article.url}`}>
                    <h3 className="text-lg font-bold line-clamp-2" style={quicksand.style}>
                      {article.title}
                    </h3>
                  </Link>
                  <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
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
        </div>
      </div>
    );
  };

  return (
    <section id="news" className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8" data-aos="fade-up">
          {categories.map(renderCategory)}
        </div>
      </div>
    </section>
  );
}