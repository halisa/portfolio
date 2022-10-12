import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../style/style.css';
import slow from "../assets/slow-thumbnail.png"

const SlowPage = () => {
    return(
        <div className='work'>
            <Navbar />
            <div className="work-container">
                <h2>Slow Book</h2>
                <h3>Sep 2021 - Dec 2021</h3>
                <div className="tags">
                    <ul>
                        <li>book design</li>
                        <li>illustration</li>
                        <li>research</li>
                    </ul>
                </div>
                <img src="" alt="" />
                <p>So far at my time at PLU, as well as growing up with the American education system, I’ve realized that education is through a mainly white male and colonial gaze, where the winners get to tell history. I’m tired of people and groups who do not fit into that identity and worldview being degraded to “alternative” perspectives or becoming an afterthought in the footnotes. This independent study will be both educational and academically enriching to my areas of study of Computer Science and Gender, Sexuality and Race Studies as it bridges the two and adds more layers of history and context. </p>

                <p>My personal goal with creating an independent study course on Decolonizing Design is to see more of myself and of friends and family in the strength, brilliance, and resilience of designers that don’t get as heard or represented. As a queer woman of color, this would be very empowering as well as healing to have agency in who’s stories I get to learn, and continue on learning how to unlearn problematic ideas and ways of viewing/thinking.</p>

                <p>I made a book reflecting on my learning as I read various texts (both books and multimedia resources) that connect to decolonizing design. The book is a collection of my art, what I learned in the class, and my opinions on it. I connect decolonizing design to exploring my identity as Asian American and where home is for me even though I am being in liminal spaces and places. I made this book for me and for me to look back on later in the future.</p>

                <p>This book is a starting point of learning about decolonizing design and I wish to continue this research and learning and build upon what I discovered and made in this class. It gave me a place to put into words and pictures thoughts and feelings I had about what I was learning in the class and in relation to what I was learning in my other classes as well.</p>

                <p>I learned so much this semester, from reading the cyborg manifesto to abolition of work, I have started to question the whole world around me (not to say nothing matters but it really does feel like every is socially contructed which is really disorienting to think about). Mainly, I have questioned what I thought I knew and have worked towards learning, relearning and most importantly unlearning.</p>

                <p>I put together the book in Adobe InDesign but each of the pieces that go into it were made in different ways. There were a few collaged spreads that I had started with samer during one class period where we went to the design lab and started physical collages. Some pieces were works I had made before the class started that didn’t really have a place but fit well in this collection of different art styles and responses. Other pieces were digital art I made in response to feelings I had about certain ideas and concepts. Each one had a different way of getting into the book. As for the words I wrote, most of them were things I wrote about in the physical journal that I used in this class to take notes and reflect. I am really glad to have created the book and start learning about these topics.</p>

                <p>I believe the independent study was successful because I started my learning journey of decolonizing design and I think this was a good starting point to learning more in the future whether on my own or through other classes/activities. I came out with a book at the end that shows my learning process and I am proud of that.</p>

                <button>Read Slow</button>
                {/* https://issuu.com/ha_lisa/docs/slow  */}
            </div>
            
            <Footer />
        </div>
    )
}

export default SlowPage;