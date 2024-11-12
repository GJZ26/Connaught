import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PricesCoinsBar from "../components/PricesCoinsBar";
import DarkSegment from "../segments/DarkSegment";
import DarkSegment2 from "../segments/DarkSegment2";
import FindStock from "../segments/FindStock";
import PostLanding from "../segments/PostLanding";
import ProSkill from "../segments/ProSkill";
import ProfesionalSkills from "../segments/ProfesionalSkills";
import Testimonial from "../segments/Testimonials";
import Landing from "../segments/landing";

export default function Home() {
    return (
        <>
            <PricesCoinsBar />
            <Navbar />
            <Landing />
            <PostLanding />
            <DarkSegment />
            <FindStock />
            <ProfesionalSkills />
            <ProSkill />
            <Testimonial />
            <DarkSegment2/>
            <Footer/>
        </>
    )
}