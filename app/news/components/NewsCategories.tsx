import Link from "next/link";
import { FiStar } from "react-icons/fi";

const CATEGORIES = [
  {
    id: 1,
    label: "Tin tức và sự kiện",
    href: "/article",
  },
  {
    id: 2,
    label: "Hoạt động của Chi bộ và Công đoàn",
    href: "/category/579",
  },
  {
    id: 3,
    label: "Hoạt động sinh viên, liên chi đoàn",
    href: "/category/577",
  },
];

const NewsCategories: React.FC = () => {
  return (
    <aside
      className="bg-white"
      style={{
        width: "350px",
        maxWidth: "100%",
        boxShadow: "0 2px 10px rgba(0,0,0,0.07)",
        padding: "24px 24px 8px",
      }}
    >
      <div className="flex items-center gap-3 mb-5">
        <span className="flex flex-col gap-1 shrink-0">
          <span className="block w-6 h-[1.9px] bg-[#b71c4c]" />
          <span className="block w-3.5 h-[1px] ml-2.5 bg-[#b71c4c]" />
        </span>
        <h3 className="m-0 text-[#1a1a2e] text-base font-bold tracking-[0.02em] uppercase">
          Tin tức
        </h3>
      </div>

      <ul className="list-none p-0 m-0">
        {CATEGORIES.map((category, index) => (
          <li
            key={category.id}
            className={index < CATEGORIES.length - 1 ? "border-b border-[#f0f0f0]" : ""}
          >
            <Link
              href={category.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 py-[13px] text-sm no-underline transition-all duration-200 text-[#555] hover:text-[#b71c4c] hover:pl-[10px]"
            >
              <FiStar
                size={13}
                className="shrink-0 text-[#ccc] transition-colors duration-200 group-hover:text-[#b71c4c]"
              />
              <span className="leading-6">{category.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default NewsCategories;