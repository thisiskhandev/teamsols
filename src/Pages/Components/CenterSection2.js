import React from "react";

const List = (list) => {
  return (
    <>
      <div className="col-12 list_item mb-4">
        <li>
          <img src={list.imgsrc} alt="icons" width="70" />
        </li>
        <li>{list.title}</li>
      </div>
    </>
  );
};

const CenterSection2 = () => {
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
                  <h6 className="sub_txt">WHY CHOOSE US</h6>
                  <h2 className="general">
                    We Create Result-Oriented Dynamic Applications
                  </h2>
                  <p className="general">
                    Over 5+ working in IT services developing software
                    applications and mobile apps for clients all over the world.
                  </p>
                  <div className="row">
                    <List
                      title="First Growing Process"
                      imgsrc="https://i.ibb.co/HNsFLFs/dynamicapplogo1.png"
                    />
                    <List
                      title="Clean code"
                      imgsrc="https://i.ibb.co/4JkYRV7/dynamicapplogo2.png"
                    />
                    <List
                      title="Well Documentation"
                      imgsrc="https://i.ibb.co/9h23SqN/dynamicapplogo3.png"
                    />
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

export default CenterSection2;
