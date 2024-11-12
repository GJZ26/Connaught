import EntryView from "../components/EntryView";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NavigationGuide from "../components/NavigationGuide";
import PricesCoinsBar from "../components/PricesCoinsBar";
import AboutJourney from "../segments/AboutJourney";
import AppSegment from "../segments/AppSegment";
import DarkSegment3 from "../segments/DarkSegment3";
import VideoGallery from "../segments/VideoGallery";

export default function About() {
    return (
        <>
            <PricesCoinsBar />
            <Navbar />
            <NavigationGuide
                current="About"
            />
            <AboutJourney />
            <DarkSegment3 />
            <VideoGallery />
            <EntryView
                title="How To Start Trading Stocks As A Complete Beginner"
                content="Learn the basics of stock trading with our beginner-friendly guide. Discover how to start investing, choose the best stocks, and build a solid trading strategy. Start your financial journey with confidence."
                hashtags={["Trading", "Investment", "Beginner"]}
            />
            <AppSegment/>
            <Footer />
        </>
    )
}