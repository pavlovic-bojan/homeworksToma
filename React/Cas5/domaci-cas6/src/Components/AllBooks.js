const AllBooks = ({books}) => {
    return (
        <>
            <div className="container mt-4">
                <h2 className="mb-4">YouTube Video List</h2>
                <div className="row">
                    {books.map(book => (
                        <div className="col-md-3 mb-4" key={book.id}>
                            <a href={book.url} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={book.cover}
                                    alt={book.title}
                                    width="400"
                                    height="370"
                                    className="img-fluid mb-2"
                                />
                            </a>
                            <div>
                                <a href={book.url} target="_blank" rel="noopener noreferrer">
                                    {book.title}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default AllBooks