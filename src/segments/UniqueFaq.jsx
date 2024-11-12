import { Link } from "react-router-dom";
import CustomizedAccordions from "../components/Acordeon";
import "../assets/stylesheets/UniqueFaq.css";

export default function UniqueFaq() {
  return (
    <div className="unique">
      <div className="left">
        <div className="first">
          <h3>Why Connaught U.S LLC.?</h3>
          <span>Diverse Investment Options</span>
          <span>Convenient Online Trading</span>
          <span>Personalized Financial Advice</span>
        </div>

        <hr />

        <div className="second">
          <h3>Support</h3>
          <p>
            At Connaught U.S LLC., we prioritize customer satisfaction. Reach
            out via email, phone for prompt solutions.
          </p>
        </div>

        <div className="third">
          <div className="segment">
            <Link to="mailto:contact@connaughtusllc.com">
              <span>﨓</span>
            </Link>
            <div className="detail">
              <Link to="mailto:contact@connaughtusllc.com">
                <h2>Email Address</h2>
              </Link>
              <p>contact@connaughtusllc.com</p>
            </div>
          </div>
          <div className="segment">
            <Link to="tel:6462123540">
              <span></span>
            </Link>
            <div className="detail">
              <Link to="tel:6462123540">
                <h2>Consultations</h2>
              </Link>
              <p>(646) 212-3540</p>
            </div>
          </div>
        </div>
      </div>

      <div className="right">
        <h2>Popular Questions</h2>
        <CustomizedAccordions />
      </div>
    </div>
  );
}
