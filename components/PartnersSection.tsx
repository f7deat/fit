/* eslint-disable @next/next/no-img-element */
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ subsets: ["latin-ext"] });

export default function PartnersSection() {
  const partners = [
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", link: "https://google.com" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", link: "https://amazon.com" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", link: "https://microsoft.com" },
    { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", link: "https://apple.com" },
    { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg", link: "https://ibm.com" },
    { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg", link: "https://samsung.com" },
    { name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg", link: "https://oracle.com" },
    { name: "Cisco", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1280px-Cisco_logo_blue_2016.svg.png", link: "https://cisco.com" },
    { name: "NVIDIA", logo: "https://upload.wikimedia.org/wikipedia/sco/thumb/2/21/Nvidia_logo.svg/1280px-Nvidia_logo.svg.png", link: "https://nvidia.com" },
    { name: "Intel", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282006-2020%29.svg/1200px-Intel_logo_%282006-2020%29.svg.png", link: "https://intel.com" },
    { name: "Dell", logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg", link: "https://dell.com" },
    { name: "HP", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/2048px-HP_logo_2012.svg.png", link: "https://hp.com" },
    { name: "Lenovo", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lenovo_logo_2015.svg/2560px-Lenovo_logo_2015.svg.png", link: "https://lenovo.com" },
    { name: "Sony", logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg", link: "https://sony.com" },
    { name: "LG", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/LG_logo_%282014%29.svg/640px-LG_logo_%282014%29.svg.png", link: "https://lg.com" },
    { name: "Huawei", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Huawei_Standard_logo.svg/1200px-Huawei_Standard_logo.svg.png", link: "https://huawei.com" },
    { name: "Facebook", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg", link: "https://facebook.com" },
    { name: "Spotify", logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg", link: "https://spotify.com" },
    { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg", link: "https://netflix.com" },
    { name: "PayPal", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg", link: "https://paypal.com" },
    { name: "eBay", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg", link: "https://ebay.com" },
    { name: "Slack", logo: "https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png", link: "https://slack.com" },
    { name: "Zoom", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_Communications_Logo.svg", link: "https://zoom.us" },
    { name: "GitHub", logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg", link: "https://github.com" },
  ];

  return (
    <section id="partners" className="py-10">
      <div className="text-center">
        <div data-aos="fade-up">
          <div className="text-red-700 text-center font-bold text-sm uppercase mb-2">OUR Partners</div>
          <h2 className="text-3xl font-extrabold text-center mb-3" style={quicksand.style}>Đối tác liên kết</h2>
          <div className="title-separator"></div>
        </div>
        <div className="pt-10">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={3000}
            loop
            slidesPerView={6}
            spaceBetween={30}
            className="partners-swiper"
          >
            {partners.concat(partners).map((partner, index) => (
              <SwiperSlide key={index} className="w-auto">
                <a
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} Logo`}
                    width={150}
                    height={100}
                    className="object-contain h-16 mx-auto"
                    loading="lazy"
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}