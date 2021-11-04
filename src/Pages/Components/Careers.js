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
                  <form className="forms">
                    <article>
                      <h3>Share your details</h3>
                      <em>We will get back to you ASAP.</em>
                    </article>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        aria-describedby="text"
                        placeholder="Name"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="your@mail.com"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="tel"
                        className="form-control"
                        id="phoneNum"
                        placeholder="Phone"
                      />
                    </div>
                    <div className="mb-3">
                      <select
                        type=""
                        className="form-control"
                        id="serviceType"
                        required
                      >
                        <option selected disabled hidden>
                          Select the service you want for your project
                        </option>
                        <option value="Customized Solution Development">
                          Customized Solution Development
                        </option>
                        <option value="Digital Transformation">
                          Digital Transformation
                        </option>
                        <option value="Technical Human resourcing">
                          Technical Human resourcing
                        </option>
                        <option value="Oracle Implementation">
                          Oracle Implementation
                        </option>
                        <option value="Web Development">Web Development</option>
                        <option value="Mobile Apps Development">
                          Mobile Apps Development
                        </option>
                        <option value="E-commerce Development">
                          E-commerce Development
                        </option>
                        <option value="Creative UI/UX designing">
                          Creative UI/UX designing
                        </option>
                        <option value="Digital Marketing">
                          Digital Marketing
                        </option>
                      </select>
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        className="form-control"
                        placeholder="Tell us about your project (Max 300 characters)"
                      ></textarea>
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
