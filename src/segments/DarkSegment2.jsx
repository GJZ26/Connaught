import { Link } from "react-router-dom";
import '../assets/stylesheets/DarkSegment2.css'

export default function DarkSegment2() {
    return (
        <div className="embark">
            <h2>
                Embark on your virtual asset adventure and unlock new possibilities with ease.
            </h2>
            <p>
                Embark on a journey towards financial success with virtual assets. With the power of digital assets at your fingertips, you can invest with confidence and unlock growth opportunities for a brighter future.
            </p>
            <Link onClick={window.scrollTo({top: 0, behavior: 'smooth'})}
                to="/contact"
            >
                <button className="big-btn inverted">
                    Invest now!
                </button>
            </Link >
        </div>
    )
}