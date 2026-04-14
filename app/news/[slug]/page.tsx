import Breadcrumb from "@/components/common/breadcrumb";
import { apiGetNewsByUrl, apiGetMetaNews } from "@/services/news";
import type { Metadata } from "next";
import { Suspense } from "react";
import RelatedArticles from "../components/RelatedArticles";
import { RelatedArticlesSkeleton } from "../components/NewsSkeletons";
import dayjs from "dayjs";
import Image from "next/image";
import { BiCalendar } from "react-icons/bi";
import { BsEye } from "react-icons/bs";

type Props = {
  params: Promise<{ slug: string }>;
};

type ArticleDetail = {
  id: number;
  title: string;
  description: string;
  content: string;
  thumbnail: string;
  createdDate: string;
  view: number;
  url: string;
  modifiedDate: string;
};

const safeImg = (raw: string): string => {
  try {
    const index = raw.lastIndexOf("/");
    return raw.slice(0, index + 1) + encodeURIComponent(raw.slice(index + 1));
  } catch {
    return raw;
  }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  try {
    const meta = await apiGetMetaNews(slug);
    return {
      title: meta.title ?? "Tin tức",
      description: meta.description ?? "Chi tiết bài viết",
    };
  } catch {
    return {
      title: "Tin tức",
      description: "Chi tiết bài viết",
    };
  }
}

const Page = async ({ params }: Props) => {
  const { slug } = await params;
  const article = (await apiGetNewsByUrl(slug)) as ArticleDetail;

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Trang chủ", href: "/" },
          { label: "Tin tức", href: "/news" },
        ]}
        title={article.title}
      />
      <main className="container mx-auto px-4 pt-24 md:pt-28 lg:pt-32 pb-8 md:pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
          <div className="md:col-span-2 lg:col-span-8 min-w-0">
            <div className="mb-4">
              <div className="text-red-700 font-bold text-xs uppercase">
                Tin tức
              </div>
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
                {article.title}
              </h1>
            </div>
            <div className="relative w-full h-[220px] sm:h-[280px] md:h-[320px] lg:h-[400px] mb-6 rounded-lg overflow-hidden">
              <Image
                src={safeImg(article.thumbnail)}
                alt={article.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 800px"
                className="object-cover"
              />
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: article.content }}
              className="prose prose-sm md:prose-base lg:prose-lg max-w-none mb-6"
            />
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-gray-500 border-t border-dashed border-gray-300 pt-3 text-sm">

              <span className="flex gap-1 items-center">
                <BiCalendar />
                {dayjs(article.modifiedDate).format("DD/MM/YYYY HH:mm")}
              </span>

              <span className="flex gap-1 items-center">
                <BsEye />
                {article.view} lượt xem
              </span>
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="md:col-span-2 lg:col-span-4 w-full lg:sticky lg:top-32 space-y-6">

            <div>
              <div className="text-red-700 font-bold text-xs uppercase">
                Tin tức
              </div>
              <h2 className="text-lg md:text-xl font-bold mb-3">
                Bài viết mới
              </h2>
            </div>

            <Suspense fallback={<RelatedArticlesSkeleton />}>
              <RelatedArticles currentSlug={slug} />
            </Suspense>
          </aside>

        </div>
      </main>
    </>
  );
};

export default Page;