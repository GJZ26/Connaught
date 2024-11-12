import Card from "../components/Card";
import '../assets/stylesheets/PostLanding.css'

export default function PostLanding() {
    return (
        <div className="post-land">
            <h1>
                A One-Stop Shop For Your Financial Goals
            </h1>
            <p>
                Establish yourself as a leader in the investment sector by offering proficient direction, state-of-the-art technology, and tailored solutions, positioning yourself as the preferred option for all investment requirements.
            </p>
            <Card
            title="Our Vision"
            content="Enabling investors with personalized and easily accessible services that empower them to take control of their investments." />
            <Card
            title="Our Mission"
            content="Aiding in the achievement of successful investments by providing expert guidance and cutting-edge technology."
            />
        </div>
    )
}