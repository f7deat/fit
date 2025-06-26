/* eslint-disable @next/next/no-img-element */
import Breadcrumb from "@/components/common/breadcrumb";
import { apiCategoryPosts, apiGetCategoryById } from "@/services/category";
import dayjs from "dayjs";
import { Inter } from "next/font/google";
import Link from "next/link";
import { FaCalendar, FaEye } from "react-icons/fa6";


const quicksand = Inter({ subsets: ["latin-ext"] });

type Params = Promise<{ id: string }>;

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
}

const Page: React.FC<{ params: Params }> = async ({ params }) => {

    const { id } = await params;
    const response = await apiCategoryPosts({ current: 1, pageSize: 10, categoryId: id });
    const articles = response.data.data as ArticleDetail[];
    const response2 = await apiGetCategoryById(id);
    const category = response2.data;

    return (
        <>
            <Breadcrumb items={[
                {
                    label: "Trang chủ",
                    href: "/"
                },
                {
                    label: 'Tin tức',
                    href: `/article`
                }
            ]} title={category.name} />
            <div className="container mx-auto px-4 py-8 lg:px-8 lg:py-12">
                <div data-aos="fade-up">
                    <div className="text-red-700 text-center font-bold text-sm">Tin tức & Sự kiện</div>
                    <h2 className="text-3xl font-extrabold text-center mb-2" style={quicksand.style}>
                        {category.name}
                    </h2>
                    <div className="title-separator"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8" data-aos="fade-up">
                    {articles.map((article) => (
                        <div
                            key={article.id}
                            className="relative rounded-lg shadow-md overflow-hidden bg-white transform transition-transform duration-300 hover:scale-105"
                        >
                            <img
                                src={article.thumbnail}
                                alt={article.title}
                                width={300}
                                height={250}
                                className="w-full h-64 object-cover"
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
            </div>
        </>
    )
}

export default Page;