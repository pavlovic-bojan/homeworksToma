import VIDEOS from "./../videos.json"

const AllVideos = () => {
    return (
        <>
            <div className="container mt-4">
                <h2 className="mb-4">YouTube Video List</h2>
                <div className="row">
                    {VIDEOS.map(video => (
                        <div className="col-md-3 mb-4" key={video.id}>
                            <a href={video.url} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={video.cover}
                                    alt={video.title}
                                    width="400"
                                    height="370"
                                    className="img-fluid mb-2"
                                />
                            </a>
                            <div>
                                <a href={video.url} target="_blank" rel="noopener noreferrer">
                                    {video.title}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default AllVideos