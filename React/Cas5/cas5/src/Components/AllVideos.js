const VIDEOS = [
    {
        id: 1,
        title: 'How To Learn React',
        url: 'https://www.youtube.com/watch?v=SqcY0GlETPk&t=163s&ab_channel=ProgrammingwithMosh',
        cover: 'https://i.ytimg.com/vi/SqcY0GlETPk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBvF7R7tYEZqgAYn6fM5A_QgI1e-A',
    },
    {
        id: 2,
        title: 'How To Learn CSS',
        url: 'https://www.youtube.com/watch?v=1PnVor36_40&ab_channel=WebDevSimplified',
        cover: 'https://i.ytimg.com/vi/1PnVor36_40/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDxu4d0I14WzO7TheYrZCPAQQe7Ag',
    }
]

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