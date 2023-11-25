import IssDataStyle from './IssData.module.css';
import React from 'react';


function IssData() {
    const [issData, setISSDATA] = React.useState({});
    

    React.useEffect(() => {
        const getISSDATA = async () => {
            const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
            const data = await response.json();
            setISSDATA(data);
        };
        getISSDATA();
        const interval = setInterval(getISSDATA, 3000);
        return () => clearInterval(interval);
    }, []);

    
    //Calculates the date (time and day) based on the position of the ISS
    const date = new Date(issData.timestamp * 1000);
    const formattedTime = date.toLocaleTimeString('fr-FR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });
    const daylight = issData.visibility === 'daylight';
    return (
        <section className={IssDataStyle.Iss_informations}>
            <div className={IssDataStyle.iss_data}>
                <div className={IssDataStyle.iss_longitude}>
                    <p>Longitude:</p>
                    <p>{issData.longitude}</p>
                </div>
                <div className={IssDataStyle.iss_latitude}>
                    <p>Latitude:</p>
                    <p>{issData.latitude}</p>
                </div>
                <div className={IssDataStyle.iss_altitude}>
                    <p>Altitude:</p>
                    <p>{issData.altitude}</p>
                </div>
                <div className={IssDataStyle.iss_velocity}>
                    <p>Velocity:</p>
                    <p>{issData.velocity}</p>
                </div>
                <div className={IssDataStyle.iss_daily}>
                    <p>Date:</p>
                    <p>{formattedTime}</p>
                </div>
                <div className={IssDataStyle.iss_visibility}>
                    <p>Visibility:</p>
                    <p>{daylight ? 'Day' : 'Night'}</p>
                </div>
                <div className={IssDataStyle.iss_astronautno}>
                    <p>Number of Astronauts:</p>
                    <p> 6</p>
                </div>
            </div>
            
        </section>
    );
};

export default IssData;