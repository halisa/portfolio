import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../style/style.css';

const HomePage = () => {
    return(
        <div className='home'>
            <Navbar />
            <div className="home-container">
                <h2>Welcome! I'm Lisa Ha</h2>
                <h3>designer + developer</h3>
            </div>
            
            <Footer />
        </div>
    )
}

export default HomePage;