import React from "react";
import { Link } from "react-router-dom";
import Button from "./button";

export default function Hero({ scrollToCoins }) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0c1226] p-5 md:p-20 font-chakra">
      {/* Arka plan animasyonlu gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c1226] via-[#141A31] to-[#0c1226]">
        <div className="absolute inset-0 bg-[url('/images/uo_bg.png')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#14C2A3]/10 to-transparent"></div>
      </div>

      {/* Ana içerik */}
      <div className="relative container  px-4  flex items-center  ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Sol taraf - Metin içeriği */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-chakra">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14C2A3] to-[#00ffd0]">
                Yapay Zeka
              </span>{" "}
              ile Kripto Tahminleri
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0">
              Gelişmiş yapay zeka modellerimiz ile kripto para piyasalarının
              geleceğini analiz edin. Veri odaklı tahminler ve detaylı
              analizlerle yatırım kararlarınızı güçlendirin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button onClick={scrollToCoins} title="Tahminleri Gör" />
              <Link
                to="/contact"
                className="px-8 py-3 text-white border-2 border-[#14C2A3] rounded-md hover:bg-[#14C2A3] hover:text-white transition-all duration-300 text-center"
              >
                Ücretsiz Dene????
              </Link>
            </div>
          </div>

          {/* Sağ taraf - Görsel ve Shape */}
          <div className="relative hidden lg:block">
            {/* Ana shape container */}
            <div className="relative w-full h-[500px]">
              {/* Arka plan shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#14C2A3]/20 to-transparent rounded-[100px] transform rotate-12"></div>

              {/* Orta shape */}
              <div className="absolute inset-4 bg-gradient-to-br from-[#14C2A3]/10 to-transparent rounded-[80px] transform -rotate-6"></div>

              {/* İç shape */}
              <div className="absolute inset-8 bg-gradient-to-br from-[#14C2A3]/5 to-transparent rounded-[60px] transform rotate-3"></div>

              {/* Görsel container */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-center justify-center w-full h-full  ">
                  {/* Görsel */}
                  <img
                    src="/images/heroBg.png"
                    alt="AI Icon"
                    className=" w-[450px]  object-cover absolute bottom-0"
                  />

                  {/* Glow efekti */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#14C2A3]/20 to-transparent rounded-[100px] animate-pulse"></div>

                  {/* Üst üste binen shape */}
                  <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#14C2A3]/10 rounded-full blur-2xl animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#14C2A3]/10 rounded-full blur-2xl animate-pulse"></div>
                </div>
              </div>

              {/* Dekoratif elementler */}
              <div className="absolute -top-8 -right-8 w-16 h-16 border-2 border-[#14C2A3] rounded-full animate-spin-slow"></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 border-2 border-[#14C2A3] rounded-full animate-spin-slow-reverse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Alt kısım dalga efekti */}
      <div className="absolute bottom-0 left-0 w-full">
        <img
          src="/images/wave.svg"
          alt="Wave Background"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}
