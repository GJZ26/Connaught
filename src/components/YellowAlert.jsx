import '../assets/stylesheets/YellowAlert.css'

export default function YellowAlert({
    title = "Hola mundo hermoso",
    content = "Este es un texto por defecto"
}) {
    return (
        <div className="yellow-alert">
            <h2>
                {title}
            </h2>
            <p>
                {content}
            </p>
        </div>
    )
}