import '../assets/stylesheets/NavigationGuide.css'

export default function NavigationGuide({current="Here"}){
    return(
    <div className="nav-gui">
        <div className="path">
            <h2>{current}</h2>
            <p>Home <span>{""}</span> {current}</p>
        </div>
    </div>
    )
}