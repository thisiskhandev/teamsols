import React from "react";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import CallOutlinedIcon from "@material-ui/icons/CallOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
const TopBar = () => {
  return (
    <>
      <section className="top_bar">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8">
              <ul className="d-flex jus justify-content-between">
                <li>
                  <a href="mailto:info@teamsols.com">
                    <MailOutlineIcon />
                    info@teamsols.com
                  </a>
                </li>
                <li>
                  <a href="tel:+923132535939">
                    <CallOutlinedIcon /> +92-313-2535939
                  </a>
                </li>
                <li>
                  <LocationOnOutlinedIcon /> Park Avenue, Shahra-e-Faisal
                  Karachi
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 d-flex justify-content-end">
              <ul>
                <li>
                  <a href="#">
                    <FacebookIcon />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <LinkedInIcon />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <TwitterIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopBar;
