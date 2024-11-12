import { Link } from "react-router-dom";
import '../assets/stylesheets/AppSegment.css'
import phone from '../assets/images/phone.png'
import appstore from '../assets/images/appstore.png'
import playstore from '../assets/images/googleplay.png'

export default function AppSegment() {
    return (
        <div className="app-segment">
            <div className="image">
                <img src={phone} alt="App Preview" />
            </div>
            <div className="info">
                <h2>Connaught U.S LLC. App Coming Soon...</h2>
                <p>Revolutionize your stock trading with the app, coming soon. Advanced features, user-friendly interface. Be among the first to experience the power and simplicity of the our app.</p>
                <div className="appsButtons">
                    <Link to="#">
                        <img src={playstore} alt="Google Play Button" />
                    </Link>
                    <Link to="#">
                        <img src={appstore} alt="App Store Buttons" />
                    </Link>
                </div>
            </div>
        </div>
    )
}