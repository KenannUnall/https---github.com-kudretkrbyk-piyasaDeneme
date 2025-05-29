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
    <div className="bg-[#0c1226] min-h-screen text-white font-figtree">
      {/* Page Title Section */}
      <section className="relative py-28 text-center bg-[#141A31]">
        <h1 className="text-5xl md:text-6xl font-bold uppercase tracking-wider text-white">
          Roadmap
        </h1>
        <div className="mt-4 w-24 h-1 bg-[#14C2A3] mx-auto"></div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <section className="relative py-20 bg-[#141A31] overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 tracking-widest">
            CYBOX TIMELINE
          </h2>
          <div className="relative max-w-5xl mx-auto">
            {/* Dikey çizgi */}
            <div className="absolute left-1/2 top-0 h-full w-1 bg-[#14C2A3] -translate-x-1/2 z-0"></div>
            <div className="flex flex-col gap-16">
              {roadmapData.map((item, idx) => (
                <div
                  key={idx}
                  className="relative flex items-center min-h-[180px]"
                >
                  {idx % 2 === 0 ? (
                    <>
                      <div className="w-1/2 flex justify-end items-center  z-10 group">
                        {/* En alt katman: Border + Glow + Ana kutu */}
                        <div className="relative w-80 h-60 border border-[#14C2A3] bg-[#19213C] transition-all duration-300 hover:border-[#00ffd0] hover:shadow-[0_0_32px_#14C2A3] hover:shadow-neon-glow">
                          {/* Orta katman: Hover ile kapanan animasyonlu overlay */}
                          <div className="absolute top-1/2 left-1/2 w-[300px] h-[240px] bg-[#19213C] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out group-hover:w-0 overflow-hidden z-10" />

                          {/* Üst katman: İçerik */}
                          <div className="absolute  flex flex-col items-start justify-center p-4 w-[300px] h-[240px] z-20">
                            <h3 className="text-xl font-bold mb-2 neon-text">
                              {item.time}
                            </h3>
                            <ul className="list-disc list-inside text-sm space-y-1">
                              {item.items.map((text, i) => (
                                <li key={i}>{text}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="w-10 h-1 bg-[#14C2A3]"></div>
                      </div>

                      {/* Nokta */}
                      <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-[#14C2A3]   z-20"></div>
                    </>
                  ) : (
                    <>
                      <div className="w-1/2"></div>
                      {/* Nokta */}
                      <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-[#14C2A3]   z-20"></div>
                      <div className="w-1/2 flex justify-start items-center   z-10 group  ">
                        <div className="w-10 h-1 bg-[#14C2A3]"></div>
                        {/* En alt katman: Border + Glow + Ana kutu */}
                        <div className="relative w-80 h-60 border border-[#14C2A3] bg-[#19213C] transition-all duration-300 hover:border-[#00ffd0] hover:shadow-[0_0_32px_#14C2A3] hover:shadow-neon-glow">
                          {/* Orta katman: Hover ile kapanan animasyonlu overlay */}
                          <div className="absolute top-1/2 left-1/2 w-[300px] h-[240px] bg-[#19213C] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out group-hover:w-0 overflow-hidden z-10" />

                          {/* Üst katman: İçerik */}
                          <div className="absolute  flex flex-col items-start justify-center p-4 w-[300px] h-[240px] z-20">
                            <h3 className="text-xl font-bold mb-2 neon-text">
                              {item.time}
                            </h3>
                            <ul className="list-disc list-inside text-sm space-y-1">
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
          <style>{`
        .neon-text {
          text-shadow: 0 0 8px #14C2A3, 0 0 16px #14C2A3;
        }
        .hover\:shadow-neon-glow:hover {
          box-shadow: 0 0 32px #14C2A3, 0 0 16px #00ffd0;
        }
      `}</style>
        </section>
      </section>
    </div>
  );
}

export default RoadMapOne;
