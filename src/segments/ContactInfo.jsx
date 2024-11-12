import Data from "../components/Data";
import '../assets/stylesheets/ContactInfo.css'

export default function ContactInfo() {
    return (
        <div className="contact-info">
            <h2>Get In Touch</h2>
            <p>Get in touch with our friendly customer service team. Contact us for inquiries, support and to learn more about our services.</p>
            <div className="data-container">
                <Data
                    title="Location"
                    content="38 East 19th St. 8th Floor 
                    New York, NY 10003"
                    icon=""
                    inverted={false}
                />
                <Data
                    title="Email"
                    content="contact@connaughtusllc.com"
                    icon="輦"
                    inverted={true}
                />
                <Data
                    title="Main line"
                    content="(646) 212-3540"
                    icon=""
                    inverted={false}
                />
            </div>
        </div>
    )
}