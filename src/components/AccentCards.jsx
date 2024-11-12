import '../assets/stylesheets/AccentCards.css'

export default function AccentCards({
    title="Title",
    icon="Your Icon",
    content="Your content"
}){
    return(
        <div className="accent-card">
            <span>{icon}</span>
            <h5>{title}</h5>
            <p>{content}</p>
        </div>
    )
}