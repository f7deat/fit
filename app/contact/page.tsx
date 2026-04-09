import ContactForm from "@/app/contact/components/ContactForm";
import ContactInfoCard from "@/app/contact/components/ContactInfoCard";
import Breadcrumb from "@/components/common/breadcrumb";

type ContactCard = {
  icon: "location" | "phone" | "mail";
  title: string;
  content: { label: string; href?: string }[];
  variant: "red" | "navy";
  backgroundImage?: string;
};

const contactCards: ContactCard[] = [
  {
    icon: "location",
    title: "Địa chỉ",
    content: [
      { label: "C3, 171 Phan Đăng Lưu" },
      { label: "Phường Phù Liễn, Hải Phòng" },
    ],
    variant: "red",
    backgroundImage:
      "https://images.unsplash.com/photo-1606092047066-ed7912359ff3?w=800&q=80",
  },
  {
    icon: "phone",
    title: "Điện thoại",
    content: [
      { label: "(02253) 549.277", href: "tel:02253549277" },
    ],
    variant: "navy",
    backgroundImage:
      "https://images.unsplash.com/photo-1655392031314-f97fbeb39552?w=800&q=80",
  },
  {
    icon: "mail",
    title: "Email",
    content: [
      {
        label: "khoacntt@dhhp.edu.vn",
        href: "mailto:khoacntt@dhhp.edu.vn",
      },
    ],
    variant: "navy",
    backgroundImage:
      "https://images.unsplash.com/photo-1749265663270-7b5c44b05874?w=800&q=80",
  },
];

const Page: React.FC = async ({}) => {
  return (
    <main>
      <Breadcrumb
        items={[
          { label: "Trang chủ", href: "/" },
          { label: "Liên hệ", href: "/contact" },
        ]}
        title="Liên Hệ"
      />

      <section className="max-w-6xl mx-auto px-4 mt-20 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactCards.map((card, i) => (
            <ContactInfoCard key={i} {...card} />
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 mb-16">
        <ContactForm
          imageUrl="https://i.ibb.co/5xWgjX0H/contact-bg-5-1-1-p1y0pte6gylmbsnugittl47iqk4aycy6wipxnzqfe2-1.jpg"
          imageAlt="Contact"
        />
      </section>

      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="w-full h-[400px] bg-gray-200 rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.12)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.18)] transition-all duration-300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.6043994712804!2d106.62132607517024!3d20.807286480787184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a7735d162afdb%3A0x70df39254ee1c357!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBI4bqjaSBQaMOybmc!5e0!3m2!1svi!2s!4v1775530649115!5m2!1svi!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="University Map"
          />
        </div>
      </section>
    </main>
  );
};

export default Page;