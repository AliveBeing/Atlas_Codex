import React from 'react';
import { MapContainer, TileLayer, Marker, useMap, Popup} from 'react-leaflet';
import L from 'leaflet';
import MapStyle from './Map.module.css';
import icon from './issdaylight.svg';
import icon1 from './isseclipsed.svg';

const ISSMarkerdaylight = L.icon({
    iconUrl: icon,
    iconSize: [45, 45],
    iconAnchor: [25, 50], 
    popupAnchor: [0, -50]
});

const ISSMarkereclipsed = L.icon({
    iconUrl: icon1,
    iconSize: [45, 45],
    iconAnchor: [25, 50],
    popupAnchor: [0, -50]
});

function Map () {
    const [issPosition, setISSPosition] = React.useState({ lat: 0, lng: 0 });
    const [issVisibility, setISSVisibility] = React.useState("daylight"); // added visibility of the ISS
    React.useEffect(() => {
        const getISSPosition = async () => {
        const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
        const data = await response.json();
        setISSPosition({ lat: data.latitude, lng: data.longitude });
        setISSVisibility(data.visibility); // Updated ISS visibility
    };
    getISSPosition();
    const interval = setInterval(getISSPosition, 3000);
    return () => clearInterval(interval);
}, []); // Convert Visibility to Meters
const goToISSPosition = () => {
    mapRef.current.setView(issPosition, 3);
};
// Update the position of the ISS on the map
const ISSPositionMarker = () => {
    const map = useMap();
    map.setView(issPosition, map.getZoom());
    return null;
};
const mapRef = React.useRef();
return (
    <section className={MapStyle.Map}>
        <h2 className={MapStyle.subHeading}>Current ISS Location:</h2>
        <MapContainer className={MapStyle.Map_container} center={[0, 0]} zoom={3} scrollWheelZoom={false} ref={mapRef}>
            
            <TileLayer
                url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoiamt1aiIsImEiOiJjbHA1anNmdWQxbXlnMmpubG4wODE2d3R4In0.lldOduf-_za4kyTkiXZiUQ"
                accessToken={process.env.REACT_APP_TOKEN_KEY}
                id="mapbox/streets-v11"
            />
            <Marker position={issPosition} icon={issVisibility === "daylight" ? ISSMarkerdaylight : ISSMarkereclipsed}>
                <Popup>
                    <h2>ISS</h2>
                    <p>Latitude: {issPosition.lat}</p>
                    <p>Longitude: {issPosition.lng}</p>
                    <p>Visibility: {issVisibility === "daylight" ? "Day" : "Night"}</p>
                </Popup>
            </Marker>
            <ISSPositionMarker />
        </MapContainer>
        <div className={MapStyle.Map_button}>
            <button className={MapStyle.button} onClick={goToISSPosition}>Refocuse on the ISS</button>
        </div>
    </section>
    );
};

export default Map;