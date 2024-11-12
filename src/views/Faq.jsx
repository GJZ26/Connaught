import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NavigationGuide from "../components/NavigationGuide";
import PricesCoinsBar from "../components/PricesCoinsBar";
import DarkSegment4 from "../segments/DarkSegment4";
import UniqueFaq from "../segments/UniqueFaq";

export default function Faq() {
    return (
        <>
            <PricesCoinsBar />
            <Navbar />
            <NavigationGuide current="FAQ" />
            <UniqueFaq />
            <DarkSegment4 />
            <Footer />
        </>
    )
}