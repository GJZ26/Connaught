import { Link } from "react-router-dom";
import CustomizedAccordions from "../components/Acordeon";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NavigationGuide from "../components/NavigationGuide";
import PricesCoinsBar from "../components/PricesCoinsBar";
import YellowAlert from "../components/YellowAlert";
import Assistance from "../segments/Assitance";
import Manage from "../segments/Manage";
import GuidanceResources from "../segments/GuidanceResources";
import SimpleText from "../components/SimpleText";

export default function Guidance() {
    return (
        <>
            <PricesCoinsBar />
            <Navbar />
            <NavigationGuide
                current="Guidance"
            />
            <Assistance />
            <Manage />
            <YellowAlert
                title="Important Information"
                content={
                    <>
                        Connaught U.S LLC. is not currently accepting new clients into any managed portfolios. If you are interested in a managed portfolio, please email us at <Link to="mailto:contact@connaughtusllc.com">contact@connaughtusllc.com</Link>.
                    </>
                }
            />
            <GuidanceResources />
            <SimpleText
                title="Let's plan for tomorrow"
                content={
                    <>
                        We want to spend the time learning what is important to you and why. <br />
                        Let’s chat so we can assist you in making tomorrow’s plans.<br />
                        Visit our New York branch or call <Link to="tel:6462123540">(646) 212-3540</Link>
                    </>
                }
            />
            <Footer />
        </>
    )
}