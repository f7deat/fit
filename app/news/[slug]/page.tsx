import Breadcrumb from "@/components/common/breadcrumb";
import RelatedArticles from "../components/RelatedArticles";
import ArticleShareActions from "./article-share-actions";
import { apiGetArticleByUrl, apiGetMetaArticle } from "@/services/article";
import dayjs from "dayjs";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";
import { Inter, Quicksand } from "next/font/google";
import { BiCalendar } from "react-icons/bi";
import { BsEye } from "react-icons/bs";

const inter = Inter({ subsets: ["latin-ext"] });
const quicksand = Quicksand({ subsets: ["latin-ext"] });

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

const getArticle = cache(async (slug: string): Promise<ArticleDetail | null> => {
  try {
    const response = await apiGetArticleByUrl(slug);
    return response.data as ArticleDetail;
  } catch {
    return null;
  }
});

const getArticleMeta = cache(async (slug: string) => {
  try {
    const response = await apiGetMetaArticle(slug);
    return response.data;
  } catch {
    return null;
  }
});

function toAbsoluteUrl(path?: string | null) {
  if (!path) return null;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `https://fit.dhhp.edu.vn${path}`;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const [article, meta] = await Promise.all([
    getArticle(slug),
    getArticleMeta(slug),
  ]);

  if (!article) {
    return {
      title: "Bài viết không tồn tại",
      description: "Không tìm thấy nội dung bài viết.",
    };
  }

  const publicUrl = `https://fit.dhhp.edu.vn/article/${article.url}`;
  const imageUrl = toAbsoluteUrl(article.thumbnail);

  return {
    title: meta?.title ?? article.title,
    description: meta?.description ?? article.description,
    alternates: {
      canonical: publicUrl,
    },
    openGraph: {
      title: meta?.title ?? article.title,
      description: meta?.description ?? article.description,
      url: publicUrl,
      type: "article",
      images: imageUrl
        ? [
          {
            url: imageUrl,
            alt: article.title,
            width: 1200,
            height: 630,
          },
        ]
        : [],
    },
    twitter: {
      card: imageUrl ? "summary_large_image" : "summary",
      title: meta?.title ?? article.title,
      description: meta?.description ?? article.description,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

const Page: React.FC<Props> = async ({ params }: Props) => {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    notFound();
  }

  const publicUrl = `https://fit.dhhp.edu.vn/article/${article.url}`;

  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumb
        items={[
          { label: "Trang chủ", href: "/" },
          { label: "Tin tức", href: "/news" },
        ]}
        title={article.title}
      />

      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:grid lg:grid-cols-[44px_minmax(0,1fr)_300px] gap-6 items-start">
          <ArticleShareActions
            title={article.title}
            content={article.content}
            publicUrl={publicUrl}
          />

          <main className="min-w-0 w-full" style={inter.style}>
            <article className="bg-white rounded-lg shadow-sm p-4 md:p-6 lg:p-8">
              <div className="mb-4">
                <span className="text-sm text-gray-500">
                  {dayjs(article.modifiedDate).format("DD/MM/YYYY HH:mm")}
                </span>
              </div>

              <div className="mb-4">
                <div className="text-red-700 font-bold text-xs">TIN TUC</div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2 leading-tight">
                  {article.title}
                </h1>
              </div>

              <div
                className="prose prose-base md:prose-lg max-w-none mb-6 break-words"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center text-gray-500 border-t border-dashed border-gray-300 pt-3">
                <span className="flex gap-1 items-center">
                  <BiCalendar />
                  {dayjs(article.modifiedDate).format("DD/MM/YYYY HH:mm")}
                </span>

                <span className="flex gap-1 items-center">
                  <BsEye />
                  <span>{article.view}</span>
                  <span>Lượt xem</span>
                </span>
              </div>
            </article>
          </main>

          <aside className="min-w-0 w-full">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="mb-4">
                <div className="text-red-700 font-bold text-xs">TIN TUC</div>
                <h2 className="text-xl font-bold mt-2" style={quicksand.style}>
                  Bài viết mới
                </h2>
              </div>
              <RelatedArticles />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Page;
