import '../assets/stylesheets/VideoGallery.css'

export default function VideoGallery() {
    return (
        <div className="video-gallery">
            <div className="video-list">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/6fG_TP269W8?si=jdad1Gp-RIq7TuPR" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/UfuMYG-HUms?si=PFPdc3hkCA3hJAY8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/P_5iF11vt0s?si=6sGpy_1C_nXWCc8X" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/7sRjNH-UJ2g?si=gH8QXQmLlGa12bct" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/tmUlL2SXE1U?si=Tm3vYC6vlFEZChV8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/87AthEp4sRE?si=IgjIJU3x0zMXvpWx" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div className="main-video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/dV00JxVDBdk?si=l54HuozVuIS-CW4R" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
        </div>
    )
}