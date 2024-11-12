import TestimonialCard from "../components/TestimonialCard";
import Ashley from '../assets/images/ashley-carter.jpg'
import Sarah from '../assets/images/sarah-bauer.jpg'
import Michael from '../assets/images/michael-davidson.jpg'
import { Link } from "react-router-dom";
import '../assets/stylesheets/Testimonials.css'

export default function Testimonial() {
    return (
        <div className="testimonial">
            <div className="info">
                <h2>
                    What Our Clients Say About Us
                </h2>
                <p>
                    Discover the positive impact our investment services have had on the lives and portfolios of our valued clients. Read their testimonials and see why we are the trusted choice for financial success.
                </p>
                <Link onClick={window.scrollTo({top: 0, behavior: 'smooth'})} to="/contact">
                    <button className="big-btn inverted">Learn more</button>
                </Link>
            </div>
            <div className="testimonials-container">
                <TestimonialCard
                    name="Ashley Carter"
                    role="Manager"
                    quote="I appreciate the customized approach of this firm and their commitment to my financial success. Strongly recommend."
                    img_route={Ashley}
                />
                <TestimonialCard
                    name="Michael Davidson"
                    role="Programmer"
                    quote="This firm's personalized investment strategy transformed my portfolio and exceeded my expectations. I highly recommend their expert services."
                    img_route={Michael}
                />
                <TestimonialCard
                    name="Sarah Bauer"
                    role="Entrepreneur"
                    quote="The level of professionalism and care at this firm exceeded all expectations. A true partner in my investment journey."
                    img_route={Sarah}
                />
            </div>
        </div>
    )
}