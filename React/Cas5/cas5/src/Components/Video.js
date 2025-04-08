import { useParams } from "react-router-dom"
import VIDEOS from "../videos.json"

const Video = () => {
    const { id } = useParams()
    const video = VIDEOS.find(v => v.id === Number(id))

    if (!video) {
        return (
            <div className="container mt-4">
                <h2 className="bg-danger text-white p-2">Error</h2>
                <p>This video does not exist in the source.</p>
            </div>
        )
    }

    const getYoutubeEmbedUrl = (url) => {
        const videoIdMatch = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/)
        return videoIdMatch ? `https://www.youtube.com/embed/${videoIdMatch[1]}` : null
    }

    const embedUrl = getYoutubeEmbedUrl(video.url)

    return (
        <div className="container mt-4">
            <h2>{video.title}</h2>
            {embedUrl ? (
                <div className="ratio ratio-16x9 mb-3" style={{ maxWidth: '400px', height: '225px' }}>
                    <iframe
                        src={embedUrl}
                        title={video.title}
                        allowFullScreen
                        frameBorder="0"
                    ></iframe>
                </div>
            ) : (
                <p className="text-danger">Not Valid YouTube URL.</p>
            )}
            <div>
                <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                >
                    Watch the video on YouTube.
                </a>
            </div>
        </div>
    )
}

export default Video