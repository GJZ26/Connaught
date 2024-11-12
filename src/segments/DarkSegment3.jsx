import graph from '../assets/images/graph.png'
import PlusCard from "../components/PlusCard";
import '../assets/stylesheets/DarkSegment3.css'
import mans from '../assets/images/mans.jpg'
import { Link } from 'react-router-dom';

export default function DarkSegment3() {
    return (
        <div className="uncovering dark-segment-3" style={{ backgroundImage: `url('${graph}')` }}>
            <h3>
                Our Commitment to Learning: Unlocking Our Full Potential
            </h3>
            <p>
                We’re committed to learning and growth, both for ourselves and for our clients. We believe that by continuously learning, we can better serve our clients, adapt to changing needs and stay ahead of the curve in our industry.
            </p>
            <div className="plus-card-container">
                <PlusCard
                    numberToShow={4}
                    description={"Years Of Experience"}
                />
                <PlusCard
                    numberToShow={374}
                    description={"Tutorial Videos"}
                />
                <PlusCard
                    numberToShow={635}
                    description={"Clients"}
                />
                <PlusCard
                    numberToShow={425}
                    description={"Expert Advisors"}
                />
            </div>
            <div className="video-container" style={{ backgroundImage: `url('${mans}')` }}>
                <div>
                    <div className="info">
                        <strong>
                            Ultimate Stock Trading
                        </strong>
                        <p>
                            The Secrets Of Stock Trading
                        </p>
                    </div>
                    <Link to="https://youtu.be/p7HKvqRI_Bo?si=eSbjxV8HeflXrT_A" target='__blank'>
                        <span>
                            呂
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}