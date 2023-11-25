import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import logo from './Logo_1.png'; 
import statue from './Statue_1.png' ;
import icon from './New-icon.gif' ;
import './Home.css'; // Import your custom CSS file
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Home = () => {
  const {loginWithRedirect, isAuthenticated , logout} = useAuth0();
 
  return (
    <>
       <div className="main"></div>
       <nav className="navbar navbar-expand-lg navbar-dark bg-transparent why">
        <div className="container">
          <a className="navbar-brand" href="/#"><Link to="/">
            <img src={logo} alt="logo" className="logo" style={{ height: '90px', width: '100px' }} />
            <img src={statue} alt="statue" className="statue" style={{ height: '80px', width: '80px' }} /></Link>
          </a>
          <button className="navbar-toggler shadow-none border" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" >
            <div className="offcanvas-header text-white border-bottom">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Atlas Codex</h5>
              <button type="button" class="btn-close btn-close-white shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body d-flex flex-column flex-lg-row p-4 p-lg-0">
              <ul className="navbar-nav justify-content-center align-items-center fs-5 flex-grow-1 pe-3">
                <li className="nav-item mx-2">
                  <button className="nav-link" data-bs-dismiss="offcanvas" >
                    <a className="nav-link" aria-current="page" href="/#"><Link className="nav-link" to="/">Home</Link></a>
                  </button>
                </li>
                <li className="nav-item mx-2">
                <button className="nav-link" data-bs-dismiss="offcanvas" >
                <a className="nav-link" href="/#" ><Link className="nav-link" to="/Home/AboutUs">About</Link></a>
                </button>
                  
                </li>
                <li class="nav-item mx-2">
                <button className="nav-link" data-bs-dismiss="offcanvas" >
                <a className="nav-link" href="/#" ><Link className="nav-link" to="/Home/Mission" >Missions</Link></a>
                </button>
                </li>
                <li className="nav-item dropdown mx-2">
                  <a className="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    More
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark bg-yellow">
                    <li><a className="dropdown-item" href="/#"><button className="nav-link" data-bs-dismiss="offcanvas"><Link to="/Home/History" className='drop'>History</Link></button></a></li>
                    <li><a className="dropdown-item" href="/#"><button className="nav-link" data-bs-dismiss="offcanvas"><Link to="/Home/Lessons" className='drop'>Lessons</Link></button></a></li>
                    <li><a className="dropdown-item" href="/#"><button className="nav-link" data-bs-dismiss="offcanvas"><Link to="/Home/QuizTopics" className='drop'>Quiz</Link></button></a></li>
                    <li><a className="dropdown-item " href="/#"><button className="nav-link" data-bs-dismiss="offcanvas"><Link to="/Home/LatestNews" className='drop'> Latest News & <br />Updates<img src={icon} alt="new-icon" className="new-icon" /></Link></button></a></li>
                  </ul>
                </li>
              </ul>
              <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3">
                {
                  isAuthenticated ? (
                    <button className='log text-decoration-none px-3 py-1  rounded-4' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
                  ) : (
                    <button className='log text-decoration-none px-3 py-1  rounded-4' onClick={() => loginWithRedirect()}><a href="/#" className="log">Login</a></button>
                  )
                }



              </div>
            </div>
          </div>
        </div>
      </nav>
      <main>
        <section className="d-flex flex-column justify-content-center align-items-center text-white fs-1">
          <h1 className="glow">ATLAS CODEX</h1>
        </section>
      </main>
      
    </>
  );
};

export default Home;
