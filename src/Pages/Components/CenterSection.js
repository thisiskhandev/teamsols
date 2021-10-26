import React from "react";
import CTA from "../CTA";
const SerBtns = (shit) => {
  return <button className="mt-2 mb-4 btn ser_btns">{shit.btnName}</button>;
};

const CenterSection = () => {
  return (
    <>
      <section className="my_center">
        <main className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <img
                    src="https://i.ibb.co/nn3LM6p/about-5.webp"
                    alt="about"
                    width="100%"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <h6 className="sub_txt">SKILLSET</h6>
                  <h2 className="general">
                    We Are Increasing Business Success With Technology
                  </h2>
                  <p className="general">
                    Over 5+ working in IT services developing software
                    applications and mobile apps for clients all over the world.
                  </p>
                  <SerBtns btnName="Software Development" />
                  <SerBtns btnName="App Development" />
                  <SerBtns btnName="Web Development" />
                  <div className="row">
                    <div className="col">
                      <CTA />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default CenterSection;
