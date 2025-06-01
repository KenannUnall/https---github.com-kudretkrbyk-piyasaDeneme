import PageTitle from "../components/pagetitle/PageTitle";

function RoadMapOne() {
  const roadmapData = [
    {
      time: "Q2 2022",
      items: [
        "Aenean tempor",
        "Fusce arcu maecenas",
        "Malesuada felis sem elementum",
        "Risus eu metus",
      ],
    },
    {
      time: "Q1 2022",
      items: [
        "Release website and logo",
        "Grow community",
        "Launch the project",
        "Social media setup",
      ],
    },
    {
      time: "Q4 2022",
      items: [
        "Aenean tempor",
        "Fusce arcu maecenas",
        "Malesuada felis sem elementum",
        "Risus eu metus",
      ],
    },
    {
      time: "Q3 2022",
      items: [
        "Aenean tempor",
        "Fusce arcu maecenas",
        "Malesuada felis sem elementum",
        "Risus eu metus",
      ],
    },
    {
      time: "Q2 2022",
      items: [
        "Aenean tempor",
        "Fusce arcu maecenas",
        "Malesuada felis sem elementum",
        "Risus eu metus",
      ],
    },
    {
      time: "Q1 2022",
      items: [
        "Aenean tempor",
        "Fusce arcu maecenas",
        "Malesuada felis sem elementum",
        "Risus eu metus",
      ],
    },
    {
      time: "Q4 2022",
      items: [
        "Aenean tempor",
        "Fusce arcu maecenas",
        "Malesuada felis sem elementum",
        "Risus eu metus",
      ],
    },
    {
      time: "Q3 2022",
      items: [
        "Aenean tempor",
        "Fusce arcu maecenas",
        "Malesuada felis sem elementum",
        "Risus eu metus",
      ],
    },
    {
      time: "Q2 2022",
      items: [
        "Aenean tempor",
        "Fusce arcu maecenas",
        "Malesuada felis sem elementum",
        "Risus eu metus",
      ],
    },
    {
      time: "Q1 2022",
      items: [
        "kdrt tempor",
        "Fusce arcu maecenas",
        "Malesuada felis sem elementum",
        "Risus eu metus",
      ],
    },
  ];
  return (
    <div className="bg-[#0c1226] min-h-screen w-full text-white font-chakra relative overflow-visible">
      {/* Page Title Section */}
      <PageTitle title="Yol Haritası" />

      {/* Roadmap Section */}
      <section className="py-10 px-4 max-w-7xl mx-auto">
        <section className="relative py-10 bg-[#141A31] overflow-hidden">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-8 md:mb-12 tracking-widest">
            CYBOX TIMELINE
          </h2>
          <div className="relative max-w-5xl mx-auto">
            {/* Dikey çizgi - Mobilde gizle */}
            <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-[#14C2A3] -translate-x-1/2 z-0"></div>
            <div className="flex flex-col gap-8 md:gap-16">
              {roadmapData.map((item, idx) => (
                <div
                  key={idx}
                  className="relative flex flex-col md:flex-row items-center min-h-[180px]"
                >
                  {idx % 2 === 0 ? (
                    <>
                      <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center z-10 group mb-4 md:mb-0">
                        {/* En alt katman: Border + Glow + Ana kutu */}
                        <div className="relative w-[280px] sm:w-80 h-auto min-h-[200px] md:h-60 border border-[#14C2A3] bg-[#19213C] transition-all duration-300 hover:border-[#00ffd0] hover:shadow-[0_0_32px_#14C2A3] hover:shadow-neon-glow">
                          {/* Orta katman: Hover ile kapanan animasyonlu overlay */}
                          <div className="absolute top-1/2 left-1/2 w-[280px] sm:w-[300px] h-[200px] md:h-[240px] bg-[#19213C] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out group-hover:w-0 overflow-hidden z-10" />

                          {/* Üst katman: İçerik */}
                          <div className="absolute flex flex-col items-start justify-center p-4 w-[280px] sm:w-[300px] h-[200px] md:h-[240px] z-20">
                            <h3 className="text-lg md:text-xl font-bold mb-2 neon-text">
                              {item.time}
                            </h3>
                            <ul className="list-disc list-inside text-xs sm:text-sm space-y-1">
                              {item.items.map((text, i) => (
                                <li key={i}>{text}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        {/* Yatay çizgi - Mobilde gizle */}
                        <div className="hidden md:block w-10 h-1 bg-[#14C2A3]"></div>
                      </div>

                      {/* Nokta - Mobilde gizle */}
                      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-[#14C2A3] z-20"></div>
                    </>
                  ) : (
                    <>
                      <div className="w-full md:w-1/2"></div>
                      {/* Nokta - Mobilde gizle */}
                      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-[#14C2A3] z-20"></div>
                      <div className="w-full md:w-1/2 flex justify-center md:justify-start items-center z-10 group">
                        {/* Yatay çizgi - Mobilde gizle */}
                        <div className="hidden md:block w-10 h-1 bg-[#14C2A3]"></div>
                        {/* En alt katman: Border + Glow + Ana kutu */}
                        <div className="relative w-[280px] sm:w-80 h-auto min-h-[200px] md:h-60 border border-[#14C2A3] bg-[#19213C] transition-all duration-300 hover:border-[#00ffd0] hover:shadow-[0_0_32px_#14C2A3] hover:shadow-neon-glow">
                          {/* Orta katman: Hover ile kapanan animasyonlu overlay */}
                          <div className="absolute top-1/2 left-1/2 w-[280px] sm:w-[300px] h-[200px] md:h-[240px] bg-[#19213C] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out group-hover:w-0 overflow-hidden z-10" />

                          {/* Üst katman: İçerik */}
                          <div className="absolute flex flex-col items-start justify-center p-4 w-[280px] sm:w-[300px] h-[200px] md:h-[240px] z-20">
                            <h3 className="text-lg md:text-xl font-bold mb-2 neon-text">
                              {item.time}
                            </h3>
                            <ul className="list-disc list-inside text-xs sm:text-sm space-y-1">
                              {item.items.map((text, i) => (
                                <li key={i}>{text}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default RoadMapOne;
