/* eslint-disable @next/next/no-img-element */
"use client";

import { apiArticleList } from "@/services/article";
import { useEffect, useState } from "react";
import Link from "next/link";
import dayjs from "dayjs";
import { FaCalendar, FaEye } from "react-icons/fa6";

interface ArticleListItem {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
  view: number;
  createdDate: string;
  url: string;
}

const RelatedArticles: React.FC = () => {
  const [relatedArticles, setRelatedArticles] = useState<ArticleListItem[]>([]);

  useEffect(() => {
    apiArticleList({ current: 1, pageSize: 8 })
      .then((res) => setRelatedArticles(res.data.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="space-y-4">
      {relatedArticles.map((article: ArticleListItem) => (
        <div
          key={article.id}
          className="flex items-start gap-4 p-4 rounded-lg shadow bg-white transform transition-transform duration-300 hover:scale-105"
        >
          {/* Left: Thumbnail */}
          <img
            src={article.thumbnail}
            alt={article.title}
            className="w-24 h-24 object-cover rounded-md"
          />

          {/* Right: Article Details */}
          <div className="flex-1">
            <Link href={`/article/${article.url}`}>
              <h3 className="text-lg font-bold line-clamp-2">{article.title}</h3>
            </Link>
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
  );
};

export default RelatedArticles;