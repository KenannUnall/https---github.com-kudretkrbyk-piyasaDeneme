import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";
import Button from "./button";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Scroll pozisyonunu kontrol et
      if (currentScrollY > 300) {
        setScroll(true);
      } else {
        setScroll(false);
      }

      // Header'ın görünürlüğünü kontrol et
      if (currentScrollY > lastScrollY && currentScrollY > 300) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleMenuToggle = () => setMenuActive(!menuActive);
  const handleDropdown = (index) => setActiveIndex(index);

  const menus = [
    { name: "Ana Sayfa", links: "/" },
    { name: "Hakkımızda", links: "/about" },
    { name: "Projeler", links: "/project" },
    { name: "Yol Haritası", links: "/roadmap" },
    { name: "Ekibimiz", links: "/team" },
    { name: "Blog", links: "/blog" },
    { name: "SSS", links: "/faq" },
    { name: "İletişim", links: "/contact" },
  ];

  return (
    <header
      className={`fixed w-full top-0 left-0 z-[1000] transition-all duration-500 ${
        scroll
          ? "bg-[#141A31] shadow-[0_4px_8px_rgba(0,0,0,0.1)]"
          : "bg-transparent"
      } h-[108px] lg:h-[90px] transform transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <img className="absolute w-full h-24" src="/images/bg.png"></img>
      <div className="container mx-auto px-4 h-full flex items-center relative justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 transform transition-transform duration-300 hover:scale-105">
          <NavLink to="/">
            <img src={logo} alt="Crybox" className="h-10" />
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <nav className={`hidden lg:block`}>
          <ul className="flex items-center gap-8">
            {menus.map((data, idx) => (
              <li
                key={idx}
                className={`relative group ${
                  data.namesub ? "has-children" : ""
                }`}
                onMouseEnter={() => setActiveIndex(idx)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <Link
                  to={data.links}
                  className={`relative uppercase text-white font-bold font-chakra text-sm transition-all duration-300 hover:text-[#14C2A3] hover:drop-shadow-[0_0_6px_#14C2A3] ${
                    activeIndex === idx ? "text-[#14C2A3]" : ""
                  }`}
                >
                  {data.name}
                  {data.namesub && <span className="ml-1 text-xs">▼</span>}
                </Link>
                {data.namesub && (
                  <ul className="absolute left-1/2 -translate-x-1/2 top-full mt-4 bg-white text-black w-56 shadow-[0_0_20px_#14C2A3] rounded-md opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-300 z-50">
                    {data.namesub.map((submenu) => (
                      <li key={submenu.id}>
                        <NavLink
                          to={submenu.links}
                          className="block px-5 py-3 font-bold font-chakra uppercase text-sm hover:bg-[#14C2A3] hover:text-white transition-colors duration-300"
                        >
                          {submenu.sub}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Call to action button */}
        <div className="hidden lg:block ml-auto transform transition-transform duration-300 hover:scale-105">
          <Button title="JOIN DISCORD" path="/contact" />
        </div>

        {/* Mobile Hamburger */}
        <div
          className={`lg:hidden w-6 h-6 relative cursor-pointer z-[9999] ml-auto`}
          onClick={handleMenuToggle}
        >
          <span
            className={`block w-full h-[3px] bg-white absolute top-1/2 transition-all duration-300 ${
              menuActive ? "rotate-45" : "-translate-y-2"
            }`}
          ></span>
          <span
            className={`block w-full h-[3px] bg-white absolute top-1/2 transition-all duration-300 ${
              menuActive ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block w-full h-[3px] bg-white absolute top-1/2 transition-all duration-300 ${
              menuActive ? "-rotate-45" : "translate-y-2"
            }`}
          ></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-3/5 sm:w-3/4 h-screen bg-[#100D1E] transition-all duration-500 z-[999] ${
          menuActive ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col px-6 pt-24 gap-4">
          {menus.map((data, idx) => (
            <li
              key={idx}
              className={`relative ${data.namesub ? "has-children" : ""}`}
              onClick={() => handleDropdown(idx)}
            >
              <Link
                to={data.links}
                className="uppercase text-white font-bold font-chakra text-sm block pb-2 border-b border-white/10 transition-colors duration-300 hover:text-[#14C2A3]"
              >
                {data.name}
              </Link>
              {data.namesub && activeIndex === idx && (
                <ul className="mt-2">
                  {data.namesub.map((submenu) => (
                    <li key={submenu.id}>
                      <NavLink
                        to={submenu.links}
                        className="block py-2 pl-4 border-t border-white/10 text-white hover:text-[#14C2A3] transition-colors duration-300"
                      >
                        {submenu.sub}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
