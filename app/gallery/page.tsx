/* eslint-disable @next/next/no-img-element */
import Breadcrumb from "@/components/common/breadcrumb";
import { apiGalleryList } from "@/services/gallery";
import { Quicksand } from "next/font/google";
import Link from "next/link";

const quicksand = Quicksand({ subsets: ["latin-ext"] });

const Page: React.FC = async () => {

    const response = await apiGalleryList({ current: 1, pageSize: 12 });
    const { data } = response.data;

    return (
        <main>
            <Breadcrumb title="Thư viện ảnh" items={[
                {
                    label: "Trang chủ",
                    href: "/"
                },
                {
                    label: 'Thư viện ảnh',
                    href: `/gallery`
                }
            ]} />
            <div className="px-4 pt-10">
                <div data-aos="fade-up">
                    <div className="text-red-700 text-center font-bold text-sm uppercase mb-2">Multimedia</div>
                    <h2 className="text-3xl font-extrabold text-center mb-3" style={quicksand.style}>Thư viện ảnh</h2>
                    <div className="title-separator"></div>
                </div>
                <div className="container mx-auto mt-10 mb-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {data.map((item: { id: number; title: string; thumbnail: string; createdAt: string; updatedAt: string }, index: number) => (
                            <Link href={`/gallery/${item.id}`} key={index}>
                                <div
                                    className="bg-gray-200 h-64 flex items-center justify-center overflow-hidden group relative"
                                >
                                    <img
                                        src={item.thumbnail}
                                        alt={`Gallery Image ${index + 1}`}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="font-medium text-white text-lg">{item.title}</div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Page;