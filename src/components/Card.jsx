import '../assets/stylesheets/Card.css'

export default function Card({ title, content }) {
    return (
        <div className="card-info">
            <h3>
                {
                    title
                }
            </h3>
            <span>
                {
                    content
                }
            </span>
        </div>
    )
}