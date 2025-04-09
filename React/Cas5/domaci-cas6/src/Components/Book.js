import { useParams } from "react-router-dom"

const Book = ({BOOKS}) => {
    const { id } = useParams()
    const book = BOOKS.find(v => v.id === Number(id))

    if (!book) {
        return (
            <div className="container mt-4">
                <h2 className="bg-danger text-white p-2">Error</h2>
                <p>This book does not exist in the source.</p>
            </div>
        )
    }

    const getYoutubeEmbedUrl = (url) => {
        const bookIdMatch = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/)
        return bookIdMatch ? `https://www.youtube.com/embed/${bookIdMatch[1]}` : null
    }

    const embedUrl = getYoutubeEmbedUrl(book.url)

    return (
        <div className="container mt-4">
            <h2>{book.title}</h2>
            {embedUrl ? (
                <div className="ratio ratio-16x9 mb-3" style={{ maxWidth: '400px', height: '225px' }}>
                    <iframe
                        src={embedUrl}
                        title={book.title}
                        allowFullScreen
                        frameBorder="0"
                    ></iframe>
                </div>
            ) : (
                <p className="text-danger">Not Valid YouTube URL.</p>
            )}
            <div>
                <a
                    href={book.url}
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

export default Book