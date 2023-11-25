import React from 'react';
import './Lesson.css'
import Navbar from '../Navbar/Navbar';

const Lessons = () => {
  return (
    <body className='leson' style={{ backgroundColor: 'black' }}>
      <div className="main"></div>
      <Navbar />
    <div className="container mt-5">
        <h1 className="text-center">Lessons</h1>

        <div className="row">
            <div className="col-md-4">
                <div className="lesson-card">
                    <a href="https://www.youtube.com/watch?v=H_OOSrneLOw" >
                        <div className="video-thumbnail" style={{backgroundImage: `url('https://img.youtube.com/vi/H_OOSrneLOw/maxresdefault.jpg')`}}>
                            <div className="play-button">
                                <img src="https://img.icons8.com/android/48/000000/play.png" alt="Play Button"/>
                            </div>
                        </div>
                    </a>
                    <h3>Helios - The Sun</h3>
                    <p>Helios - The Sun God of Greek Mythology - Greek Mythology in Comics - See U in History</p>
                    <a href="http://localhost:3000/" className="btn btn-primary practice-quiz">Practice</a>
                </div>
            </div>
            <div className="col-md-4">
                <div className="lesson-card">
                    <a href="https://www.youtube.com/watch?v=kOEDG3j1bjs" >
                        <div className="video-thumbnail" style={{backgroundImage: `url('https://img.youtube.com/vi/kOEDG3j1bjs/maxresdefault.jpg')`}}>
                            <div className="play-button">
                                <img src="https://img.icons8.com/android/48/000000/play.png" alt="Play Button"/>
                            </div>
                        </div>
                    </a>
                    <h3>Black Holes</h3>
                    <p>At the center of our galaxy, a supermassive black hole churns....</p>
                    <a href="http://localhost:3000/" className="btn btn-primary practice-quiz">Practice</a>
                </div>
            </div>
            <div className="col-md-4">
                <div className="lesson-card">
                    <a href="https://www.youtube.com/watch?v=8wFRZV4WiGE" >
                        <div className="video-thumbnail" style={{backgroundImage: `url('https://img.youtube.com/vi/8wFRZV4WiGE/maxresdefault.jpg')`}}>
                            <div className="play-button">
                                <img src="https://img.icons8.com/android/48/000000/play.png" alt="Play Button"/>
                            </div>
                        </div>
                    </a>
                    <h3>What is a Comet?</h3>
                    <p>This video was created in association with Fireballs Aotearoa, a meteor....</p>
                    <a href="http://localhost:3000/" className="btn btn-primary practice-quiz">Practice</a>
                </div>
            </div>
         

        </div>

        <div className="row">
            
            <div className="col-md-4">
                <div className="lesson-card">
                    <a href="https://www.youtube.com/watch?v=HH2MgnhSyk8" >
                        <div className="video-thumbnail" style={{backgroundImage: `url('https://img.youtube.com/vi/HH2MgnhSyk8/maxresdefault.jpg')`}}>
                            <div className="play-button">
                                <img src="https://img.icons8.com/android/48/000000/play.png" alt="Play Button"/>
                            </div>
                        </div>
                    </a>
                    <h3>Milky Way Galaxy</h3>
                    <p>Are you looking for a video on Milky Way?  You are in the right place....</p>
                    <a href="http://localhost:3000/" className="btn btn-primary practice-quiz">Practice</a>
                </div>
            </div>
            <div className="col-md-4">
                <div className="lesson-card">
                    <a href="https://www.youtube.com/watch?v=0Dnk4IThcYo" >
                        <div className="video-thumbnail" style={{backgroundImage: `url('https://img.youtube.com/vi/0Dnk4IThcYo/maxresdefault.jpg')`}}>
                            <div className="play-button">
                                <img src="https://img.icons8.com/android/48/000000/play.png" alt="Play Button"/>
                            </div>
                        </div>
                    </a>
                    <h3>Jupiter A Failed Star</h3>
                    <p>Is Jupiter A Failed Star? And What Would Happen If It Really Became One? .....</p>
                    <a href="http://localhost:3000/" className="btn btn-primary practice-quiz">Practice</a>
                </div>
            </div>
            <div className="col-md-4">
                <div className="lesson-card">
                    <a href="https://www.youtube.com/watch?v=PM9CQDlQI0A" >
                        <div className="video-thumbnail" style={{backgroundImage: `url('https://img.youtube.com/vi/PM9CQDlQI0A/maxresdefault.jpg')`}}>
                            <div className="play-button">
                                <img src="https://img.icons8.com/android/48/000000/play.png" alt="Play Button"/>
                            </div>
                        </div>
                    </a>
                    <h3>The Life Cycle of Stars</h3>
                    <p>Explains how we believe stars are born, live and die and the different ends to different...</p>
                    <a href="http://localhost:3000/" className="btn btn-primary practice-quiz">Practice</a>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4">
                <div className="lesson-card">
                    <a href="https://www.youtube.com/watch?v=ZccTTUX-dBc" >
                        <div className="video-thumbnail" style={{backgroundImage: `url('https://img.youtube.com/vi/ZccTTUX-dBc/maxresdefault.jpg')`}}>
                            <div className="play-button">
                                <img src="https://img.icons8.com/android/48/000000/play.png" alt="Play Button"/>
                            </div>
                        </div>
                    </a>
                    <h3>Gravity a Space-Time curvature</h3>
                    <p>Einstein’s relativity, and how it relates to gravity, explained in less than 10 minutes..... </p>
                    <a href="http://localhost:3000/" className="btn btn-primary practice-quiz">Practice</a>
                </div>
            </div>
            <div className="col-md-4">
                <div className="lesson-card">
                    <a href="https://www.youtube.com/watch?v=GnZ3dogED7w" >
                        <div className="video-thumbnail" style={{backgroundImage: `url('https://img.youtube.com/vi/GnZ3dogED7w/maxresdefault.jpg')`}}>
                            <div className="play-button">
                                <img src="https://img.icons8.com/android/48/000000/play.png" alt="Play Button"/>
                            </div>
                        </div>
                    </a>
                    <h3>Solar Eclipse and Lunar Eclipse</h3>
                    <p>A Solar Eclipse or a Lunar Eclipse happen when the Sun, Earth, Moon, and the lunar.....</p>
                    <a href="http://localhost:3000/" className="btn btn-primary practice-quiz">Practice</a>
                </div>
            </div>
            <div className="col-md-4">
                <div className="lesson-card">
                    <a href="https://www.youtube.com/watch?v=Hy8fB32GZoc" >
                        <div className="video-thumbnail" style={{backgroundImage: `url('https://img.youtube.com/vi/Hy8fB32GZoc/maxresdefault.jpg')`}}>
                            <div className="play-button">
                                <img src="https://img.icons8.com/android/48/000000/play.png" alt="Play Button"/>
                            </div>
                        </div>
                    </a>
                    <h3>Nuclear Fusion Powers Stars</h3>
                    <p>The energy produced by nuclear fusion powers stars like our own Sun. This clip examines..... </p>
                    <a href="http://localhost:3000/" className="btn btn-primary practice-quiz">Practice</a>
                </div>
            </div>

        </div>
    </div>
    </body>
  );
};

export default Lessons;
