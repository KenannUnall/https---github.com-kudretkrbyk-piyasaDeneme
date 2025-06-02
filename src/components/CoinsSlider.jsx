import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const CoinsSlider = () => {
  const coins = [
    {
      id: 1,
      name: "Bitcoin",
      symbol: "BTC",
      price: "$45,123.45",
      change: "+2.34%",
      image: "/images/bitcoin.png",
    },
    {
      id: 2,
      name: "Ethereum",
      symbol: "ETH",
      price: "$3,456.78",
      change: "+1.23%",
      image: "/images/ethereum.png",
    },
    {
      id: 3,
      name: "Binance Coin",
      symbol: "BNB",
      price: "$567.89",
      change: "-0.45%",
      image: "/images/binance.png",
    },
    {
      id: 4,
      name: "Cardano",
      symbol: "ADA",
      price: "$1.23",
      change: "+3.45%",
      image: "/images/cardano.png",
    },
  ];

  return (
    <div className="relative w-full py-8 overflow-hidden">
      {/* Gradient arka plan */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0c1226] via-[#141A31] to-[#0c1226] pointer-events-none z-0" />

      {/* Slider container */}
      <div className="relative container mx-auto px-4 z-10">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={40}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3 },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="py-8 max-w-6xl mx-auto"
        >
          {coins.map((coin) => (
            <SwiperSlide
              key={coin.id}
              className="flex items-center justify-center w-full"
            >
              <div className="relative w-64 group h-full hover:shadow-[0_0_32px_#14C2A3] hover:shadow-neon-glow transition-all duration-700  p-1">
                {/* Köşe çizgileri */}
                <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[#14C2A3] transition-all duration-700 group-hover:w-full group-hover:h-full " />
                <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-[#14C2A3] transition-all duration-700 group-hover:w-full group-hover:h-full " />
                <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-[#14C2A3] transition-all duration-700 group-hover:w-full group-hover:h-full " />
                <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[#14C2A3] transition-all duration-700 group-hover:w-full group-hover:h-full " />

                {/* İçerik kutusu */}
                <div className="relative z-20 p-6  bg-white/5 backdrop-blur-sm">
                  {/* Üst kısım - Logo ve İsim */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#14C2A3]/10 flex items-center justify-center">
                      <img
                        src={coin.image}
                        alt={coin.name}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">
                        {coin.name}
                      </h3>
                      <p className="text-[#14C2A3] text-sm">{coin.symbol}</p>
                    </div>
                  </div>

                  {/* Alt kısım - Fiyat ve Değişim */}
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-white text-xl font-bold">
                        {coin.price}
                      </p>
                      <p
                        className={`text-sm ${
                          coin.change.startsWith("+")
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {coin.change}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}{" "}
        </Swiper>

        {/* Navigation butonları */}
        <div className="swiper-button-prev !w-12 !h-12 hidden sm:flex  !bg-[#14C2A3] !rounded-full !text-white after:!text-xl after:!content-['←'] !left-4" />
        <div className="swiper-button-next !w-12 !h-12 hidden sm:flex  !bg-[#14C2A3] !rounded-full !text-white after:!text-xl after:!content-['→'] !right-4" />
      </div>
    </div>
  );
};

export default CoinsSlider;
