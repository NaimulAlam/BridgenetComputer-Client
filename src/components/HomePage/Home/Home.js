import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import HeaderMain from '../HeaderMain/HeaderMain';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
          <HeaderMain></HeaderMain>
          <Services></Services>
          <h1>Another Option-3</h1>
          <h1>Dynamic Testimonials-4</h1>
          <h1>Extra Bonus Add an admin programminghero001@gmail.com Section-6</h1>
          <Footer></Footer>
        </div>
    );
};

export default Home;