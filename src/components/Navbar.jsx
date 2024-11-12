import { NavLink } from "react-router-dom";
import '../assets/stylesheets/Navbar.css'
import logo from '../assets/images/logo-light.png'

export default function Navbar() {
    return (
        <nav>
            <img src={logo} height="50" alt="Capital LLC Logo"/>
            <div className="buttons">
                <NavLink onClick={window.scrollTo({top: 0, behavior: 'smooth'})} to="/">Home</NavLink>
                <NavLink onClick={window.scrollTo({top: 0, behavior: 'smooth'})} to="/about">About</NavLink>
                <NavLink onClick={window.scrollTo({top: 0, behavior: 'smooth'})} to="/guidance">Guidance</NavLink>
                <NavLink onClick={window.scrollTo({top: 0, behavior: 'smooth'})} to="/faq">FAQ</NavLink>
                <NavLink onClick={window.scrollTo({top: 0, behavior: 'smooth'})} to="/contact">Contact</NavLink>
            </div>
        </nav>
    )
}