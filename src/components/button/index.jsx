import React from "react";
import { Link } from "react-router-dom";

function Button({ title, path, onClick }) {
  return (
    <Link
      to={path}
      onClick={onClick}
      className="relative inline-block px-8 py-3 uppercase font-bold text-white font-chakra tracking-wider overflow-hidden group border-2 border-[#14C2A3] hover:text-white"
    >
      {/* Border overlay */}
      <span className="absolute inset-0 transition-all duration-300 bg-transparent group-hover:bg-[#14C2A3] z-0"></span>

      {/* Border animation */}
      <span className="absolute top-0 left-1/2 w-0 h-[2px] bg-white transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
      <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-white transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
      <span className="absolute top-1/2 left-0 w-[2px] h-0 bg-white transition-all duration-300 group-hover:h-full group-hover:top-0"></span>
      <span className="absolute top-1/2 right-0 w-[2px] h-0 bg-white transition-all duration-300 group-hover:h-full group-hover:top-0"></span>

      {/* Text layer */}
      <span className="relative z-10">{title}</span>
    </Link>
  );
}

export default Button;
