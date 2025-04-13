import { Card, Row, Col, ListGroup } from 'react-bootstrap'

const MovieCard = ({ movie }) => {
    if (!movie) return null

    return (
        <Card className="bg-dark text-white border-secondary my-4 shadow">
            <Row className="g-0">
                <Col md={4}>
                    {movie.Poster && movie.Poster !== 'N/A' ? (
                        <Card.Img
                            src={movie.Poster}
                            alt={movie.Title}
                            className="h-100 object-fit-cover"
                        />
                    ) : (
                        <div className="h-100 d-flex align-items-center justify-content-center bg-secondary text-white text-center p-3">
                            No Poster Available
                        </div>
                    )}
                </Col>
                <Col md={8}>
                    <Card.Body>
                        <Card.Title>{movie.Title} ({movie.Year})</Card.Title>
                        <Card.Subtitle className="mb-3 text-muted">{movie.Genre}</Card.Subtitle>
                        <Card.Text><strong>Plot:</strong> {movie.Plot}</Card.Text>

                        <ListGroup variant="flush" className="bg-dark text-white">
                            <ListGroup.Item className="bg-dark text-white">
                                <strong>Director:</strong> {movie.Director}
                            </ListGroup.Item>
                            <ListGroup.Item className="bg-dark text-white">
                                <strong>Writer:</strong> {movie.Writer}
                            </ListGroup.Item>
                            <ListGroup.Item className="bg-dark text-white">
                                <strong>Actors:</strong> {movie.Actors}
                            </ListGroup.Item>
                            <ListGroup.Item className="bg-dark text-white">
                                <strong>Runtime:</strong> {movie.Runtime}
                            </ListGroup.Item>
                            <ListGroup.Item className="bg-dark text-white">
                                <strong>Language:</strong> {movie.Language}
                            </ListGroup.Item>
                            <ListGroup.Item className="bg-dark text-white">
                                <strong>Country:</strong> {movie.Country}
                            </ListGroup.Item>
                            <ListGroup.Item className="bg-dark text-white">
                                <strong>IMDB Rating:</strong> {movie.imdbRating} ({movie.imdbVotes} votes)
                            </ListGroup.Item>
                            {movie.Ratings?.length > 0 && (
                                <ListGroup.Item className="bg-dark text-white">
                                    <strong>Other Ratings:</strong>
                                    <ul className="mb-0 ps-3">
                                        {movie.Ratings.map((r, idx) => (
                                            <li key={idx}>{r.Source}: {r.Value}</li>
                                        ))}
                                    </ul>
                                </ListGroup.Item>
                            )}
                        </ListGroup>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    )
}

export default MovieCard