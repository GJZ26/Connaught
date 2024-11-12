import { Link } from "react-router-dom";
import SkillCard from "../components/SkillCard";
import '../assets/stylesheets/ProSkill.css'

export default function ProSkill() {
    return (
        <div className="pro-skill-2">
            <h2>
                Our Professional Skills
            </h2>
            <p>
                New to online investing? <Link onClick={window.scrollTo({top: 0, behavior: 'smooth'})} to="/contact" className="calltoaction">Start here →</Link>
            </p>
            <div className="skills-card-container">
                <SkillCard
                    title="Trading"
                    description="Take on the financial markets with a set of tools and resources designed for individuals who enjoy trading."
                    features={[
                        "65¢ options contracts and $1.50 futures contracts",
                        "Robust tools and dynamic charts",
                        "Specialized trading support"
                    ]}
                />
                <SkillCard
                    title="Long-term investing"
                    description="Take aim at your future goals with an online experience."
                    features={[
                        "Easy-to-use website and mobile app",
                        "Broad range of account types",
                        "Insightful education and guidance"
                    ]}
                />
                <SkillCard
                    title="Savings and checking"
                    description="Receive affordable banking services with minimal fees through Morgan Stanley Private Bank."
                    features={[
                        "FDIC insured",
                        "No cost money transfers.",
                        "Competitive rates"
                    ]}
                />
            </div>
        </div>
    )
}