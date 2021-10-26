import React from "react";
import CTA from "../CTA";
import Logos from "../Components/Logos";
import AboutSec from "../Components/AboutSec";
import CenterSection from "../Components/CenterSection";
import Services from "../Services";
import CenterSection2 from "../Components/CenterSection2";
import Projects from "../Components/Projects";
import Careers from "../Components/Careers";
const Home = () => {
  return (
    <>
      <section id="homePage">
        <section className="hero_sec">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <span className="sub_title">
                  MODERN. PROFESSIONAL. RELIABLE.
                </span>
                <h1 className="title text-capitalize">
                  We are not your average brand agency
                </h1>
                <p>
                  We take your challenges and provide simple but elegant
                  solutions. We turn technology into an asset for your business
                  by utilizing your vision and our creative expertise to realize
                  the true potential of your brand.
                </p>
                <CTA />
              </div>
            </div>
          </div>
        </section>
        <Logos />
        <AboutSec />
        <CenterSection />
        <Services />
        <CenterSection2 />
        <Projects />
        <Careers/>
      </section>
    </>
  );
};

export default Home;
