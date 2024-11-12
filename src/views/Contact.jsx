import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NavigationGuide from "../components/NavigationGuide";
import PricesCoinsBar from "../components/PricesCoinsBar";
import ContactInfo from "../segments/ContactInfo";

export default function Contact() {
    return (
        <>
            <PricesCoinsBar />
            <Navbar />
            <NavigationGuide current="Contact" />
            <ContactInfo />
            <div className="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.0924710003324!2d-73.99186472445572!3d40.73799073602479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a225db6deb%3A0x5610c0db15e07670!2s38%20E%2019th%20St%208th%20Floor%2C%20New%20York%2C%20NY%2010003%2C%20USA!5e0!3m2!1sen!2smx!4v1716584441373!5m2!1sen!2smx" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <Footer />
        </>
    )
}