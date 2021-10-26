import React from "react";
import ReactOwlCarousel from "react-owl-carousel";
import test from "../../SVG/android.svg";

const options = {
  margin: 80,
  responsiveClass: true,
  dots: false,
  autoplay: false,
  smartSpeed: 1000,
  loop: true,
  center: true,
  lazyLoad: true,
  fluidSpeed: true,
  mergeFit: true,
  autoPlay: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
};

const Projects = () => {
  return (
    <>
      <section id="projects" className="py-5 container">
        <div className="row">
          <h2>Projects</h2>
          <p className="pb-4">Our Recent Launched Projects Available into Market</p>
          <ReactOwlCarousel className="grabClass" {...options}>
            <div className="item">
              <img src={test} alt="apple" />
            </div>
          </ReactOwlCarousel>
        </div>
      </section>
    </>
  );
};

export default Projects;
