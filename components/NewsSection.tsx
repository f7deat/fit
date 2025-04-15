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

export default function NewsSection() {
  const [articles, setArticles] = useState<ArticleListItem[]>([]);
  const [articles1, setArticles1] = useState<ArticleListItem[]>([]);
  const [articles2, setArticles2] = useState<ArticleListItem[]>([]);
  const [articles3, setArticles3] = useState<ArticleListItem[]>([]);
  const [articles4, setArticles4] = useState<ArticleListItem[]>([]);

  useEffect(() => {
    apiArticleList({ current: 1, pageSize: 5, categoryId: 575 })
      .then((res) => setArticles(res.data.data))
      .catch((err) => console.error(err));
    apiArticleList({ current: 1, pageSize: 5, categoryId: 576 })
      .then((res) => setArticles1(res.data.data))
      .catch((err) => console.error(err));
    apiArticleList({ current: 1, pageSize: 5, categoryId: 577 })
      .then((res) => setArticles2(res.data.data))
      .catch((err) => console.error(err));
    apiArticleList({ current: 1, pageSize: 5, categoryId: 578 })
      .then((res) => setArticles3(res.data.data))
      .catch((err) => console.error(err));
    apiArticleList({ current: 1, pageSize: 5, categoryId: 579 })
      .then((res) => setArticles4(res.data.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section id="news" className="py-16">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8" data-aos="fade-up">
          <div>
            <div data-aos="fade-up" className="mb-4">
              <div className="text-red-700 font-bold text-xs">OUR BLOG</div>
              <h2 className="text-xl font-extrabold mb-2" style={quicksand.style}>
                Công tác Đào tạo, khảo thí
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
                    className="flex items-start mb-1 gap-4 p-4 rounded-lg shadow bg-white transform transition-transform duration-300 hover:scale-105"
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

          {/* Second Column: Other Categories */
            <div>
              <div data-aos="fade-up" className="mb-4">
                <div className="text-red-700 font-bold text-xs">OUR BLOG</div>
                <h2 className="text-xl font-extrabold mb-2" style={quicksand.style}>
                  Hoạt động khoa học công nghệ, hợp tác quốc tế
                </h2>
              </div>
              <div className="md:flex gap-4">
                {/* Left Column: First Article with Thumbnail */}
                <div className="flex-1">
                  {articles1.slice(0, 1).map((article) => (
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
                  {articles1.slice(1).map((article) => (
                    <div
                      key={article.id}
                      className="flex items-start gap-4 p-4 mb-1 rounded-lg shadow bg-white transform transition-transform duration-300 hover:scale-105"
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
            </div>}

          {/* Repeat for other categories */}
          <div>
            <div data-aos="fade-up" className="mb-4">
              <div className="text-red-700 font-bold text-xs">OUR BLOG</div>
              <h2 className="text-xl font-extrabold mb-2" style={quicksand.style}>
                Hoạt động sinh viên, liên chi đoàn
              </h2>
            </div>
            <div className="md:flex gap-4">
              {/* Left Column: First Article with Thumbnail */}
              <div className="flex-1">
                {articles2.slice(0, 1).map((article) => (
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
                {articles2.slice(1).map((article) => (
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

          {/* Repeat for other categories */}
          <div>
            <div data-aos="fade-up" className="mb-4">
              <div className="text-red-700 font-bold text-xs">OUR BLOG</div>
              <h2 className="text-xl font-extrabold mb-2" style={quicksand.style}>
                Hoạt động thực tập, thực tế
              </h2>
            </div>
            <div className="md:flex gap-4">
              {/* Left Column: First Article with Thumbnail */}
              <div className="flex-1">
                {articles3.slice(0, 1).map((article) => (
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
                {articles3.slice(1).map((article) => (
                  <div
                    key={article.id}
                    className="flex items-start mb-1 gap-4 p-4 rounded-lg shadow bg-white transform transition-transform duration-300 hover:scale-105"
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

          {/* Repeat for other categories */}
          <div>
            <div data-aos="fade-up" className="mb-4">
              <div className="text-red-700 font-bold text-xs">OUR BLOG</div>
              <h2 className="text-xl font-extrabold mb-2" style={quicksand.style}>
                Hoạt động Chi bộ, công đoàn
              </h2>
            </div>
            <div className="md:flex gap-4">
              {/* Left Column: First Article with Thumbnail */}
              <div className="flex-1">
                {articles4.slice(0, 1).map((article) => (
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
                {articles4.slice(1).map((article) => (
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

        </div>
      </div>
    </section>
  );
}