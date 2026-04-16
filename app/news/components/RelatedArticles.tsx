import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";
import { BsEye } from "react-icons/bs";
import { BiCalendar } from "react-icons/bi";
import { apiGetNewsList } from "@/services/news";
import { type NewsItem } from "@/types/news"
import { NewsListResponse } from "@/types/api/news";
const safeImg = (raw: string): string => {
  try {
    const index = raw.lastIndexOf("/");
    return raw.slice(0, index + 1) + encodeURIComponent(raw.slice(index + 1));
  } catch {
    return raw;
  }
};

type Props = {
  currentSlug: string;
};

const RelatedArticles: React.FC<Props> = async ({ currentSlug }) => {
  const response = await apiGetNewsList<NewsListResponse>({
    current: 1,
    pageSize: 8,
    categoryId: 575,
  });

  const relatedArticles = response.succeeded
    ? response.data.filter((article: NewsItem) => article.url !== currentSlug)
    : [];

  return (
    <div className="space-y-4">
      {relatedArticles.map((article: NewsItem) => (
        <div
          key={article.id}
          className="flex items-start gap-4 p-4 rounded-lg shadow bg-white transition-transform duration-300 hover:scale-[1.02]"
        >
          <div className="relative w-24 h-24 shrink-0 overflow-hidden rounded-md">
            <div className="relative w-24 h-24">
              <img
                src={safeImg(article.thumbnail)}
                alt={article.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <Link href={`/news/${article.url}`}>
              <h3 className="text-base font-bold line-clamp-2 hover:text-red-700">
                {article.title}
              </h3>
            </Link>

            <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
              <span className="flex gap-1 items-center">
                <BiCalendar />
                {dayjs(article.createdDate).format("DD/MM/YYYY")}
              </span>
              <span className="flex gap-1 items-center">
                {article.view}
                <BsEye />
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RelatedArticles;