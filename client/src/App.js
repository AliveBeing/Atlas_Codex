import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Home from './components/Pages/Home/Home'
import AboutUs from './components/Pages/AboutUs/AboutUs'
import History from './components/Pages/History/History'
import Mission from './components/Pages/Mission/Mission';
import Lessons from './components/Pages/Lessons/Lesson';

import QuizTopics from './components/Pages/Quiz/QuizTopics/QuizTopics';
import Instructions from './components/Pages/Quiz/Instructions/Instructions'
import Play from './components/Pages/Quiz/Play/Play';
import Tracking from './components/Pages/Mission/ISS/Tracking/Tracking';
import Curiosity from './components/Pages/Mission/Curiosity/Curiosity';
import { inject } from '@vercel/analytics';
import MarsRover from './components/Pages/Mission/MarsRover/MarsRover';
import LatestNews from './components/Pages/LatestNews/LatestNews';

inject()

const App = () => {


  const [activeQuestion,setActiveQuestion] =useState( JSON.parse(localStorage.getItem('MY_APP_STATE')) || 0)

  useEffect(() => {
    window.localStorage.setItem('MY_APP_STATE',JSON.stringify(activeQuestion));
  }, [activeQuestion]);
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
         <Route path="/Home/AboutUs" exact element={<AboutUs />} />
         <Route path="/Home/History" exact element={<History />} />
         <Route path="/Home/Mission" exact element={<Mission />} />
         <Route path="/Home/QuizTopics" exact element={<QuizTopics activeQuestion={activeQuestion} setActiveQuestion={setActiveQuestion} />} />
         <Route path="/Home/QuizTopics" exact element={<QuizTopics activeQuestion={activeQuestion} setActiveQuestion={setActiveQuestion} />} />
         <Route path="/Home/QuizTopics/Instructions" exact element={<Instructions />} />
         <Route path="/Home/QuizTopics/Play" exact element={<Play activeQuestion={activeQuestion} setActiveQuestion={setActiveQuestion} />} />
         <Route path="/Home/Lessons" exact element={<Lessons />} /> 
         <Route path="/Home/Mission/ISS" exact element={<Tracking />} />
         <Route path="/Home/Mission/Curiosity" exact element={<Curiosity />} />
         <Route path="/Home/Mission/MarsRover" exact element={<MarsRover />} />
         <Route path="/Home/LatestNews" exact element={<LatestNews />} />

      </Routes>
      
    </Router>
    </div>
  );
}



export default App;
