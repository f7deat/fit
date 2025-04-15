import Breadcrumb from "@/components/common/breadcrumb"

const Page: React.FC = async () => {
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
        </main>
    )
}

export default Page;