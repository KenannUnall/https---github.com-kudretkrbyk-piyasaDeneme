import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

Project.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

function Project({ data }) {
  return (
    <section className="py-20 bg-[#141A31]">
      <div className="container mx-auto px-4">
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="space-y-4">
            <p className="text-[#14C2A3] font-bold font-chakra uppercase tracking-wider">
              Portfolio
            </p>
            <h4 className="text-3xl md:text-4xl font-bold font-chakra text-white">
              Our Projects
            </h4>
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
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="project-swiper"
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="group relative overflow-hidden rounded-lg">
                  <img
                    src={item.img}
                    alt="crybox"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <Link
                      to="/nft-item"
                      className="w-full p-4 text-white font-bold font-chakra text-lg hover:text-[#14C2A3] transition-colors"
                    >
                      {item.title}
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Project;
