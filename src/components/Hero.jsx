import React from "react";
import { Link } from "react-router-dom";
import Button from "./button";

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0c1226]">
      {/* Arka plan animasyonlu gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c1226] via-[#141A31] to-[#0c1226]">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#14C2A3]/10 to-transparent"></div>
      </div>

      {/* Ana içerik */}
      <div className="relative container mx-auto px-4 h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Sol taraf - Metin içeriği */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-chakra">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14C2A3] to-[#00ffd0]">
                Geleceğin
              </span>{" "}
              Finans Dünyasına Hoş Geldiniz
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Kripto para dünyasında güvenilir ve yenilikçi çözümlerle
              yatırımlarınızı güçlendirin. Modern teknoloji ve uzman ekibimizle
              yanınızdayız.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button title="Hemen Başla" path="/about" />
              <Link
                to="/contact"
                className="px-8 py-3 text-white border-2 border-[#14C2A3] rounded-md hover:bg-[#14C2A3] hover:text-white transition-all duration-300 text-center"
              >
                Bize Ulaşın
              </Link>
            </div>
          </div>

          {/* Sağ taraf - 3D Animasyonlu İllüstrasyon */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-r from-[#14C2A3]/20 to-transparent rounded-2xl backdrop-blur-sm border border-[#14C2A3]/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 relative">
                    {/* Animasyonlu daire */}
                    <div className="absolute inset-0 border-2 border-[#14C2A3] rounded-full animate-spin-slow"></div>
                    <div className="absolute inset-4 border-2 border-[#14C2A3] rounded-full animate-spin-slow-reverse"></div>
                    <div className="absolute inset-8 border-2 border-[#14C2A3] rounded-full animate-pulse"></div>

                    {/* Merkez logo veya ikon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-[#14C2A3] rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">C</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
};

export default Hero;
