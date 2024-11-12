import '../assets/stylesheets/SkillBar.css'

export default function SkillBar({
    field = "Your Skill",
    odd = false,
    amount = 0
}) {
    return (
        <div className="skill">
            <h4>
                {
                    field
                }
            </h4>
            <div className={`bar ${!odd ? "dark" : ""}`} style={{width:`${amount}%`}}>
                <p>
                    {amount}%
                </p>
            </div>
        </div>
    )
}