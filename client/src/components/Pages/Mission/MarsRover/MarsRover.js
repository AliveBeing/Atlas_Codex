import React, { Fragment } from "react";
import Navbar from "../../Navbar/Navbar";

import style from'./MarsRover.module.css'
const MarsRover = () => {
    return (
        <>
        <body className={style.marsr}>
    <div className={style.main}></div>
    <Navbar />
    <div className={style.header}>
        <h1 className={style.rrr}>
            MARS WEATHER REPORT
          </h1>
    </div>
    
    <div className={style.give}>
        <div className={style.paras}>
      <p className={style.paragf}>
    In Greek mythology, Mars was known as "Ares," the god of war. He was revered for his br /avery, strength, and association with conflict, embodying the spirit of warfare in Greek culture. Ares was often depicted as a fierce warrior, wielding a spear or sword, and was considered one of the twelve Olympian gods. <br /> <br /> The weather on Mars is extremely cold, with average temperatures around -80 degrees Fahrenheit (-60 degrees Celsius). Its thin atmosphere leads to dramatic temperature variations between day and night, and it experiences intense dust storms that can engulf the entire planet for months. <br /> <br />

        Currently, there are several active rovers exploring Mars, including NASA's Perseverance rover, which landed on Mars' Jezero Crater in Febr /uary 2021. Perseverance aims to search for signs of past microbial life, collect rock samples, and conduct experiments to prepare for future human missions. <br /> <br /> Other active rovers include Curiosity, which landed in 2012 and continues to study Mars' geology and climate, and China's Zhurong rover, which landed on Mars in May 2021 as part of the Tianwen-1 mission, exploring the Utopia Planitia region.
        
        These rovers play crucial roles in advancing our understanding of Mars' geological history, potential habitability, and pave the way for future human exploration missions to this intriguing planet.
       <br /><br /> Certainly, here's a point-wise presentation focusing on Mars, Ares in Greek Mythology, Mars' weather, and the current active rovers on the planet: <br /> <br />

<h2 >*Mars (Ares in Greek Mythology):*</h2>
- Ares, the Greek god of war, was revered for br /avery and association with conflict. <br />
- The Roman counterpart, Mars, lends its name to the red planet. <br /> <br />

<h2 >*Mars - The Red Planet:*</h2>
- Fourth planet from the Sun, renowned for its reddish appearance due to iron oxide. <br />
- Features diverse landscapes including valleys, deserts, and Olympus Mons, the largest volcano. <br /> <br />

 
</p>  
    </div> 
     <iframe width="340px" height="870" scrolling="yes" frameborder="0" src="http://cab.inta-csic.es/rems/wp-content/plugins/marsweather-widget/widget.php?lang=en"></iframe>   
    
  
</div>
<div className={style.weather_right}>
  <iframe src='https://mars.nasa.gov/layout/embed/image/mslweather/'  height='622' scrolling='no' frameborder='0'></iframe>
</div> 
  </body>          
  </>
  );
}

export default MarsRover
