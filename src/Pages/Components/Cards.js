import React from "react";
import CardArr from "../../ArrData/CardArr";

// const ncard = (val, index) => {
//   console.log(index);
//   return (
//     <div className="col-lg-6 col-md-6 col-sm-12 my_cards">
//       <img src={val.imgsrc} alt="test" />
//       <h3>{val.title}</h3>
//       <p>{val.para}</p>
//     </div>
//   );
// };

const Cards = () => {
  return (
    <>
      <section className="cardss">
        <div className="row">
          {CardArr.map((val, index) => {
            console.log(index);
            return (
              <div className="col-lg-6 col-md-6 col-sm-12 my_cards">
                <img src={val.imgsrc} alt={val.altText} className="main_imgs" />
                <img
                  src={val.imgsrch}
                  alt={val.altText}
                  className="hover_imgs"
                />
                <h3>{val.title}</h3>
                <p>{val.para}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default Cards;
