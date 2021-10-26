import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BiMapPin } from "react-icons/bi";
import { FaRegEnvelope } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <section className="footer_section">
        <section className="footer_wrap">
          <div className="container mt-5">
            <div className="row">
              <div className="column1 col-lg-3 col-md-3 col-sm-12">
                <NavLink to="/">
                  <img
                    src="https://i.ibb.co/HK5CY43/teamsols-logo.png"
                    alt="teamsols-logo"
                    border="0"
                    className="w-50 mb-4"
                  />
                </NavLink>
                <p>
                  We take your challenges and provide simple but elegant
                  solutions. We turn technology into an asset for your business
                  by utilizing your vision and our creative expertise to realize
                  the true potential of your brand.
                </p>
                <ul>
                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <FaTwitter />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="column2 col-lg-3 col-md-3 col-sm-12">
                <h3>IT Services</h3>
                <ul>
                  <li>Software Development</li>
                  <li>Web Development</li>
                  <li>Analytic Solutions</li>
                  <li>Cloud and DevOps</li>
                  <li>Product Design</li>
                </ul>
              </div>
              <div className="column3 col-lg-3 col-md-3 col-sm-12">
                <h3>Contact Info</h3>
                <ul>
                  <li>
                    TEAMSOLS (PVT) LTD. Suite No. 000, 0th Floor, Block-0, Park
                    Avenue, Shahrah-e-Faisal Karachi, Pakistan
                  </li>
                  <li>
                    <a href="tel:+923132535939">
                      <BiMapPin /> +92-313-2535939
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@teamsols.com">
                      <FaRegEnvelope /> info@teamsols.com
                    </a>
                  </li>
                </ul>
              </div>
              <div className="column4 col-lg-3 col-md-3 col-sm-12">
                <h3>Newsletter</h3>
                <p>Get latest news and blogs from Teamsols.</p>
                <form action="">
                  <div id="newsLetter">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="form-control"
                      maxLength="35"
                      placeholder="Your email address"
                    />
                    <a type="submit">
                      <FiSend />
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="row copyright">
            <div className="col-sm-12">
              <p>© 2021 All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
