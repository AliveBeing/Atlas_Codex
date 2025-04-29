import Map from '../Map/Map';
import IssData from '../IssData/IssData';
import Header from '../Header/Header';
import './Tracking.css'
import Navbar from '../../../Navbar/Navbar';
function Tracking() {
    return (
        
        <section className="Tracking">
            <div className="TrackingBody"></div>
            <Navbar />
            <Header />
            <Map />
            <IssData />
        </section>
    );
}

export default Tracking;