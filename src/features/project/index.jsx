import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "./styles.scss";
import ProjectItem from "./project-item";

Project.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired
};

function Project({ data }) {
  return (
    <section className="py-20 bg-[#141A31]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="800">
          <div className="space-y-4">
            <p className="text-[#14C2A3] font-bold font-chakra uppercase tracking-wider">Portfolio</p>
            <h4 className="text-3xl md:text-4xl font-bold font-chakra text-white">Our Projects</h4>
          </div>
        </div>

        <div className="relative" data-aos="fade-up" data-aos-duration="800">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}
            breakpoints={{
              640: {
                slidesPerView: 2
              },
              1024: {
                slidesPerView: 3
              }
            }}
            className="project-swiper"
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <ProjectItem item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Project;
