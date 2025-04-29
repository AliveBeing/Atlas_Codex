import React from 'react';
import styles from './Curiosity.module.css'
import {useState} from 'react';
import { Link } from 'react-router-dom';

import './Curiosity.module.css'

function Camera({camera,number,date}) {
    //const [camera, setCamera] = React.useState("FHAZ");
    const[isLoading,setIsLoading]=useState(true);
    const InitialRoverData = {
        "photos": [
          {
            "id": 1206687,
            "sol": 4003,
            "camera": {
              "id": 20,
              "name": "FHAZ",
              "rover_id": 5,
              "full_name": "Front Hazard Avoidance Camera"
            },
            "img_src": "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/02938/opgs/edr/fcam/FLB_658330616EDR_F0831518FHAZ00302M_.JPG",
            "earth_date": "2023-11-10",
            "rover": {
              "id": 5,
              "name": "Curiosity",
              "landing_date": "2012-08-06",
              "launch_date": "2011-11-26",
              "status": "active",
              "max_sol": 4003,
              "max_date": "2023-11-10",
              "total_photos": 686531,
              "cameras": [
                {
                  "name": "FHAZ",
                  "full_name": "Front Hazard Avoidance Camera"
                },
                {
                  "name": "NAVCAM",
                  "full_name": "Navigation Camera"
                },
                {
                  "name": "MAST",
                  "full_name": "Mast Camera"
                },
                {
                  "name": "CHEMCAM",
                  "full_name": "Chemistry and Camera Complex"
                },
                {
                  "name": "MAHLI",
                  "full_name": "Mars Hand Lens Imager"
                },
                {
                  "name": "MARDI",
                  "full_name": "Mars Descent Imager"
                },
                {
                  "name": "RHAZ",
                  "full_name": "Rear Hazard Avoidance Camera"
                }
              ]
            }
          },
          {
            "id": 1206688,
            "sol": 4003,
            "camera": {
              "id": 20,
              "name": "FHAZ",
              "rover_id": 5,
              "full_name": "Front Hazard Avoidance Camera"
            },
            "img_src": "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/04003/opgs/edr/fcam/FRB_752860376EDR_F1050418FHAZ00400M_.JPG",
            "earth_date": "2023-11-10",
            "rover": {
              "id": 5,
              "name": "Curiosity",
              "landing_date": "2012-08-06",
              "launch_date": "2011-11-26",
              "status": "active",
              "max_sol": 4003,
              "max_date": "2023-11-10",
              "total_photos": 686531,
              "cameras": [
                {
                  "name": "FHAZ",
                  "full_name": "Front Hazard Avoidance Camera"
                },
                {
                  "name": "NAVCAM",
                  "full_name": "Navigation Camera"
                },
                {
                  "name": "MAST",
                  "full_name": "Mast Camera"
                },
                {
                  "name": "CHEMCAM",
                  "full_name": "Chemistry and Camera Complex"
                },
                {
                  "name": "MAHLI",
                  "full_name": "Mars Hand Lens Imager"
                },
                {
                  "name": "MARDI",
                  "full_name": "Mars Descent Imager"
                },
                {
                  "name": "RHAZ",
                  "full_name": "Rear Hazard Avoidance Camera"
                }
              ]
            }
          }
        ]
      };
      

    const [roverdata, setRoverdata] = useState(InitialRoverData);
    

    const getRoverdata = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=JQubNxQsommdg1HAWvOEj2JUlLykvbzMtjsaAOD3&camera=${camera}`);
            const data = await response.json();
            setRoverdata(data);
        } catch (error) {
            console.error('Error fetching rover data:', error);
        } finally {
            setIsLoading(false);
        }
    };
    
    React.useEffect(() => {
        getRoverdata();
        
    }, []);
    
   

    return (
        <>
        {isLoading ? (<h1 className={styles.load}>Loading...</h1>) :(
        <section className={styles.FHAZ}>
            
            <h2 id="hubblesite"> {number}. <a>{camera} Image</a> </h2>
            <ul className={styles.quiz_list}>					
                <li>
                    <div className={styles.q_pic}>
                        <img src={!isLoading  ? roverdata.photos[0].img_src : null} alt="banner"/>
                    </div>
                    <div className={styles.description_wrapper}> 
                        
                        
                        <div className={styles.item_foo}>
                            <p>Sol(day on mars) : {!isLoading ? roverdata.photos[0].sol : null}</p>
                            <p>Camera Name : {!isLoading ? roverdata.photos[0].camera.full_name : null}</p>
                            <p>Earth Date : {!isLoading ? roverdata.photos[0].earth_date : null}</p>
                            <p>Rover Name : {!isLoading ? roverdata.photos[0].rover.name : null}</p>
                            <p>Launch Date : {!isLoading ? roverdata.photos[0].rover.launch_date : null}</p>
                            <p>Landing Date : {!isLoading ? roverdata.photos[0].rover.landing_date : null}</p>
                            <p>Status : {!isLoading ? roverdata.photos[0].rover.status : null}</p>
                        </div>
                    </div>
                    
                </li>

                <li>
                    <div className={styles.q_pic}>
                        <img src={!isLoading  ? roverdata.photos[1].img_src : null} alt="banner"/>
                    </div>
                    <div className={styles.description_wrapper}> 
                        
                        
                        <div className={styles.item_foo}>
                            <p>Sol(day on mars) :{!isLoading ? roverdata.photos[1].sol : null}</p>
                            <p>Camera Name : {!isLoading ? roverdata.photos[1].camera.full_name : null}</p>
                            <p>Earth Date : {!isLoading ? roverdata.photos[1].earth_date : null}</p>
                            <p>Rover Name : {!isLoading ? roverdata.photos[1].rover.name : null}</p>
                            <p>Launch Date : {!isLoading ? roverdata.photos[1].rover.launch_date : null}</p>
                            <p>Landing Date : {!isLoading ? roverdata.photos[1].rover.landing_date : null}</p>
                            <p>Status : {!isLoading ? roverdata.photos[1].rover.status : null}</p>
                        </div>
                    </div>
                    
                </li>

               

            </ul>
            
        </section>
        )}
        </>
    );
};

export default Camera;