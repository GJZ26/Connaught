import AccentCards from "../components/AccentCards";
import '../assets/stylesheets/GuidanceResources.css'

export default function GuidanceResources() {
    return (
        <div className="guidance-resources">
            <h2>Guidance, Resources and Expert Advice</h2>
            <div className="cards-container">
                <AccentCards
                    title="Retirement"
                    content="Two common retirement plans are 401(k) through employer and IRA through bank/broker/institution."
                    icon="墳"
                />
                <AccentCards
                    title="Education"
                    content="Saving for college can seem overwhelming, but taking the first step is key. Don't delay, start today!"
                    icon="擄"
                />
                <AccentCards
                    title="Wealth Generation"
                    content="Efficient financial management starts with information. Align with your wealth goals."
                    icon="烈"
                />
            </div>
        </div>
    )
}