import { useState } from "react";
import Button from "../../components/button";
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
    <div>
      <section className="py-20 bg-[#141A31]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col  gap-12 items-center justify-center">
            <div className="lg:w-5/12 ">
              <div
                className=" flex flex-col items-center justify-center gap-4 text-center lg:text-left"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <div className="w-full">
                  <p className="text-[#14C2A3] font-bold uppercase tracking-wider text-center">
                    {dataBlock.subtitle}
                  </p>
                  <h4 className="text-3xl md:text-4xl font-bold text-white w-full text-center">
                    {dataBlock.title}
                  </h4>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  {dataBlock.desc}
                </p>
                <Button title="get Nfts" path="/" />
              </div>
            </div>
            <div className="lg:w-7/12">
              <div
                className="flex flex-col item-center justify-center gap-6 lg:gap-8 lg:flex-row flex-wrap"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                {data.map((item) => (
                  <div
                    className={`p-6 rounded-lg bg-white/5 border border-white/10 hover:border-[#14C2A3] transition-colors ${item.class}`}
                  >
                    <div className="text-xl font-bold text-white mb-3">
                      {item.title}
                    </div>
                    <p className="text-gray-400 leading-relaxed">{item.desc}</p>
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
