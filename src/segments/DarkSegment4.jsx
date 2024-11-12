import { Link } from "react-router-dom";
import '../assets/stylesheets/DarkSegment4.css'

export default function DarkSegment4(){
    return(
        <div className="dark-segment-4">
            <h2>Exemplary Security and Risk Management System</h2>
            <p>Our Exemplary Security and Risk Management System employs the latest technology and industry best practices to protect your investments. Experience a secure platform, invest now.</p>
            <Link onClick={window.scrollTo({top: 0, behavior: 'smooth'})} to="/contact">
                <button className="big-btn inverted">Invest now!</button>
            </Link>
        </div>
    )
}