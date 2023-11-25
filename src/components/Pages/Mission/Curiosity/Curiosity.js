import React from 'react';

import Camera from './Camera';
import Navbar from '../../Navbar/Navbar';
import styles from './Curiosity.module.css'
function Curiosity() {
    return (
        <body className={styles.Home}>
            <div className={styles.main}></div>
            <Navbar />
                <div if="primary" className={styles.site_content}>
                    <div><h1 className={styles.marss}>Mars Images By Curiosity</h1></div>
                    <hr />
                    <div className={styles.live_wrapper}>
                        <div className={styles.container}>
                            <div className={styles.quiz_wrapper}>
                                <div className={styles.curiocity_img}>
                                    <img  src="https://cms.accuweather.com/wp-content/uploads/2020/03/cropped-Screen-Shot-2020-03-05-at-9.06.09-PM.png" alt="banner"/>
                                </div>
                                <Camera camera="FHAZ" number="1" date="2023-10-11"/>
                                <Camera camera="RHAZ" number="2" date="2023-10-11"/>
                                <Camera camera="NAVCAM" number="3" date="2023-10-11"/>
                                <h1 className={styles.old}>OLD PHOTOS : </h1><br /><br />
                                
                                <Camera camera="MAST" number="4" date="2020-11-20"/>

                                {/* <Camera camera="MAHLI" number="4" date="2020-10-11"/>
                                <Camera camera="MINITES" number="7" date="2020-10-11"/>
                                <Camera camera="CHEMCAM" number="8" date="2020-10-11"/> */}
                            </div>
                        </div>
                    </div>
                </div>
            
        </body>
    );
}

export default Curiosity;