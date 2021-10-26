import React from "react";
import { NavLink } from "react-router-dom";

const MHeader = () => {
  return (
    <>
      <section className="mobile_nav py-2">
        <main className="container">
          <div className="row">
            <div className="col-6">
              <NavLink to="/">
                <img
                  src="https://i.ibb.co/HK5CY43/teamsols-logo.png"
                  alt="head-logo"
                  width="200"
                />
              </NavLink>
            </div>
            <div className="col-6 hamberger">
              <a
                className="btn btn-primary"
                data-bs-toggle="offcanvas"
                href="#offcanvasExample"
                role="button"
                aria-controls="offcanvasExample"
              >
                Menu
              </a>

              <div
                className="offcanvas offcanvas-start"
                tabIndex="-1"
                id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel"
              >
                <div className="offcanvas-header">
                  <img
                    src="https://i.ibb.co/HK5CY43/teamsols-logo.png"
                    alt="teamsols-logo"
                    border="0"
                    className="w-50"
                  />
                  <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end w-100">
                    <li className="nav-item">
                      <NavLink
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/about">
                        About
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

const Header = () => {
  return (
    <>
      <section className="navigation">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <main className="container">
            <NavLink className="navbar-brand" to="/">
              <img
                src="https://i.ibb.co/HK5CY43/teamsols-logo.png"
                alt="teamsols-logo"
                border="0"
                className="w-25"
              />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end w-100">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
          </main>
        </nav>
      </section>

      <MHeader />
    </>
  );
};
export default Header;
