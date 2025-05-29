import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

function PartnerPage() {
  const partnerData = [
    {
      id: 1,
      img: "/assets/images/partner/1.png",
    },
    {
      id: 2,
      img: "/assets/images/partner/2.png",
    },
    {
      id: 3,
      img: "/assets/images/partner/3.png",
    },
    {
      id: 4,
      img: "/assets/images/partner/4.png",
    },
    {
      id: 5,
      img: "/assets/images/partner/5.png",
    },
    {
      id: 6,
      img: "/assets/images/partner/6.png",
    },
    {
      id: 7,
      img: "/assets/images/partner/7.png",
    },
    {
      id: 8,
      img: "/assets/images/partner/8.png",
    },
    {
      id: 9,
      img: "/assets/images/partner/9.png",
    },
    {
      id: 10,
      img: "/assets/images/partner/10.png",
    },
    {
      id: 11,
      img: "/assets/images/partner/11.png",
    },
    {
      id: 12,
      img: "/assets/images/partner/12.png",
    },
    {
      id: 13,
      img: "/assets/images/partner/13.png",
    },
    {
      id: 14,
      img: "/assets/images/partner/14.png",
    },
    {
      id: 15,
      img: "/assets/images/partner/15.png",
    },
    {
      id: 16,
      img: "/assets/images/partner/16.png",
    },
    {
      id: 17,
      img: "/assets/images/partner/17.png",
    },
    {
      id: 18,
      img: "/assets/images/partner/18.png",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <div
        className="text-center mb-16"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="space-y-4">
          <p className="text-[#14C2A3] font-bold font-chakra uppercase tracking-wider">
            Partners
          </p>
          <h4 className="text-3xl md:text-4xl font-bold font-chakra text-white">
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
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
          className="partner-swiper"
        >
          {partnerData.map((item) => (
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
  );
}

export default PartnerPage;
