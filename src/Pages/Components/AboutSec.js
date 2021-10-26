import React from "react";
import Cards from "./Cards";
const AboutSec = () => {
  return (
    <>
      <section id="aboutSec" className="about_sec py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h6 className="sub_txt">About Us</h6>
              <h2 className="general">
                Over 5+ Years Helping Brands to Reach Full Potential
              </h2>
              <p className="general">
                System Development Division of HRS Network which is branded as
                “Teamsols” is a distinctive part of HRS Network. We provide
                comprehensive advisory and support in the development of
                Software, Web based Applications and Mobile Applications
                specifically according to the customized requirements of
                clients. Teamsols also helps businesses in their brand
                development including but not limited to Website Designing,
                Website Development, Graphics, Videography, Animations, Digital
                Marketing and other technological solutions.
              </p>
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <span className="counters">450</span>
                  <h4>Happy Clients</h4>
                </div>
                <div className="col-md-6 col-sm-12">
                  <span className="counters last_counter">750</span>
                  <h4>Projects Delivered</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <Cards />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AboutSec;
