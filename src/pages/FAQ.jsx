import dataFaq from "../assets/fake-data/data-faq";
import { useState } from "react";

function FAQ() {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleAccordion = (idx) => {
    setOpenIndexes((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <div className="w-full font-chakra min-h-60 py-10 md:py-5 flex flex-col items-center justify-center gap-10">
      <div className="w-full  flex flex-col items-center justify-center gap-4 text-center lg:text-left ">
        <p className="text-[#14C2A3] font-bold font-chakra uppercase tracking-wider text-center">
          Sıkça Sorulan sorular
        </p>
        <h4 className="text-3xl md:text-4xl font-bold font-chakra text-white w-full text-center">
          sss
        </h4>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dataFaq.map((item, idx) => {
            const isOpen = openIndexes.includes(idx);
            return (
              <div
                key={item.id}
                className={`relative overflow-hidden transition-all group border ${
                  isOpen
                    ? "border-[#14C2A3] shadow-[0_0_16px_#14C2A3]"
                    : "border-white/10"
                } bg-[#12203a]`}
              >
                {/* Köşe çizgileri */}
                <div
                  className={`absolute top-0 left-0 border-t-2 border-l-2 border-[#14C2A3] transition-all duration-700 ${
                    isOpen ? "w-full h-full" : "w-5 h-5"
                  }`}
                />
                <div
                  className={`absolute top-0 right-0 border-t-2 border-r-2 border-[#14C2A3] transition-all duration-700 ${
                    isOpen ? "w-full h-full" : "w-5 h-5"
                  }`}
                />
                <div
                  className={`absolute bottom-0 left-0 border-b-2 border-l-2 border-[#14C2A3] transition-all duration-700 ${
                    isOpen ? "w-full h-full" : "w-5 h-5"
                  }`}
                />
                <div
                  className={`absolute bottom-0 right-0 border-b-2 border-r-2 border-[#14C2A3] transition-all duration-700 ${
                    isOpen ? "w-full h-full" : "w-5 h-5"
                  }`}
                />

                {/* Sadece başlık kısmı tıklanabilir */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 py-4 text-left bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-between relative z-10"
                >
                  <span className="text-lg font-bold font-chakra text-white">
                    {item.title}
                  </span>
                  <svg
                    className={`w-6 h-6 text-[#14C2A3] transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 py-4 text-gray-400">{item.content}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
