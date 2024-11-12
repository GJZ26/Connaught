import SkillBar from "../components/SkillBar";
import man from '../assets/images/man2.png'
import card1 from '../assets/images/card3.png'
import card2 from '../assets/images/card4.png'
import '../assets/stylesheets/ProfesionalSkills.css'
import { Link } from "react-router-dom";

export default function ProfesionalSkills() {
    return (
        <div className="pro-skill">

            <div className="left">
                <h3>
                    Our Professional Skills
                </h3>
                <p>
                    Unlock the potential of successful investing with our professional team’s expertise and diverse skills. Benefit from a personalized approach to wealth management.
                </p>

                <div className="skills-container">
                    <SkillBar
                        field="Expert Advisors"
                        amount={83}
                        odd={true}
                    />

                    <SkillBar
                        field="Trading Instrument"
                        amount={71}
                        odd={false}
                    />

                    <SkillBar
                        field="Technical Analysis"
                        amount={89}
                        odd={true}
                    />
                </div>
                <Link onClick={window.scrollTo({top: 0, behavior: 'smooth'})}  to="/about">
                <button className="big-btn inverted">
                    Read more
                </button>
                </Link>
            </div>


            <div className="right">
                <div className="man2-container">
                    <img src={man} alt="Man smiling holding his phone" className="manhold" />
                    <img src={card1} alt="Weekly Summary" className="abs card3" />
                    <img src={card2} alt="Take profit" className="abs card4" />
                </div>
            </div>

        </div>
    )
}