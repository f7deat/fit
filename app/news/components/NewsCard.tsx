import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { FiChevronRight, FiClock, FiEye } from "react-icons/fi";

type NewsItem = {
  id: number;
  url: string;
  createdDate: string;
  title: string;
  description: string;
  thumbnail: string;
  view: number;
};

const safeImg = (raw: string): string => {
  try {
    const index = raw.lastIndexOf("/");
    return raw.slice(0, index + 1) + encodeURIComponent(raw.slice(index + 1));
  } catch {
    return raw;
  }
};

export default function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article
      className="relative bg-white w-full overflow-hidden group transition-transform duration-300 hover:scale-[1.02]"
      style={{
        minHeight: "422px",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 2px 10px rgba(0,0,0,0.07)",
      }}
    >
      <div className="overflow-hidden flex-shrink-0 h-[240px] relative">
        <img
          src={safeImg(item.thumbnail)}
          alt={item.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col flex-1 px-6 pt-4 pb-6">
        <div className="flex items-center gap-2 mb-3 text-[13px] text-gray-400 italic">
          <FiClock size={14} />
          <span>{dayjs(item.createdDate).format("DD/MM/YYYY")}</span>
        </div>

        <Link href={`/news/${item.url}`}>
          <h2 className="mb-3 line-clamp-2 text-xl font-bold text-[#2c2c2c] hover:text-[#b71c4c] transition-colors">
            {item.title}
          </h2>
        </Link>

        <p className="line-clamp-2 flex-1 text-sm text-gray-500 leading-7">
          {item.description}
        </p>

        <div className="flex items-center justify-between mt-4">
          <Link
            href={`/news/${item.url}`}
            className="inline-flex items-center gap-1.5 text-[#b71c4c] text-sm hover:text-[#9a1840]"
          >
            Xem thêm
            <FiChevronRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <div className="flex items-center gap-1 text-xs text-gray-400">
            <FiEye size={12} />
            <span>{item.view.toLocaleString("vi-VN")}</span>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 right-0 transition-all duration-500 ease-out group-hover:border-l-[88px] group-hover:border-b-[88px]"
        style={{
          width: 0,
          height: 0,
          borderLeft: "32px solid transparent",
          borderBottom: "32px solid #b71c4c",
        }}
      />
    </article>
  );
}