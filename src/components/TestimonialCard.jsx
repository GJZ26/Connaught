import '../assets/stylesheets/TestimonialCard.css'

export default function TestimonialCard({
    quote,
    name,
    role,
    img_route
}){
    return(
        <div className="testimonial-card">
            <div className="content">
                {
                    quote
                }
            </div>
            <div className="author-info">
                <img src={img_route} alt={name} />

                <div className="info">
                    <span className="name">
                        {name}
                    </span>
                    <span className="role">
                        {role}
                    </span>
                </div>
            </div>
        </div>
    )
}