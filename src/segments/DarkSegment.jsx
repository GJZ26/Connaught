import PlusCard from "../components/PlusCard";
import graph from '../assets/images/graph.png'
import '../assets/stylesheets/DarkSegment.css'

export default function DarkSegment() {
    return (
        <div className="uncovering" style={{ backgroundImage: `url('${graph}')` }}>
            <h3>
                Uncovering Investment Strategies
            </h3>
            <p>
                Uncover the most effective investment strategies and gain valuable knowledge from our team of skilled advisors. Boost your financial portfolio with our exceptional educational resources.
            </p>
            <div className="plus-card-container">
                <PlusCard
                    numberToShow={374}
                    description={"Tutorial Videos"}
                />
                <PlusCard
                    numberToShow={4}
                    description={"Year in Business"}
                />
                <PlusCard
                    numberToShow={425}
                    description={"Experts"}
                />
                <PlusCard
                    numberToShow={635}
                    description={"People Joined"}
                />
            </div>
        </div>
    )
}