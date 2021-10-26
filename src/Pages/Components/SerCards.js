import React from "react";
import SerCardsArr from "./SerCardsArr";
const SerCards = () => {
  return (
    <>
      <section id="SerCards" className="mt-5 row">
        {SerCardsArr.map((val) => {
          return (
            <div className="col-lg-4 col-md-4 col-sm-12 my_cards">
              <div className="row">
                <div className="col-md-6 col-sm-12 image_col">
                  <img src={val.imgsrc} alt="my-image" className="main_imgs" />
                  <img
                    src={val.imghover}
                    alt="my-image"
                    className="hover_imgs"
                  />
                </div>
                <div className="col-md-6 col-sm-12 my_value">
                  <dt className="float-end">{val.id}</dt>
                </div>
              </div>
              <div className="row">
                <h3>{val.title}</h3>
                <article>{val.para}</article>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default SerCards;
