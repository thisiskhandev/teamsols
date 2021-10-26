import React from "react";

const Careers = () => {
  return (
    <>
      <section className="my_center">
        <main className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <h6 className="sub_txt">WHY CHOOSE US</h6>
                  <h2 className="general">Careers</h2>
                  <p className="general">
                    A job at Teamsols is a career made by you, with development
                    opportunities, benefits and a working culture that embraces
                    diversity. So whether you’re looking for an internship,
                    graduate opportunities, or a job opening to progress your
                    professional career, you can shape your own path as you work
                    with the brands and people that drive our sustainable
                    business growth work@Teamsols.com
                  </p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <form>
                    <h2>Share your details</h2>
                    <small>We will get back to you ASAP.</small>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        aria-describedby="text"
                        placeholder="name"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Apply Now
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Careers;
