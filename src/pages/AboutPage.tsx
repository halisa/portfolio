import Navbar from "../components/Navbar";
import image from "../assets/lisa-pic.jpg"
import Footer from "../components/Footer";

const AboutPage = () => {
    return(
        <div className="about">
            <Navbar />
            <div className="hello-text">
                    <h1>✨ hello, i'm lisa ha ✨</h1>
                    <h2>designer + illustrator</h2>
            </div>
            <div className="about-container">
                <img src={image} alt="" />
                <div className="about-text">
                    <p>as an american-born daughter of vietnamese immigrants, i grew up in shifting households and navigating the liminal spaces of being asian american ⭐ and queer 🌈. the ways i experience the world lead me to create in order to connect to my communities, process, grieve, reflect, and reimagine. i believe in the abundant and transformative nature of art and stories to work towards a more socially and environmentally just world.</p>
                    <h2>currently i am</h2>
                    <p>❤️ studying art/design, computer science, & gender/race studies at pacific lutheran university</p>
                    <p>🎨 working as a freelance graphic designer for local nonprofits</p>
                    <p>✨ preparing to travel back to vietnam since the pandemic started</p>
                    <p>📚 reading fairytales and untold histories</p>
                    <p>🎮 playing stardew valley & toontown cc</p>
                    <p>i am looking for neat projects all year round and product design/ui/ux internships for summer 2024. feel free to contact me for business inquiries at <a href="mailto:lh.halisa@gmail.com">lh.halisa@gmail.com!</a></p>
                </div>
            </div>
            {/* <div className="contact-me">
                <h2>Contact me!</h2>
            </div> */}
            <Footer />
        </div>
    )
}

export default AboutPage;