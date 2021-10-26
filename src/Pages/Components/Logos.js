import React from "react";
import android from "../../SVG/android.svg";
import apple from "../../SVG/apple.svg";
import wordpress from "../../SVG/cms-wp.svg";
import css3 from "../../SVG/css3.svg";
import sass from "../../SVG/sass.svg";
import html5 from "../../SVG/html5.svg";
import js from "../../SVG/js.svg";
import laravel from "../../SVG/laravel.svg";
import reactjs from "../../SVG/reactjs.svg";
import ReactOwlCarousel from "react-owl-carousel";

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

const Logos = () => {
  return (
    <>
      <section className="logos_sec">
        <div className="container">
          <div className="row">
            <ReactOwlCarousel
              className="grabClass"
              // items="5"
              // loop
              // center
              // lazyLoad
              // fluidSpeed
              // mergeFit
              // autoPlay
              // autoplayTimeout
              // autoplayHoverPause
              // margin={80}
              // responsiveClass={true}
              {...options}
            >
              <div className="item">
                <img src={android} alt="apple" />
              </div>
              <div className="item">
                <img src={apple} alt="apple" />
              </div>
              <div className="item">
                <img src={wordpress} alt="apple" />
              </div>
              <div className="item">
                <img src={css3} alt="apple" />
              </div>
              <div className="item">
                <img src={sass} alt="apple" />
              </div>
              <div className="item">
                <img src={html5} alt="apple" />
              </div>
              <div className="item">
                <img src={js} alt="apple" />
              </div>
              <div className="item">
                <img src={laravel} alt="apple" />
              </div>
              <div className="item">
                <img src={reactjs} alt="apple" />
              </div>
            </ReactOwlCarousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default Logos;
