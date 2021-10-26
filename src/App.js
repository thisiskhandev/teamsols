import React from "react";
import "./mainstyles.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import Header from "../src/HeaderFooter/Header";
import UrlLinks from "../src/HeaderFooter/UrlLinks";
import TopBar from "./HeaderFooter/TopBar";
import Footer from "./HeaderFooter/Footer";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const App = () => {
  return (
    <>
      <TopBar />
      <Header />
      <UrlLinks />
      <Footer />
    </>
  );
};
export default App;
