import '../assets/stylesheets/Features.css'

export default function Features({
    name,
    content,
    character,
    odd = false
}) {
    return (
        <div className="feature">
            <div className={`char ${!odd ? "light" : "dark"}`} style={{fontFamily:"jkiticon"}}>
                {
                    character
                }
            </div>
            <div className="content">
                <h4>{name}</h4>
                <p>
                    {content}
                </p>
            </div>
        </div>
    )
}