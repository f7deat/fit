import dayjs from "dayjs";
import { Damion, Quicksand } from "next/font/google";
import { BsArrowRight } from "react-icons/bs";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

const damion = Damion({ subsets: ["latin-ext"], weight: "400" });
const quicksand = Quicksand({ subsets: ["latin-ext"] });

export default function AboutSection() {
  return (
    <section id="about" className="pt-40 pb-20 px-8 bg-gray-50 mb-10 2xl:mb-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Video Content */}
        <div>
          <div style={{
            backgroundImage: "url('/about-bg.png')",
          }} className="pr-[63px] pb-[83px] bg-no-repeat bg-right bg-center h-[300px] md:h-[500px] bg-contain flex justify-center items-center">
            <iframe
              src="https://www.youtube.com/embed/r6ZZ3GhR-pw"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              data-aos="zoom-in"
            ></iframe>
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left">
          <div data-aos="fade-up">
            <div className="text-red-700 text-sm font-bold uppercase">Về chúng tôi</div>
            <h2 className="text-xl md:text-4xl font-bold uppercase leading-tight mb-4" style={quicksand.style}>
              Khoa Công nghệ thông tin
            </h2>
          </div>
          <p className="text-gray-600 mb-2 md:text-lg leading-relaxed" data-aos="fade-up">
            Khoa Công nghệ thông tin Trường Đại học Hải Phòng với truyền thống {dayjs().year() - 2001} năm xây dựng và phát triển (2001-{dayjs().year()}) đang kiện toàn đội ngũ, từng bước xây dựng và giữ vững vị thế ngành mũi nhọn trong đào tạo nguồn nhân lực phục vụ phát triển kinh tế – xã hội thành phố Hải Phòng.
          </p>
          <p className="text-gray-600 mb-4 text-xl md:text-4xl leading-relaxed md:flex gap-1" style={damion.style} data-aos="fade-right">
            <FaQuoteLeft size={14} /> <span className="text-red-600">You can do it, </span><span className="text-blue-600">we are ready to accompany.</span>
            <FaQuoteRight size={14} />
          </p>
          <div className="mb-2 text-gray-600 mb-4 md:text-lg leading-relaxed" data-aos="fade-up">
            Triết lý của Khoa đề ra là: “Truyền đạt kiến thức vững chắc để sinh viên vào đời vững vàng”. Với phương châm: “Học thành người và học thành nghề”.
          </div>
          <button type="button" data-aos="fade-up" className="mt-3 bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-8 rounded transition duration-300">Tìm hiểu thêm <BsArrowRight className="inline" /></button>
        </div>
      </div>
    </section>
  );
}