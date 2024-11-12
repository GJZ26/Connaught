import '../assets/stylesheets/FeaturesLong.css'

export default function FeaturesLong({
    title = "An Title For This.",
    content = "This is an content for this.",
    img_uri = "#",
    reverse = true
}) {
    return (
        <div className={`long-feat ${!reverse ? "reversed" : ""}`}>
            <img src={img_uri} alt={title} />
            <div className="content">
                <h4>
                    {title}
                </h4>
                <p>
                    {content}
                </p>
            </div>
        </div>
    )
}