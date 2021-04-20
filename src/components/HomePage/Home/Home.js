import React from "react";
import Footer from "../../Shared/Footer/Footer";
import AboutUs from "../About/AboutUs";
import HeaderMain from "../HeaderMain/HeaderMain";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";
import "./Home.css";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <div className="home">
      <HeaderMain></HeaderMain>
      <Services></Services>
      <AboutUs></AboutUs>
      <WhyChooseUs></WhyChooseUs>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </div>
  );
};

export default Home;
