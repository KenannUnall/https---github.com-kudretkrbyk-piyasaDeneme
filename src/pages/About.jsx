import { useState } from "react";
import Button from "../components/button";
function AboutPage() {
  const [dataBlock] = useState({
    subtitle: "About us",
    title: "What is cybox?",
    desc: "Maecenas sit pretium, cras in. In quisque sem id eget. In vel gravida ut adipiscing integer felis. Id ac non arcu facilisi proin ultrices sed. Id accumsan quam viverra ante in id integer ut. Volutpat lobortis dolor etiam dis interdum tincidunt senectus.",
  });
  const data = [
    {
      id: 1,
      title: "NFT Marketplace",
      desc: "Maecenas sit pretium, cras in. In quisque sem id eget. In vel gravida ut adipiscing integer felis. Id ac non arcu facilisi proin ultrices sed.",
      class: "",
    },
    {
      id: 2,
      title: "NFT Marketplace",
      desc: "Maecenas sit pretium, cras in. In quisque sem id eget. In vel gravida ut adipiscing integer felis. Id ac non arcu facilisi proin ultrices sed.",
      class: "",
    },
    {
      id: 3,
      title: "NFT Marketplace",
      desc: "Maecenas sit pretium, cras in. In quisque sem id eget. In vel gravida ut adipiscing integer felis. Id ac non arcu facilisi proin ultrices sed.",
      class: "",
    },
    {
      id: 4,
      title: "NFT Marketplace",
      desc: "Maecenas sit pretium, cras in. In quisque sem id eget. In vel gravida ut adipiscing integer felis. Id ac non arcu facilisi proin ultrices sed.",
      class: "",
    },
  ];

  return (
    <div className=" relative">
      <img
        className="absolute w-full left-0 right-0 top-1/ "
        src="/images/team_bg.png"
      ></img>

      <section className="py-20 bg-[#141A31] font-chakra">
        <div className="container mx-auto px-4 font-chakra">
          <div className="flex flex-col  gap-12 items-center justify-center w-full">
            <div className="lg:w-1/3  ">
              <div
                className=" flex flex-col items-center justify-center gap-4 text-center lg:text-left"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <div className="w-full">
                  <p className="text-[#14C2A3] font-bold font-chakra uppercase tracking-wider text-center">
                    {dataBlock.subtitle}
                  </p>
                  <h4 className="text-3xl md:text-4xl font-bold font-chakra text-white w-full text-center">
                    {dataBlock.title}
                  </h4>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  {dataBlock.desc}
                </p>
                <Button title="get Nfts" path="/" />
              </div>
            </div>
            <div className="w-full">
              <div
                className="flex flex-col item-center justify-center gap-6 lg:gap-8 lg:flex-row flex-wrap"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                {data.map((item, index) => (
                  <div
                    className=" relative group   md:w-[600px]  hover:shadow-[0_0_32px_#14C2A3] hover:shadow-neon-glow transition-all duration-700 "
                    key={index}
                  >
                    {/* Orta katman – hover ile küçülen katman */}
                    <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[#14C2A3] transition-all duration-700 group-hover:w-full group-hover:h-full" />
                    <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-[#14C2A3] transition-all duration-700 group-hover:w-full group-hover:h-full" />
                    <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-[#14C2A3] transition-all duration-700 group-hover:w-full group-hover:h-full" />
                    <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[#14C2A3] transition-all duration-700 group-hover:w-full group-hover:h-full" />
                    {/* En üst katman – içerik */}
                    <div
                      className={`relative z-20 p-6 rounded-lg bg-white/5  transition-colors ${item.class}`}
                    >
                      <div className="text-xl font-bold font-chakra text-white mb-3">
                        {item.title}
                      </div>
                      <p className="text-gray-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
