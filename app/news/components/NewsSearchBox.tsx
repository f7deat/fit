"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ConfigProvider, Input } from "antd";

const antdTheme = {
  token: {
    colorPrimary: "#b71c4c",
    borderRadius: 0,
    borderRadiusLG: 0,
    borderRadiusSM: 0,
  },
  components: {
    Input: {
      borderRadius: 0,
      activeShadow: "none",
      hoverBorderColor: "#b71c4c",
      activeBorderColor: "#b71c4c",
    },
  },
};
const NewsSearchBox: React.FC = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [query, setQuery] = useState("");

  useEffect(() => {
    setQuery(searchParams.get("query") ?? "");
  }, [searchParams]);

  const handleSearch = (value: string) => {
    const nextQuery = value.trim();
    const params = new URLSearchParams(searchParams.toString());

    if (nextQuery) {
      params.set("query", nextQuery);
    } else {
      params.delete("query");
    }

    params.set("page", "1");
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="news-search-box bg-white mx-auto lg:mx-0 w-full max-w-[350px] h-[107px] flex items-center px-5 shadow-[0_2px_10px_rgba(0,0,0,0.07)] transition-shadow duration-300 hover:shadow-[0_6px_20px_rgba(0,0,0,0.11)]">
      <ConfigProvider theme={antdTheme}>
        <Input.Search
          placeholder="Tìm kiếm bài viết..."
          enterButton
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onSearch={handleSearch}
          size="large"
          className="w-full"
        />
      </ConfigProvider>
    </div>
  );
}

export default NewsSearchBox;