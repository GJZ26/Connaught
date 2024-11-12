export default function Data({
    title = "Titulo",
    icon = "Icon",
    content = "Content",
    inverted = false
}) {
    return (
        <div className={`data ${inverted ? "dark" : ""}`}>
            <span>
                {icon}
            </span>
            <div className="content">
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        </div>
    )
}