import React, { useState, useEffect } from "react";
//import './styles.scss';
import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaArrowCircleUp } from "react-icons/fa";

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <footer className=" bottom-0 w-full bg-[#141A31] text-white">
      {/* <div className="relative">
        <img
          src="/images/bg.png"
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover opacity-90 "
        />

        <div className="container mx-auto px-4 py-16 relative z-10">
          <ul className="flex justify-center gap-6 mb-8">
            <li>
              <Link to="#" className="hover:text-[#14C2A3] transition-colors">
                <FaTwitter className="size-6" />
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-[#14C2A3] transition-colors">
                <FaFacebook className="size-6" />
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-[#14C2A3] transition-colors">
                <FaInstagram className="size-6" />
              </Link>
            </li>
          </ul>

          <div className="text-center mb-8">
            <h5 className="text-2xl font-bold font-chakra mb-4">
              don't miss out, join now for early access
            </h5>
            <p className="text-gray-400 mb-6">
              Maecenas sit pretium, cras in. In quisque sem id eget. In vel
              gravida ut
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                required
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-[#14C2A3]"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-[#14C2A3] text-white font-bold font-chakra rounded-lg hover:bg-[#0fa890] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div> */}

      <div className="border-t border-white/10 relative">
        <img
          src="/images/bg.png"
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover opacity-90 "
        />
        <div className="container mx-auto px-4 py-6 z-10 relative">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-gray-400">
              <p>CYBOX 2022- ALL rights reserved</p>
            </div>
            <ul className="flex flex-wrap justify-center gap-6">
              <li>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-[#14C2A3] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-[#14C2A3] transition-colors"
                >
                  Cookies
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-[#14C2A3] transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-[#14C2A3] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {isVisible && (
        <Link
          onClick={scrollToTop}
          className="fixed bottom-20 right-8  group  "
        >
          <FaArrowCircleUp className="size-10 text-[#14C2A3] group-hover:text-[#0fa890] transition-colors" />
        </Link>
      )}
    </footer>
  );
}

export default Footer;
