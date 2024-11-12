import { Link } from 'react-router-dom'
import couple from '../assets/images/couple.png'
import '../assets/stylesheets/Assistance.css'

export default function Assistance() {
    return (
        <div className="assistance">
            <div className="left">
                <h2>
                    We'll assist you in creating a plan
                </h2>
                <p>
                    To assist you in achieving your financial objectives, we provide a wide choice of goods and services, and we can advise you on the best course of action.
                </p>
                <Link onClick={window.scrollTo({top: 0, behavior: 'smooth'})} to={"/contact"} >
                    <button className='big-btn inverted'>
                        Learn more
                    </button>
                </Link>
            </div>
            <div className="right">
                <img src={couple} alt="An couple watching a laptop" />
            </div>
        </div>
    )
}