import React, { useEffect } from 'react';
import './History.css'; 
import Slider from './Historry';
import sputnik from './sputnik.jpg'; 
import laika from './laika.jpg'; 
import explorer1 from './explorer1.jpg'; 
import vanguard1 from './vanguard1.jpg'; 
import vostok from './vostokk.jpg'; 
import alan from './alan.jpg'; 
import zond5 from './zond5.jpg'; 
import apollo from './appollo.jpg'; 
import venus from './venus.jpg'; 
import hubble from './Hubble.jpg'; 
import iss from './ISS.jpg'; 
import Navbar from '../Navbar/Navbar';
const History = () => {
    useEffect(() => {
        // Call the function from the imported script
        Slider();
      }, []);


  return (
    <div>
        <body className='ithias'>
        <Navbar />
      <br />
    <br />
    <br />
    {/* slider */}
    <div className="slider">
        {/* list items */}
        <div className="list">
            <div className="item active">
                <img src={sputnik} alt=""/>
                <div className="content">
                    <p>Year: 1957 , OCT 24</p>
                    <h3><u>SPUTNIK</u></h3>
                    <br />
                    <p>History changed on October 4, 1957, when the Soviet Union successfully launched Sputnik I.<br /><br /> The world's first artificial satellite was about the size of a beach ball (58 cm.or 22.8 inches in diameter), weighed only 83.6 kg. or 183.9 pounds, and took about 98 minutes to orbit Earth on its elliptical path. That launch ushered in new political, military, technological, and scientific developments. While the Sputnik launch was a single event, it marked the start of the space age and the U.S.-U.S.S.R space race.<br />
                    </p>
                    <a href="https://en.wikipedia.org/wiki/Sputnik_1 " className="read-more" >Read more </a>
                </div>
            </div>
            <div className="item ">
                <img src={laika} alt="Laika" />
                <div className="content">
                    <p>Year: 1957 , Nov 3</p>
                    <h3><u>LAIKA</u></h3><br />
                    <p>Laika, a dog that was the first living creature to be launched into Earth orbit, on board the Soviet artificial satellite Sputnik 2, on November 3, 1957. <br /><br /> It was always understood that Laika would not survive the mission, but her actual fate was misrepresented for decades.<br /><br /><br /><br /></p>
                    <br />
                    <a href="https://en.wikipedia.org/wiki/Laika" className="read-more">Read more</a>
                </div>
            </div>
            <div className="item ">
                <img src={explorer1} alt="Explorer 1" />
                <div className="content">
                    <p>Year: 1958 , Jan 31</p>
                    <h3><u>EXPLORER1</u></h3>
                    <p><u>Explorer 1</u> was the first artificial satellite of American origin that was put into orbit from the Cape Canaveral Air Force Station, in Florida,
                        and corresponds to the first launch of the Explorer program, which later put more than 90 satellites into orbit .
                        <br />
                        <br />                    
                        His most outstanding achievement was the detection, for the first time, of the <b>Van Allen radiation belts</b>, and his return to Earth occurred on March 31, 1970, after having spent more than a decade in space.</p>
                    <a href="https://en.wikipedia.org/wiki/Explorer_1 " className="read-more">Read more </a>
                </div>
            </div>
            <div className="item ">
                <img src={vanguard1} alt="Vanguard1" />
                <div className="content">
                    <p>Year: 1958 , March 17</p>
                    <h3><u>VANGUARD1</u></h3>
                    <p>As America’s second satellite, it was launched into space on March 17, 1958. And though it only blasted off some six months after the Soviet’s Sputnik satellite, Vanuguard 1 still remains in orbit — more than 60 years later.
                        <br /><br /><br />
                        This makes Vanguard Earth’s longest-orbiting artificial satellite, as well as the oldest human-made object still in space. And that’s not likely to change any time soon. Although Vanguard stopped communicating with Earth in 1964, it will remain in orbit for centuries to come.
                    </p>
                    <a href="https://en.wikipedia.org/wiki/Vanguard_1" className="read-more" >Read more</a>
                </div>
            </div>
            <div className="item ">
                <img src={vostok} alt="" />
                <div className="content">
                    <p>Year: 1961 , April 12</p>
                    <h3><u>VOSTOK</u></h3>
                    <p>The USSR sent Yuri Gagarin into space from Baikonur Cosmodrome, Kazakhstan, in a Vostok spacecraft. He made a single orbit of Earth in 108 minutes, travelling at more than 17,000 miles per hour. The achievement was reported at the time as a blow to the Americans who had reportedly hoped to be the first to launch a man beyond Earth's atmosphere. <br /><br />The US launched American citizen Alan Shepard into space less than a month later on 5 May 1961.
                    </p>     
                    <a href="https://en.wikipedia.org/wiki/Yuri_Gagarin"  class="read-more">Read more</a>
                    
                </div>
            </div>
            <div className="item ">
                <img src={alan} alt="" />
                <div className="content">
                    <p>Year: 1961 , May 5</p>
                    <h3><u>Astronaut <br />Alan Shepard</u></h3>
                    <p>On May 5, 1961, Alan B. Shepard became the first American in space during a suborbital flight aboard his Mercury capsule named Freedom 7. Three weeks later, based on the success of Shepard’s brief flight, President John F. <br /><br />Kennedy committed the United States to achieving a lunar landing before the end of the decade.
                    </p>     
                    <a href="https://www.nasa.gov/image-article/60-years-ago-alan-shepard-becomes-first-american-space/" class="read-more">Read more</a>
                </div>
            </div>
            <div className="item ">
                <img src={zond5} alt="" />
                <div className="content">
                    <p>Year: 1968 , SEP 15</p>
                    <h3><u>ZOND-5   </u></h3>
                    <p>OZond 5 was a spacecraft of the Soviet Zond program. In September 1968 it became the first spaceship to travel to and circle the Moon in a circumlunar trajectory, the first Moon mission to include animals, and the first to return safely to Earth. Zond 5 carried the first terrestrial organisms to the vicinity of the Moon, including two tortoises, fruit fly eggs, and plants.<br /><br /> The Russian tortoises underwent biological changes during the flight, but it was concluded that the changes were primarily due to starvation and that they were little affected by space travel.
                    </p>     
                    <a href="https://en.wikipedia.org/wiki/Zond_5" class="read-more">Read more</a>
                </div>
            </div>
            <div className="item ">
                <img src={apollo} alt="" />
                <div className="content">
                    <p>Year: 1969 , JULY 20</p>
                    <h3><u>APPOLLO-11   </u></h3>
                    <p>Apollo 11 was the American spaceflight that first landed humans on the Moon. Commander Neil Armstrong and Lunar Module Pilot Buzz Aldrin landed the Apollo Lunar Module Eagle on July 20, 1969, at 20:17 UTC, and Armstrong became the first person to step onto the Moon's surface six hours and 39 minutes later, on July 21 at 02:56 UTC. <br /><br /> Aldrin joined him 19 minutes later, and they spent about two and a quarter hours together exploring the site they had named Tranquility Base upon landing<br />.
                    </p>     
                    <a href="https://edition.cnn.com/2020/07/20/us/neil-armstrong-edwin-buzz-aldrin-moon-scn-trnd/index.html" class="read-more">Read more</a>
                </div>
            </div>
            <div className="item ">
                <img src={venus} alt="" />
                <div className="content">
                    <p>Year: 1970 , DECEMBER 15</p>
                    <h3><u>VENERA-7   </u></h3>
                    <p>Venera 7, 1st to Send Data from Venus Surface, Launched 45 Years Ago.Venera 7 was one in a series of Soviet missions to Venus to explore the surface of the hot, hellish and cloud-covered world. The spacecraft consisted of a spherical landing probe and a spacecraft bus to carry the lander to Venus.<br /> "The objectives of the missions were to return data from the Venus atmosphere, make a landing on the surface, and continue to return data after landing," according to a NASA mission file. "Venera 7 was the first spacecraft to return data after landing on another planet."
                    </p>     
                    <a href="https://en.wikipedia.org/wiki/Venera_7" class="read-more">Read more</a>
                </div>
            </div>
            <div className="item ">
                <img src={hubble} alt="" />
                <div className="content">
                    <p>Year: 1990 , April 24 </p>
                    <h3><u>HUBBLE   </u></h3>
                    <p>The Hubble Space Telescope has been orbiting Earth for more than 30 years, having launched into space on April 24, 1990.
                            <br />Over those three decades and counting, more than 1.5 million observations have led to the publication of over 18,000 scientific papers on subjects ranging from dark energy to black holes and gamma-ray bursts.
                                <br />The orbital telescope has changed our perception of the cosmos and it continues to act as a reference for many of the observations performed by the James Webb Space Telescope today.
                    </p>     
                    <a href="https://en.wikipedia.org/wiki/Hubble_Space_Telescope" class="read-more">Read more</a>
                </div>
            </div>
            <div className="item ">
                <img src={iss} alt="" />
                <div className="content">
                    <p>Year: 2000 , NOVEMBER </p>
                    <h3><u>ISS   </u></h3>
                    <p>The International Space Station ushered in an unprecedented era of global collaboration when it started operations in November 2000.
<br /><br />
                            Since then, the orbital laboratory has been home to many international crews of astronauts and cosmonauts who have conducted experiments ranging from cancer treatment research and microgravity experiments to superconducting magnet thrusters
                    </p>     
                    <a href="https://www.nasa.gov/international-space-station/" class="read-more">Read more</a>
                </div>
            </div>

        </div>
        {/* buttons */}
        <div className="arrows">
            <button id="prev">{'<'}</button>
            <button id="next">{'>'}</button>
        </div>
        {/* thumbnail */}
        <div className="thumbnail">
            <div className="item1 active">
                <img src={sputnik} alt="Sputnik" />
                <div className="context">Oct24,1957</div>
            </div>
            <div className="item1 ">
                <img src={laika} alt="Laika" />
                <div className="context">Nov3,1957</div>
            </div>
            <div className="item1 ">
                <img src={explorer1} alt="Explorer1" />
                <div className="context">Jan31,1958</div>
            </div>
            <div className="item1 ">
                <img src={vanguard1} alt="Vanguard1" />
                <div className="context">Mar17,1958</div>
            </div>
            <div className="item1 ">
                <img src={vostok} alt="Vostok" />
                <div className="context">Apr12,1961</div>
            </div>
            <div className="item1 ">
                <img src={alan} alt="Alan Shepard" />
                <div className="context">May5,1961</div>
            </div>
            <div className="item1 ">
                <img src={zond5} alt="ZOND-5" />
                <div className="context">Sep15,1968</div>
            </div>
            <div className="item1 ">
                <img src={apollo} alt="Apollo-11" />
                <div className="context">Jul20,1969</div>
            </div>
            <div className="item1 ">
                <img src={venus} alt="Venera-7" />
                <div className="context">Dec15,1970</div>
            </div>
            <div className="item1 ">
                <img src={hubble} alt="Hubble" />
                <div className="context">April 24, 1990</div>
            </div>
            <div className="item1 ">
                <img src={iss} alt="ISS" />
                <div className="context">Nov 2000.</div>
            </div>
        </div>
    </div>
      
    
      </body>
    </div>
    
  );
}

export default History;
