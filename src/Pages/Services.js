import React from "react";
import CTA from "./CTA";
import SerCards from "./Components/SerCards";

const Services = () => {
  return (
    <>
      <section id="services">
        <main className="container">
          <div className="row">
            <div className="col">
              <h6 className="sub_txt">services</h6>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h2 className="general">
                What Solutions We Provide to Our Valued Customers
              </h2>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 ser_right_cta_col">
              <CTA />
            </div>
          </div>
          <div className="row">
            <SerCards />
          </div>
        </main>
      </section>
    </>
  );
};

export default Services;
