import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import {motion} from "framer-motion";
import { useState } from "react";




const MySlider = () => {
  const slider = [
    {url:"https://www.adanirealty.com/-/media/project/realty/blogs/types-of-residential-properties.ashx"},
    {url:"https://www.ecoprops.co.za/images/slide-1.jpg"},
    {url:"https://dlajgvw9htjpb.cloudfront.net/cms/98803259-81eb-4cc7-8a2d-b0e64f20751d/25539639/-8201423693132655464.jpg"},
    {url:"https://kelleyandkatzerrealestate.com/wp-content/uploads/2019/01/architecture-beautiful-exterior-106399-1.jpg"}
  ];

  const [activetext, setActivetext] = useState(0);

  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000 }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        onSlideChange={(swiper) => setActivetext(swiper.realIndex)}
        grabCursor={true}
      >
        {slider.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-max-screen h-[420px]">
              <img src={item.url} className="w-full h-full object-cover " alt={`slide-${index}`} />

              {activetext === index && (
                <motion.div
                  className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2"
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                </motion.div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MySlider;
