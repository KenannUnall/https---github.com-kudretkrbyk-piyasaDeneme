import React from "react";
//import "./styles.scss";

function PageTitle(props) {
  const { title } = props;

  return (
    <section className="py-14 text-center bg-[#141A31] group">
      <h1 className="text-5xl md:text-6xl font-bold uppercase tracking-wider text-white">
        {title}
      </h1>
      <div className="mt-4 w-24 h-1 group-hover:w-48 duration-500 bg-[#14C2A3] mx-auto"></div>
    </section>
  );
}

export default PageTitle;
