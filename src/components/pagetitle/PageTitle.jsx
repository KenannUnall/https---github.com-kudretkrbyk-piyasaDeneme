import React from "react";
//import "./styles.scss";

function PageTitle(props) {
  const { title } = props;

  return (
    <section className="pt-24 py-4 text-center bg-[#141A31] group">
      <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase tracking-wider text-white">
        {title}
      </h1>
      <div className="mt-4 w-24 h-1 group-hover:w-48 duration-500 bg-[#14C2A3] mx-auto"></div>
    </section>
  );
}

export default PageTitle;
