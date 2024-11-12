import { Link } from "react-router-dom";
import logo from "../assets/images/logo-black.png";
import logoAlpha from "../assets/images/connaught_pattern_04.svg";
import "../assets/stylesheets/Footer.css";

export default function Footer() {
  return (
    <footer style={{ backgroundImage: `url('${logoAlpha}')` }}>
      <div className="up-section">
        <section>
          <h4>About company</h4>
          <p>
            <span></span> 38 East 19th St. 8th Floor New York, NY 10003
          </p>
          <p>
            <span></span> (646) 212-3540
          </p>
          <p>
            <span></span> contact@connaughtusllc.com
          </p>
          {/* <p><span></span> :)</p> */}
        </section>

        <section>
          <h4>Quick links</h4>
          <Link
            onClick={window.scrollTo({ top: 0, behavior: "smooth" })}
            to="/about"
          >
            About
          </Link>
          <Link
            onClick={window.scrollTo({ top: 0, behavior: "smooth" })}
            to="/about"
          >
            Services
          </Link>
          <Link
            onClick={window.scrollTo({ top: 0, behavior: "smooth" })}
            to="/contact"
          >
            Contact
          </Link>
        </section>

        <section>
          <h4>Support</h4>
          <Link
            onClick={window.scrollTo({ top: 0, behavior: "smooth" })}
            to="/privacy"
          >
            Privacy Policy
          </Link>
          <Link
            onClick={window.scrollTo({ top: 0, behavior: "smooth" })}
            to="/conditions"
          >
            Terms & Conditions
          </Link>
          <Link
            onClick={window.scrollTo({ top: 0, behavior: "smooth" })}
            to="/faq"
          >
            FAQ
          </Link>
        </section>

        <section>
          <h4>Follow us:</h4>
          <div className="links-container">
            <div className="bubble-btn"></div>
            <div className="bubble-btn"></div>
            <div className="bubble-btn"></div>
          </div>
        </section>
      </div>

      <div className="down-section">
        <section>
          <img src={logo} alt="Capital LLC Logo" className="logo" />
        </section>

        <section>Connaught U.S LLC © 2020 All rights reserved</section>
      </div>
    </footer>
  );
}
