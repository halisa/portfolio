import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../style/style.css';
import slow from "../assets/home-page-thumbnails/slow-thumbnail.jpg";
import omg from "../assets/home-page-thumbnails/omg-thumbnail.jpg";
import xmas from "../assets/home-page-thumbnails/xmas-thumbnail.jpg";
import tmf from "../assets/home-page-thumbnails/tmf-thumbnail.jpg";
import displaced from "../assets/home-page-thumbnails/displaced-thumbnail.jpg";
import winterfest from "../assets/home-page-thumbnails/winterfest-thumbnail.png";
import bicultural from "../assets/home-page-thumbnails/bicultural-thumbnail.png";
import arrow from "../assets/home-page-thumbnails/arrow-thumbnail.png";
import collage from "../assets/home-page-thumbnails/collage-thumbnail.png";
import apm from "../assets/home-page-thumbnails/apm-thumbnail.png";
import covid from "../assets/home-page-thumbnails/covid-thumbnail.png";
import sax from "../assets/home-page-thumbnails/sax-thumbnail.png";
import plubday from "../assets/home-page-thumbnails/plubday-thumbnail.png";
import { Link } from 'react-router-dom';

const HomePage = () => {
    return(
        <div className='home'>
            <Navbar />
            <div className="hello-text">
                    <h1>✨ hello, i'm lisa ha ✨</h1>
                    <h2>designer + illustrator</h2>
            </div>
            <div className="home-container">
                <div className="img-container">
                    <Link to="/slow" className="link-container">
                        <img src={slow} alt="" className='thumbnail'/>
                        <div className="overlay">
                            <h2>slow</h2>
                        </div>
                    </Link>
                </div>
                <div className="img-container">
                    <Link to="/slow">
                        <img src={omg} alt="" className='thumbnail'/>
                        <div className="overlay">
                            <h2>omg</h2>
                        </div>
                    </Link>
                </div>
                <div className="img-container">
                    <Link to="/slow">
                        <img src={xmas} alt="" className='thumbnail'/>
                        <div className="overlay">
                            <h2>xmas</h2>
                        </div>
                    </Link>
                </div>
                <div className="img-container">
                    <Link to="/slow">
                        <img src={tmf} alt="" className='thumbnail'/>
                        <div className="overlay"><h2>tacoma moon festival</h2></div>
                    </Link>
                </div>
                <div className="img-container">
                    <Link to="/slow">
                        <img src={displaced} alt="" className='thumbnail'/>
                        <div className="overlay"><h2>displaced</h2></div>
                    </Link>
                </div>
                <div className="img-container">
                    <Link to="/slow">
                        <img src={winterfest} alt="" className='thumbnail'/>
                        <div className="overlay"><h2>displaced</h2></div>
                    </Link>
                </div>
                <div className="img-container">
                    <Link to="/slow">
                        <img src={bicultural} alt="" className='thumbnail'/>
                        <div className="overlay"><h2>displaced</h2></div>
                    </Link>
                </div>


                <div className="img-container">
                    <Link to="/slow">
                        <img src={arrow} alt="" className='thumbnail'/>
                        <div className="overlay"><h2>displaced</h2></div>
                    </Link>
                </div>
                <div className="img-container">
                    <Link to="/slow">
                        <img src={collage} alt="" className='thumbnail'/>
                        <div className="overlay"><h2>displaced</h2></div>
                    </Link>
                </div>
                <div className="img-container">
                    <Link to="/slow">
                        <img src={apm} alt="" className='thumbnail'/>
                        <div className="overlay"><h2>displaced</h2></div>
                    </Link>
                </div>



                <div className="img-container">
                    <Link to="/slow">
                        <img src={covid} alt="" className='thumbnail'/>
                        <div className="overlay"><h2>displaced</h2></div>
                    </Link>
                </div>
                <div className="img-container">
                    <Link to="/slow">
                        <img src={sax} alt="" className='thumbnail'/>
                        <div className="overlay"><h2>displaced</h2></div>
                    </Link>
                </div>
                <div className="img-container">
                    <Link to="/slow">
                        <img src={plubday} alt="" className='thumbnail'/>
                        <div className="overlay"><h2>displaced</h2></div>
                    </Link>
                </div>

                
            </div>
            
            <Footer />
        </div>
    )
}

export default HomePage;