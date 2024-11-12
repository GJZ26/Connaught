import '../assets/stylesheets/AboutJourney.css'
import trade from '../assets/images/trade.jpg'
import chinito from '../assets/images/chinito.jpg'

export default function AboutJourney() {
    return (
        <div className="about-jn">
            <div className="left">
                <div className="text">
                    <h1>
                        About Our Journey
                    </h1>
                    <p>
                        At Connaught U.S LLC., we’re on a mission to make a positive impact in the world. From empowering small businesses to tackling big social challenges, we’re driven by a passion for creating meaningful change. With a team of dedicated professionals, cutting-edge technology and a commitment to excellence, we’re proud of the work we’ve accomplished so far, and excited for what’s to come.
                    </p>
                </div>
                <div className="badge">
                    <span>Experienced Professionals</span>
                    <span>Cutting Edge-Technology</span>
                    <span>98% Success Rate</span>
                    <span>Free Consultation</span>
                </div>
                <div className="pic-mision-container">
                    <img src={trade} alt="Screen trading" />
                    <div className="mision-vision">
                        <div className="segment">
                            <span>
                                猪
                            </span>
                            <div className="detail">
                                <h2>
                                    Our Vision
                                </h2>
                                <p>
                                    Empowering investors through accessible, reliable, and personalized services.
                                </p>
                            </div>
                        </div>

                        <div className="segment">
                            <span className='dark'>
                                ﯢ
                            </span>
                            <div className="detail">
                                <h2>
                                    Our Mission
                                </h2>
                                <p>
                                    Facilitating successful investments through expert guidance and technology.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="right">
                <img src={chinito} alt="Chinito" />
            </div>
        </div>
    )
}