import '../assets/stylesheets/SimpleText.css'

export default function SimpleText({
    title = "Soy un titulo",
    content = "Soy el contenido del texto"
}) {
    return (
        <div className="simple-text">
            <h3>
                {
                    title
                }
            </h3>
            <p>
                {
                    content
                }
            </p>
        </div>
    )
}