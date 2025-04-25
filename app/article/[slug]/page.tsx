import Breadcrumb from "@/components/common/breadcrumb";
import { apiGetArticleByUrl, apiGetMetaArticle } from "@/services/article";
import dayjs from "dayjs";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { BiCalendar } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import RelatedArticles from "../components/related-articles";


const inter = Inter({ subsets: ["latin-ext"] });
const quicksand = Inter({ subsets: ["latin-ext"] });

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    // read route params
    const slug = (await params).slug;

    // fetch data
    const response = await apiGetMetaArticle(slug);

    return {
        title: response.data.title,
        description: response.data.description
    }
}

type Params = Promise<{ slug: string }>;

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

    const { slug } = await params;
    const response = await apiGetArticleByUrl(slug);
    const article = response.data as ArticleDetail;

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
            ]} title={article.title} />
            <main className="container mx-auto px-4 mt-4" style={inter.style}>
                <div className="md:flex gap-4">
                    <div className="md:w-2/3">
                    
                    <div data-aos="fade-up" className="mb-4">
                            <div className="text-red-700 font-bold text-xs">OUR BLOG</div>
                            <h2 className="text-xl font-bold mb-2" style={quicksand.style}>
                                Nội dung bài viết
                            </h2>
                        </div>

                        <div dangerouslySetInnerHTML={{ __html: article.content }} className="prose prose-lg 2xl:text-lg mx-auto mb-4" />
                        <div className="flex justify-between items-center mb-4 text-gray-500 border-t border-dashed border-gray-300 pt-2">
                            <span className="flex gap-1 items-center">
                                <BiCalendar />
                                {dayjs(article.modifiedDate).format('DD/MM/YYYY hh:mm')}</span>
                            <span className="flex gap-1 items-center">
                                {article.view}
                                <BsEye />
                                Lượt xem
                            </span>
                        </div>
                    </div>
                    <div className="md:w-1/3">

                        <div data-aos="fade-up" className="mb-4">
                            <div className="text-red-700 font-bold text-xs">OUR BLOG</div>
                            <h2 className="text-xl font-bold mb-2" style={quicksand.style}>
                                Bài viết mới
                            </h2>
                        </div>
                        <RelatedArticles />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Page;