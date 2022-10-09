import Navbar from "../components/Navbar";
import image from "../assets/lisa.jpg"
import Footer from "../components/Footer";

const AboutPage = () => {
    return(
        <div className="about">
            <Navbar />
            <div className="about-container">
                <img src={image} alt="" />
                <div className="about-text">
                    <h2>hi there! i'm lisa ha (she/her)</h2>
                    <p>as an american-born daughter of vietnamese immigrants, i grew up in shifting households and navigating the liminal spaces of being asian american and queer🌈. the ways i experience the world lead me to create in order to connect to my communities, process, grieve, reflect, and reimagine. i believe in the abundant and transformative nature of art and stories to work towards a more socially and environmentally just world.</p>
                    <h3>currently i am</h3>
                    <p>💻 double majoring in computer science and transformative art and design at pacific lutheran university (class of 2024)</p>
                    <p>🎨 working as a part-time design intern at plu and freelance graphic designer for local nonprofits in my community</p>
                    <p>💚 interning as a full-stack software developer at OfferUp</p>
                    <p>🎮 developing two videogames this summer with my peers</p>
                    <p>✨ illustrating stickers, painting clouds and crocheting blankets for fun</p>
                    <p>📚 reading </p>
                    <p>i am looking for neat projects all year round and product design/ui/ux internships for summer 2023. feel free to contact me for business inquiries at lh.halisa@gmail.com!</p>
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