import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";

import { FaMinus } from "react-icons/fa";

import React, { useState } from "react";

const Team = () => {
  const teamMembers = [
    {
      name: "Michael Johnson",
      role: "Developer",
      img: "../../src/assets/images/post/imgpost1.jpg",
    },
    {
      name: "Nathaniel Lewis",
      role: "Founder & CO",
      img: "../../src/assets/images/post/imgpost2.jpg",
    },
    {
      name: "Timothy Young",
      role: "Designer",
      img: "../../src/assets/images/post/imgpost3.jpg",
    },
    {
      name: "David Williams",
      role: "Consultant",
      img: "../../src/assets/images/post/imgpost4.jpg",
    },
  ];

  const [hovered, setHovered] = useState(null);

  return (
    <section className="relative pt-[130px] bg-[#0f1928]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h5 className="text-[#14C2A3] uppercase font-bold tracking-wide mb-2">
            Our Team
          </h5>
          <h2 className="text-white text-3xl md:text-4xl font-bold">
            Meet our skilled team
          </h2>
        </div>

        <div className="flex flex-wrap border border-[#2c3242] rounded-[40px] overflow-hidden">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`w-full sm:w-1/2 lg:w-1/4 border-r border-[#2c3242] ${
                index >= 2 ? "border-t" : ""
              }`}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="h-full group text-center  relative transition duration-300">
                <div className="bg-[#13182b]  rounded-3xl p-6 h-full">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-40 h-40 rounded-full mx-auto object-cover mb-6"
                  />
                  <h3 className="text-white text-lg font-semibold mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#b3b3c0] text-sm mb-6 font-medium">
                    {member.role}
                  </p>

                  <div className="flex justify-center items-center gap-10 relative">
                    {/* Left */}
                    <ul className="flex gap-3 opacity-0 group-hover:opacity-100 transform transition duration-300 translate-x-10 group-hover:translate-x-0">
                      <li>
                        <a
                          href="#"
                          className="w-8 h-8 bg-[#13182b] rounded-full flex items-center justify-center  transition"
                        >
                          <FaSquareXTwitter className="text-white hover:text-[#14C2A3] size-5 transform transition duration-300" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="w-8 h-8 bg-[#13182b] rounded-full flex items-center justify-center  transition"
                        >
                          <FaSquareFacebook className="text-white hover:text-[#14C2A3] size-5 transform transition duration-300" />
                        </a>
                      </li>
                    </ul>

                    {/* Toggle Icon */}
                    <span
                      className={`w-8 h-8  flex items-center justify-center rounded-full   text-white absolute left-1/2 -translate-x-1/2 transition-all  duration-[500ms] ${
                        hovered === index
                          ? "opacity-0 rotate-180"
                          : "opacity-100"
                      }`}
                    >
                      <FaPlus />
                    </span>

                    {hovered === index && (
                      <span className="w-8 h-8  flex items-center justify-center text-white absolute left-1/2 -translate-x-1/2  transition-all duration-300">
                        <FaMinus className="size-5" />
                      </span>
                    )}

                    {/* Right */}
                    <ul className="flex gap-3 opacity-0 group-hover:opacity-100 transform transition duration-300 -translate-x-10 group-hover:translate-x-0">
                      <li>
                        <a
                          href="#"
                          className="w-8 h-8 bg-[#13182b] rounded-full flex items-center justify-center  transition"
                        >
                          <FaLinkedin className="text-white hover:text-[#14C2A3] size-5 transform transition duration-300" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="w-8 h-8 bg-[#13182b] rounded-full flex items-center justify-center  transition"
                        >
                          <FaInstagram className="text-white hover:text-[#14C2A3] size-5 transform transition duration-300" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Background shapes */}
        {/* <div className="absolute top-0 left-0 -z-10">
          <img
            src="/_next/static/media/t_shape1.b28cbf28.png"
            alt="shape1"
            className="max-w-none"
          />
        </div> */}
        {/* <div className="absolute top-10 right-0 -z-10">
          <img
            src="/_next/static/media/t_shape2.b6252d87.png"
            alt="shape2"
            className="max-w-none"
          />
        </div> */}
      </div>
    </section>
  );
};

export default Team;
