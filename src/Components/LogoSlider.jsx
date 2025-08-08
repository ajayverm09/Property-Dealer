import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Puri from "../logos/purilogonew.webp";
import Hero from "../logos/herologo.webp";
import Mahindra from "../logos/Mahindra-1.webp";
import Vatika from "../logos/vatika.webp";
import Tata from "../logos/tata.webp";
import Ats from "../logos/atslogo-1.webp";
import Dlf from "../logos/DLFLOGO-min.webp";
import Conscient from "../logos/COnscient-logo.webp";
import Ireo from "../logos/IREO_logo_new-min.webp";

const logos = [
  { src: Puri, alt: "Puri" },
  { src: Hero, alt: "Hero" },
  { src: Mahindra, alt: "Mahindra" },
  { src: Vatika, alt: "Vatika" },
  { src: Tata, alt: "Tata" },
  { src: Ats, alt: "ATS" },
  { src: Dlf, alt: "DLF" },
  { src: Conscient, alt: "Conscient" },
  { src: Ireo, alt: "IREO" },
];

function LogoSlide() {
  return (
    <section className="bg-white py-12 text-center px-4">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">OUR CLIENTS</h2>
      <button className="bg-blue-600 text-white px-6 py-2 font-medium rounded mb-6">
        VIEW ALL
      </button>
      <h3 className="text-2xl font-medium text-gray-800 mb-8">
        ASSOCIATED WITH DEVELOPERS
        <div className="h-1 w-20 bg-blue-500 mx-auto mt-2"></div>
      </h3>

      <div className="max-w-6xl mx-auto relative">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index} className="mb-8">
              <div className="p-4 bg-white border rounded shadow-sm flex items-center justify-center h-20">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 object-contain cursor-pointer"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}

export default LogoSlide;
