import React from 'react';
import './AboutUs.css'; 
import usha from './usha.jpg';
import chidvilas from './chidvilas.jpeg';
import raj from './raj.jpeg';
import Navbar from '../Navbar/Navbar';

function AboutUs() {
  return (
    <body classNameName='mee'>
        
        
   <div className="main"></div>
   <Navbar />
   <div><h1 className="hum">About Us</h1>
    <h3 className="teem">Our Team</h3>
   <section className="profile">
    <div className="card">
        <div className="card-image">
            <img src={raj} alt="Profileimage"/>
        </div>
        <p className="name">Raj Chaturvedi</p>
        <p>Developer</p>
        <p></p>
        <div className="socials">
            <a href="https://github.com/raj8665"><button className="github"><i className="fab fa-github"></i></button></a>
            <a href="https://www.linkedin.com/in/raj-chaturvedi-44203b253/"><button className="linkdin"><i className="fab fa-linkedin"></i></button></a>
            <a href="https://www.instagram.com/rajchaturvedi734/?hl=en"><button className="instagram"><i className="fab fa-instagram"></i></button></a>
        </div>
    </div>

    <div className="card">
        <div className="card-image">
            <img src={chidvilas} alt="Profileimage"/>
        </div>
        <p className="name">Appani Chidvilas Varma</p>
        <p>Back-End developer</p>
        <div className="socials">
          <a href="https://github.com/AliveBeing"><button className="github"><i className="fab fa-github"></i></button></a>
            <a href="https://www.linkedin.com/in/chidvilas-appani-739156258/"><button className="linkdin"><i className="fab fa-linkedin"></i></button></a>
            <a href="https://www.instagram.com/chidvilas_varma/?hl=en"><button className="instagram"><i className="fab fa-instagram"></i></button></a>
        </div>
    </div>

    <div className="card">
        <div className="card-image">
            <img src={usha} alt="Profileimage"/>
        </div>
        <p className="name">Usha Nitwal</p>
        <p>Front-End developer</p>
        <p></p>
        <div className="socials">
          <a href="https://github.com/usha-here"><button className="github"><i className="fab fa-github"></i></button></a>
            <a href="https://www.linkedin.com/in/usha-nitwal-161286250/"><button className="linkdin"><i className="fab fa-linkedin"></i></button></a>
            <a href="https://www.instagram.com/usha_nitwal/?hl=en"><button className="instagram"><i className="fab fa-instagram"></i></button></a>
        </div>
    </div>
  </section>
</div>
</body>
  
  );
}

export default AboutUs;