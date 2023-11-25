import React, { Fragment } from "react";

import { Link } from 'react-router-dom';

import style from "./QuizTopics.module.css";
import Navbar from "../../Navbar/Navbar";



const QuizTopics =({activeQuestion,setActiveQuestion}) =>{ 

    

    return (
        <body className={style.ery}>
            <div className={style.main}></div>
            <Navbar />
            <div id="home">
                <div if="primary" className={style.site_content}>
                    <div className={style.heading}><h1>Quizes</h1></div>
                    
                    <div className={style.live_wrapper}>
                        <div className={style.container}>
                            <div className={style.quiz_wrapper}>
                                <h2>Topics :</h2>
                                <ul className={style.quiz_list}>					
                                    <li>
                                        <div className={style.q_pic}>
                                            <img src="https://c4.wallpaperflare.com/wallpaper/1003/716/866/space-sun-hd-wallpapers-cool-desktop-background-images-widescreen-1-wallpaper-preview.jpg" alt="banner"/>
                                        </div>
                                        <div className={style.description_wrapper}> 
                                            <h3>Helious - The Sun</h3>
                                            
                                            <div className={style.ques_block}>
                                            <div className={style.question_detail}>
                                                <div className={style.no_of_ques}>
                                                    <div className={style.qcount}>10</div>
                                                    Questions 
                                                </div>
                                                <div className={style.quiz_time}>
                                                    <div className={style.time_duration}>
                                                        80 
                                                        <small>sec</small>
                                                    </div>
                                                    Duration
                                                </div>
                                            </div>
                                            <a  className={style.quizplay_btn} onClick={() => setActiveQuestion(0)}><Link to="/Home/QuizTopics/Instructions" >Play</Link></a>             
                                            </div>
                                            <div className={style.item_foo}>
                                                <h3>Embark on a solar journey! Do you know about Helios, the mythical solar god? Challenge the mysteries surrounding the radiant star our Sun. 🌞✨</h3>
                                            </div>
                                        </div>
                                        <div className={style.qz_info}><Link to="/Home/Lessons" ><div className={style.quiz_by}><small>Learn :</small> Lessons on Sun</div></Link></div>
                                    </li>

                                    <li>
                                        <div className={style.q_pic}>
                                            <img src="https://4kwallpapers.com/images/walls/thumbs_3t/9621.jpg" alt="banner"/>
                                        </div>
                                        <div className={style.description_wrapper}> 
                                            <h3>Black Hole</h3>
                                            
                                            <div className={style.ques_block}>
                                            <div className={style.question_detail}>
                                                <div className={style.no_of_ques}>
                                                    <div className={style.qcount}>10</div>
                                                    Questions 
                                                </div>
                                                <div className={style.quiz_time}>
                                                    <div className={style.time_duration}>
                                                        80 
                                                        <small>sec</small>
                                                    </div>
                                                    Duration
                                                </div>
                                            </div>
                                            <a className={style.quizplay_btn} onClick={() => setActiveQuestion(10)}><Link to="/Home/QuizTopics/Instructions" >Play</Link></a>             
                                            </div>
                                            <div className={style.item_foo}>
                                                <h3>Plunge into the abyss! Explore the enigmatic world of black holes, where even light gets swallowed. Unravel the mysteries surrounding these celestial voids. 🌌⚫️</h3>
                                            </div>
                                        </div>
                                        <div className={style.qz_info}><Link to="/Home/Lessons" ><div className={style.quiz_by}><small>Learn :</small> Lessons on Black Holes</div></Link></div>
                                    </li>
                            
                                    <li>
                                        <div className={style.q_pic}>
                                            <img src="https://c4.wallpaperflare.com/wallpaper/848/971/640/clouds-comet-kimi-no-na-wa-sky-wallpaper-preview.jpg" alt="banner"/>
                                        </div>
                                        <div className={style.description_wrapper}> 
                                            <h3>The Comets</h3>
                                            
                                            <div className={style.ques_block}>
                                            <div className={style.question_detail}>
                                                <div className={style.no_of_ques}>
                                                    <div className={style.qcount}>10</div>
                                                    Questions 
                                                </div>
                                                <div className={style.quiz_time}>
                                                    <div className={style.time_duration}>
                                                        80 
                                                        <small>sec</small>
                                                    </div>
                                                    Duration
                                                </div>
                                            </div>
                                            <a className={style.quizplay_btn} onClick={() => setActiveQuestion(20)}><Link to="/Home/QuizTopics/Instructions" >Play</Link></a>             
                                            </div>
                                            <div className={style.item_foo}>
                                                <h3>Embark on a cosmic voyage! Discover the mesmerizing tails of comets, celestial wanderers that light up the night sky. Delve into the captivating mysteries of these icy marvels. 🌠✨</h3>
                                            </div>
                                        </div>
                                        <div className={style.qz_info}><Link to="/Home/Lessons" ><div className={style.quiz_by}><small>Learn :</small> Lessons on Comets</div></Link></div>
                                    </li>

                                    <li>
                                        <div className={style.q_pic}>
                                            <img src="https://c4.wallpaperflare.com/wallpaper/235/107/585/stars-space-galaxy-nebula-wallpaper-preview.jpg" alt="banner"/>
                                        </div>
                                        <div className={style.description_wrapper}> 
                                            <h3>Milky Way Galaxy</h3>
                                            
                                            <div className={style.ques_block}>
                                            <div className={style.question_detail}>
                                                <div className={style.no_of_ques}>
                                                    <div className={style.qcount}>10</div>
                                                    Questions 
                                                </div>
                                                <div className={style.quiz_time}>
                                                    <div className={style.time_duration}>
                                                        80 
                                                        <small>sec</small>
                                                    </div>
                                                    Duration
                                                </div>
                                            </div>
                                            <a className={style.quizplay_btn} onClick={() => setActiveQuestion(30)}><Link to="/Home/QuizTopics/Instructions" >Play</Link></a>             
                                            </div>
                                            <div className={style.item_foo}>
                                                <h3>Explore the grandeur of the Milky Way Galaxy! Marvel at its vast expanse, swirling with billions of stars. Unveil the secrets of this cosmic masterpiece that captivates our night sky. 🌌✨</h3>
                                            </div>
                                        </div>
                                        <div className={style.qz_info}><Link to="/Home/Lessons" ><div className={style.quiz_by}><small>Learn :</small> Lessons on MilkyWay Galaxy</div></Link></div>
                                    </li>

                                    <li>
                                        <div className={style.q_pic}>
                                            <img src="https://i.ytimg.com/vi/0Dnk4IThcYo/maxresdefault.jpg" alt="banner"/>
                                        </div>
                                        <div className={style.description_wrapper}> 
                                            <h3>Jupitar a failed Star</h3>
                                            
                                            <div className={style.ques_block}>
                                            <div className={style.question_detail}>
                                                <div className={style.no_of_ques}>
                                                    <div className={style.qcount}>10</div>
                                                    Questions 
                                                </div>
                                                <div className={style.quiz_time}>
                                                    <div className={style.time_duration}>
                                                        80 
                                                        <small>sec</small>
                                                    </div>
                                                    Duration
                                                </div>
                                            </div>
                                            <a className={style.quizplay_btn} onClick={() => setActiveQuestion(40)}><Link to="/Home/QuizTopics/Instructions" >Play</Link></a>             
                                            </div>
                                            <div className={style.item_foo}>
                                                <h3>Jupiter: A celestial giant, once considered a failed star. Delve into its immense size and influence, pondering its captivating role in our solar system's dance. 🪐✨</h3>
                                            </div>
                                        </div>
                                        <div className={style.qz_info}><Link to="/Home/Lessons" ><div className={style.quiz_by}><small>Learn :</small> Lessons on Jupitar</div></Link></div>
                                    </li>

                                    <li>
                                        <div className={style.q_pic}>
                                            <img src="https://cdn1.byjus.com/wp-content/uploads/2023/04/Life-Cycle-of-a-Star.png" alt="banner"/>
                                        </div>
                                        <div className={style.description_wrapper}> 
                                            <h3>Journey of Stars from Birth to Death</h3>
                                            
                                            <div className={style.ques_block}>
                                            <div className={style.question_detail}>
                                                <div className={style.no_of_ques}>
                                                    <div className={style.qcount}>10</div>
                                                    Questions 
                                                </div>
                                                <div className={style.quiz_time}>
                                                    <div className={style.time_duration}>
                                                        80 
                                                        <small>sec</small>
                                                    </div>
                                                    Duration
                                                </div>
                                            </div>
                                            <a className={style.quizplay_btn} onClick={() => setActiveQuestion(50)}><Link to="/Home/QuizTopics/Instructions" >Play</Link></a>             
                                            </div>
                                            <div className={style.item_foo}>
                                                <h3>Begin an astral voyage! Discover the celestial odyssey from stellar infancy to the cosmic finale. Unravel the secrets of star birth, evolution, and the majestic spectacle of their inevitable demise. ⭐🌌✨</h3>
                                            </div>
                                        </div>
                                        <div className={style.qz_info}><Link to="/Home/Lessons" ><div className={style.quiz_by}><small>Learn :</small> Lessons on Life cycle of Stars</div></Link></div>
                                    </li>
                            
                                    <li>
                                        <div className={style.q_pic}>
                                            <img src="https://natureofgravity.files.wordpress.com/2012/04/slide52.gif" alt="banner"/>
                                        </div>
                                        <div className={style.description_wrapper}> 
                                            <h3>Gravity a Space-Time curvature</h3>
                                            
                                            <div className={style.ques_block}>
                                            <div className={style.question_detail}>
                                                <div className={style.no_of_ques}>
                                                    <div className={style.qcount}>10</div>
                                                    Questions 
                                                </div>
                                                <div className={style.quiz_time}>
                                                    <div className={style.time_duration}>
                                                        80 
                                                        <small>sec</small>
                                                    </div>
                                                    Duration
                                                </div>
                                            </div>
                                            <a className={style.quizplay_btn} onClick={() => setActiveQuestion(60)}><Link to="/Home/QuizTopics/Instructions" >Play</Link></a>             
                                            </div>
                                            <div className={style.item_foo}>
                                                <h3>Embark on a gravitational odyssey! Delve into the enigmatic space-time curvature—where the laws of physics shape the cosmic fabric. Explore the captivating interplay of gravity🌌⏳✨</h3>
                                            </div>
                                        </div>
                                        <div className={style.qz_info}><Link to="/Home/Lessons" ><div className={style.quiz_by}><small>Learn :</small>Lessons on Gravity</div></Link></div>
                                    </li>

                                    <li>
                                        <div className={style.q_pic}>
                                            <img src="https://img.jagranjosh.com/images/2023/April/2842023/what-is-the-differencce-between-solar-eclipse-and-lunar-eclipse.jpg" alt="banner"/>
                                        </div>
                                        <div className={style.description_wrapper}> 
                                            <h3>Solar Eclipse and lunar Eclipse</h3>
                                            
                                            <div className={style.ques_block}>
                                            <div className={style.question_detail}>
                                                <div className={style.no_of_ques}>
                                                    <div className={style.qcount}>10</div>
                                                    Questions 
                                                </div>
                                                <div className={style.quiz_time}>
                                                    <div className={style.time_duration}>
                                                        80 
                                                        <small>sec</small>
                                                    </div>
                                                    Duration
                                                </div>
                                            </div>
                                            <a className={style.quizplay_btn} onClick={() => setActiveQuestion(70)}><Link to="/Home/QuizTopics/Instructions" >Play</Link></a>             
                                            </div>
                                            <div className={style.item_foo}>
                                                <h3>Embark on an eclipse odyssey! Discover the enthralling cosmic ballet between the sun, moon, and Earth. Explore the captivating solar and lunar dances, where shadows paint celestial wonders across the sky. 🌒🌞✨</h3>
                                            </div>
                                        </div>
                                        <div className={style.qz_info}><Link to="/Home/Lessons" ><div className={style.quiz_by}><small>Learn :</small>Lessons on Solar & Lunar Eclipse</div></Link></div>
                                    </li>
                                    
                                    <li>
                                        <div className={style.q_pic}>
                                            <img src="https://i.ytimg.com/vi/O3wRlPNAnrA/sddefault.jpg" alt="banner"/>
                                        </div>
                                        <div className={style.description_wrapper}> 
                                            <h3>Nuclear Fusion in Stars</h3>
                                            
                                            <div className={style.ques_block}>
                                            <div className={style.question_detail}>
                                                <div className={style.no_of_ques}>
                                                    <div className={style.qcount}>10</div>
                                                    Questions 
                                                </div>
                                                <div className={style.quiz_time}>
                                                    <div className={style.time_duration}>
                                                        80 
                                                        <small>sec</small>
                                                    </div>
                                                    Duration
                                                </div>
                                            </div>
                                            <a className={style.quizplay_btn} onClick={() => setActiveQuestion(80)}><Link to="/Home/QuizTopics/Instructions" >Play</Link></a>             
                                            </div>
                                            <div className={style.item_foo}>
                                                <h3>Embark on a stellar fusion voyage! Delve into the heart of stars where atoms dance, forging elements and illuminating the cosmos. Witness the celestial alchemy of nuclear fusion, where energy ignites from the union of atomic cores, lighting the cosmic stage. ⭐🔥✨</h3>
                                            </div>
                                        </div>
                                        <div className={style.qz_info}><Link to="/Home/Lessons" ><div className={style.quiz_by}><small>Learn :</small> Lessons on Fusion in stars</div></Link></div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>  
            Topic(index);
            
        </body>
        
    );
}


export default QuizTopics