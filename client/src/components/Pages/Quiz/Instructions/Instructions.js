import React from "react";
import {Link} from 'react-router-dom';
import './Instructions.css'

const Instructions = () => (
    
    <body id="body-rules">
        <div className="InstructionsAnimate"></div>
        <div id="quiz-instructions">
            <h1>Welcome to the Quiz!</h1>
            <div id="marking-scheme">
                <h2>Marking Scheme:</h2>
                <p className="chii">+4 for every correct answer</p>
                <p className="chii">-1 for every wrong answer</p>
                <p className="chii">No penalty for skipping</p>
            </div>

            <div id="quiz-details">
                <h2>Quiz Details:</h2>
                <p className="chii"><strong>Total Number of Questions:</strong> 10</p>
                <p className="chii"><strong>Total Time:</strong> 80 seconds</p>
            </div>
            <div id="buttons">
                <button id="start-quiz-btn"><Link to="/Home/QuizTopics/Play" >Start</Link></button>
                <button id="back-btn"><Link to="/Home/QuizTopics" >Back</Link></button>
            </div>
        
        </div>
    </body>
    
);

export default Instructions;