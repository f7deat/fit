"use client";

import { ConfigProvider, Pagination } from "antd";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const paginationTheme = {
  token: {
    colorPrimary: "#b71c4c",
    colorPrimaryHover: "#9a1840",
    borderRadius: 0,
  },
};

type Props = {
  currentPage: number;
  totalItems: number;
  pageSize: number;
};

const NewsPagination: React.FC<Props> = ({
  currentPage,
  totalItems,
  pageSize,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(page));
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="mt-10 news-pagination">
      <ConfigProvider theme={paginationTheme}>
        <Pagination
          current={currentPage}
          total={totalItems}
          pageSize={pageSize}
          onChange={handleChange}
          showSizeChanger={false}
        />
      </ConfigProvider>
    </div>
  );
}

export default NewsPagination;