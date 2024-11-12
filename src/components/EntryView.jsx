import { Link } from 'react-router-dom'
import '../assets/stylesheets/EntryView.css'

export default function EntryView({
    title = "Entry Title",
    content = "Entry Content",
    button_text = "Learn More",
    hashtags = ["Topic", "Topicsss"]
}){
    return(
        <div className="entry-view">
            <span className="hashtags">
                {
                hashtags.map((tag)=>{
                    return `#${tag} `
                })
                }
            </span>
            <h4>
                {title}
            </h4>
            <p>
                {content}
            </p>
            <Link to="https://www.youtube.com/watch?v=dV00JxVDBdk" target='__blank'>
                {button_text}
            </Link>
        </div>
    )
}