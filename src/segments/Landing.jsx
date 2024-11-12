import man from '../assets/images/man.png'
import card1 from '../assets/images/card1.png'
import card2 from '../assets/images/card2.png'
import logo from '../assets/images/connaught_pattern_04.svg'



import '../assets/stylesheets/Landing.css'
import { Link } from 'react-router-dom'

export default function Landing() {
    return (
        <div className="landing" style={{ backgroundImage: `url('${logo}')` }}>
            <div className="left-side">
                <h1>
                    No Limits to Your Stock Trading Success
                </h1>
                <p>
                    With the help of professional investment guidance, find the road to financial success. For your particular demands, pick from a wide choice of tailored solutions.
                </p>
                <Link onClick={window.scrollTo({top: 0, behavior: 'smooth'})} to="/contact">
                    <button className="main-btn">
                        Get Started
                    </button>
                </Link>
            </div>
            <div className="right-side">
                <div className="man-container">
                    <img src={man} alt="Man holding a Tablet" className='manHolding' />
                    <img src={card1} alt="Tether Currency Card Image" className='card1 abs' />
                    <img src={card2} alt="XRP ETH Comparation Currency" className='card2 abs' />
                </div>
            </div>
        </div>
    )
}