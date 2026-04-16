/* eslint-disable @next/next/no-img-element */
import Breadcrumb from "@/components/common/breadcrumb";
import { apiPhotos } from "@/services/gallery";
import Link from "next/link";
import GalleryModal  from "./components/GalleryModal";
type Params = Promise<{ slug: number }>;

const Page: React.FC<{ params: Params }> = async ({ params }) => {
    const { slug } = await params;
    const response = await apiPhotos({ current: 1, postId: (await params).slug });
    const { data } = response.data;

    return (
        <main>
            <Breadcrumb
                title="Thư viện ảnh"
                items={[
                    {
                        label: "Trang chủ",
                        href: "/",
                    },
                    {
                        label: "Thư viện ảnh",
                        href: `/gallery`,
                    },
                ]}
            />
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" style={{ gridAutoRows: "400px" }}>
                    {data.map((item: { id: number; url: string; title: string }, index: number) => (
                        <Link
                            key={index}
                            href={`/gallery/${slug}?photo=${index}`}
                            scroll={false}
                            className="relative overflow-hidden rounded-lg shadow-md group cursor-pointer"
                        >
                            <img
                                src={item.url}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-25 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-bold text-lg">{item.title}</span>
                            </div>
                        </Link>
                    ))}
                </div>
                <GalleryModal images={data} />
            </div>
        </main>
    );
};

export default Page;
