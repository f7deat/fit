import Link from "next/link";

interface BreadcrumbProps {
    items: { label: string; href: string }[];
    title: string;
}

export default function Breadcrumb({ items, title }: BreadcrumbProps) {
    return (
        <div
            className="relative bg-cover bg-center"
            style={{
                backgroundImage: "url('/hero-bg.png')"
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-75"></div>

            {/* Breadcrumb Content */}
            <div className="relative z-10 container mx-auto py-8 text-white h-72 flex flex-col justify-center items-center text-center">
                <nav className="text-lg pt-10" aria-label="breadcrumb">
                    <ol className="flex space-x-2">
                        {items.map((item, index) => (
                            <li key={index} className="flex items-center">
                                {index > 0 && <span className="mx-2 text-gray-300">/</span>}
                                {index === items.length - 1 ? (
                                    <span className="text-white font-semibold">{item.label}</span>
                                ) : (
                                    <Link href={item.href} className="hover:underline hover:text-blue-300">
                                        {item.label}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ol>
                </nav>
                <div className="text-lg md:text-2xl font-bold mt-2">
                    {title}
                </div>
            </div>
        </div>
    );
}