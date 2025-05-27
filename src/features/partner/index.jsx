import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import "./styles.scss";

Partner.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired
    })
  ).isRequired
};

function Partner({ data }) {
  return (
    <section className="py-20 bg-[#141A31]">
      <div className="container mx-auto px-4">
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="space-y-4">
            <p className="text-[#14C2A3] font-bold uppercase tracking-wider">
              Partners
            </p>
            <h4 className="text-3xl md:text-4xl font-bold text-white">
              Our Partners
            </h4>
          </div>
        </div>

        <div className="relative" data-aos="fade-up" data-aos-duration="800">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            loop
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}
            breakpoints={{
              640: {
                slidesPerView: 3
              },
              768: {
                slidesPerView: 4
              },
              1024: {
                slidesPerView: 6
              }
            }}
            className="partner-swiper"
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex items-center justify-center p-4">
                  <img
                    src={item.img}
                    alt="Partner"
                    className="max-w-full h-auto opacity-50 hover:opacity-100 transition-opacity"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Partner;
