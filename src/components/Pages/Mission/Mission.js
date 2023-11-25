import React from 'react'
import './Mission.css';
import iss from './ISS.jpeg'
import rover from './rover.gif'
import insight from './insight-rover.jpeg'
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
const Mission = () => {
  return (
    <div className="missions">

      <div className="main"></div>
      <Navbar />
      <h1 className="mission">Missions</h1>
      <Link to='/Home/Mission/ISS'>
      <div className="big">
        <div className="imgBx">
          <img className="self" src={iss} alt="" />
        </div>
        <div className="value">
          <h2>
            International Space Station
            <br />
            <span>(ISS)</span>
          </h2>
        </div>
      </div>
      </Link>
      <Link to='/Home/Mission/Curiosity'>
      <div className="big">
        <div className="imgBx">
          <img className="self" src={rover} alt="" />
        </div>
        <div className="value">
          <h2>
            Curiosity Rover
            <br />
            <span>(Pictures from Mars by Curiosity)</span>
          </h2>
        </div>
      </div>
      </Link>
      <Link to='/Home/Mission/MarsRover'>
      <div className="big">
        <div className="imgBx">
          <img className="self" src={insight} alt="" />
        </div>
        <div className="value">
          <h2>
           Mars Rover Environmental Monitoring Station
            <br />
            <span>(REMS)</span>
          </h2>
        </div>
      </div>
      </Link>

    </div>
  );
}

export default Mission;
