import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../style/style.css';
import slow from "../assets/slow-thumbnail.jpg";
import omg from "../assets/omg-thumbnail.jpg";
import xmas from "../assets/xmas-thumbnail.jpg";
import tmf from "../assets/tmf-thumbnail.jpg";
import displaced from "../assets/displaced-thumbnail.jpg";
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

                
            </div>
            
            <Footer />
        </div>
    )
}

export default HomePage;