import React from "react";
import { useEffect } from 'react';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import { quiz } from '../Questions/Questions';
import './Play.css'



const Play = ({activeQuestion,setActiveQuestion}) =>{

    
    
    const [selectedAnswer, setSelectedAnswer] = useState('')
    const [showResult, setShowResult] = useState(false)
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
    const [result, setResult] = useState({
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
        skippedQuestions: 0,
    })
    
     
    const[counter, setCounter] =useState( JSON.parse(localStorage.getItem('MY_COUNT_STATE')) || 80)
    

    useEffect(() => {
        window.localStorage.setItem('MY_COUNT_STATE',JSON.stringify(counter));
    }, [counter]);
    
    
    const { questions } = quiz
    const { question, choices, correctAnswer } = questions[activeQuestion]

    useEffect(() => {
        //timer for quiz - when timer reach 0 end screen appear
        const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        if (timer == 0) {
            setShowResult(true);
        }
        
        return () => clearInterval(timer);
    }, [counter])
    

    const addLeadingZero = (number) => (number > 9 ? number :`0${number}`)
    const onAnswerSelected = (answer,index) => {
        setSelectedAnswerIndex(index)
        if(answer === correctAnswer) {
            setSelectedAnswer(true)
        } else {
            setSelectedAnswer(false)
        }
    }
    
    const onClickNext = () => {
        if(selectedAnswerIndex === null){
            setResult((prev) =>{
                return{
                    ...prev,
                    skippedQuestions: prev.skippedQuestions +1,
                };
            }
            )
        } else{
            setSelectedAnswerIndex(null)
            setResult((prev) =>
                selectedAnswer
                    ?{
                        ...prev,
                        score: prev.score + 4,
                        correctAnswers: prev.correctAnswers + 1,
                    }
                    :{
                        ...prev,
                        score: prev.score -1,
                        wrongAnswers: prev.wrongAnswers +1,
                    }
            )
        }
        
        if((activeQuestion%10 )!== 9){
            setActiveQuestion((prev) => prev + 1)
        } 
        else{
            setActiveQuestion(0)
            setShowResult(true)
        }
        
    }

    return(
        <body className="PlayBody">
            <div className="Play_background"></div>
            
            <div className="quiz-container">
                {!showResult ?(
                    <div>
                    <div className="Play_heading"><h1>Quiz</h1></div>
                    <div>
                        <div className="timer-container">
                            <div className="top-right" style={{color: counter < 40 && '#FF5B52'}}>
                                Time Left : {Math.floor(counter/60)}:{counter%60}
                            </div>
                        </div>
                        
                        <span className="active-question-no">{addLeadingZero((activeQuestion %10)+1)}</span>
                        <span className="total-questions">/{addLeadingZero(10)}</span>
                        
                    </div>
                    <h2>{question}</h2>
                    <ul>
                        {choices.map((answer,index) =>(
                            <li 
                                onClick={() => onAnswerSelected(answer,index)}
                                key={answer}
                                className={selectedAnswerIndex === index ?'selected-answer' : null}>
                                {answer}
                            </li>
                        ))}
                    </ul>
                    <div className ="flex-right">
                        <button onClick={onClickNext} >
                        {selectedAnswerIndex === null ? 'Skip' : `${activeQuestion === questions.length-1 ? 'Finish' : 'Next'}` }
                        </button>
                    </div>
                </div>
                ) : (
                    <div className="result">
                        <h3>Result</h3>
                        <p>
                            Total Questions: <span>10</span>
                        </p>
                        <p>
                            Total Score: <span>{result.score}</span>
                        </p>
                        <p>
                            Skipped Questions:<span> {result.skippedQuestions}</span>
                        </p>
                        <p>
                            Unattempted Questions:<span> {10-result.correctAnswers-result.wrongAnswers-result.skippedQuestions}</span>
                        </p>
                        <p>
                            Correct Answers:<span> {result.correctAnswers}</span>
                        </p>
                        <p>
                            Wrong Answers:<span> {result.wrongAnswers}</span>
                        </p>
                        <button id="start-quiz-btn" onClick={()=>window.localStorage.setItem('MY_COUNT_STATE',JSON.stringify(80))}><Link to="/Home/QuizTopics" >Back</Link></button>
                    </div>

                )
            }
            </div>
        </body>
    )
}

export default Play;