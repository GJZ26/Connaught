import FeaturesLong from "../components/FeaturesLong";
import '../assets/stylesheets/Manage.css'
import lap1 from '../assets/images/lap1.jpg'
import lap2 from '../assets/images/lap2.png'

export default function Manage() {
    return (
        <div className="manage">
            <h2>Manage and track your progress</h2>
            <p>It’s no secret that life changes are going to impact your financial goals. That’s why we’ve made it as easy as possible to set your goals and stay on track.</p>
            <div className="long-feat-container">
                <FeaturesLong
                    title="Take action"
                    content="We’ll show you the most effective steps to take to help you keep your portfolio on track, from schedule adjustments to contribution changes."
                    img_uri={lap1}
                    reverse={true}
                />
                <FeaturesLong
                    title="Adapt your strategy"
                    content="Your life is continuously evolving, so we created a goal-setting service that adapts to you and keeps you on track."
                    img_uri={lap2}
                    reverse={false}
                />
            </div>
        </div>
    )
}
