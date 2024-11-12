import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import About from "./views/About";
import Guidance from "./views/Guidance";
import Faq from "./views/Faq";
import Contact from "./views/Contact";
import Privacy from "./views/Privacy";
import Conditions from "./views/Conditions";

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/guidance" element={<Guidance />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/conditions" element={<Conditions />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}