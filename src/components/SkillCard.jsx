import { Link } from "react-router-dom"
import '../assets/stylesheets/SkillCard.css'

export default function SkillCard({
    title = "My Skill",
    description = "My Skill description",
    features = ["Hello", "World", "From", "SkillCard"],
    button_name = "Learn More →",
    link_to = "/contact"
}) {
    return (
        <div className="skill-card">
            <h4>
                {title}
            </h4>
            <p>
                {description}
            </p>
            <ul>
                {
                    features.map((feat, index) => {
                        return (
                            <li key={index}>
                                {feat}
                            </li>
                        )
                    })
                }
            </ul>
            <Link onClick={window.scrollTo({top: 0, behavior: 'smooth'})} to={link_to}>
                {
                    button_name
                }
            </Link>
        </div>
    )
}