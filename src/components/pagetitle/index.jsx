import React from "react";
//import "./styles.scss";

function PageTitle(props) {
  const { title } = props;

  return (
    <section className="page-title">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div
              className="breadcrumbs"
              data-aos="zoom-in"
              data-aos-duration="800"
            >
              <h3>{title}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageTitle;
