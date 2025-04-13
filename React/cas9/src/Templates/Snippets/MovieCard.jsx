import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Card, Row, Col, ListGroup } from 'react-bootstrap'
import Navigation from "./Navigation"
import Footer from "./Footer"

const MovieCard = () => {
    const { title } = useParams()
    const [movie, setMovie] = useState(null)

    const fetchMovieDetails = async () => {
        try {
            const res = await axios.get(process.env.REACT_APP_OMDB_API_URL, {
                params: {
                    apikey: process.env.REACT_APP_OMDB_API_KEY,
                    t: title.replace('_', ' '),
                    type: 'movie',
                },
            })

            if (res.data.Response === 'True') {
                setMovie(res.data)
            }
        } catch (err) {
            console.error("Error fetching movie details:", err)
        }
    }

    useEffect(() => {
        fetchMovieDetails()
    }, [title])

    if (!movie) {
        return <p>Loading...</p>
    }

    const movieBackground = movie.Poster && movie.Poster !== 'N/A' ? movie.Poster : 'path_to_default_image.jpg';

    return (
        <>
            <Navigation />

            <div style={{ position: 'relative' }}>
                {/* Blurovana pozadina */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(${movieBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(10px)',
                    opacity: 0.5,
                    zIndex: 0,
                }}></div>

                {/* Overlay da zatamni dodatno */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'black',
                    opacity: 0.4,
                    zIndex: 1,
                }}></div>

                {/* Glavni sadržaj */}
                <div style={{ position: 'relative', zIndex: 2, padding: '2rem 1rem' }}>
                    <Card className=" text-white border-secondary my-4 shadow" style={{ backgroundColor: 'transparent' }}>
                        <Row className="g-0">
                            <Col md={4}>
                                {movie.Poster && movie.Poster !== 'N/A' ? (
                                    <Card.Img
                                        src={movie.Poster}
                                        alt={movie.Title}
                                        className="h-100 object-fit-cover"
                                    />
                                ) : (
                                    <div
                                        className="h-100 d-flex align-items-center justify-content-center bg-secondary text-white text-center p-3">
                                        No Poster Available
                                    </div>
                                )}
                            </Col>
                            <Col md={8}>
                                <Card.Body>
                                    <Card.Title>{movie.Title} ({movie.Year})</Card.Title>
                                    <Card.Subtitle className="mb-3 text-white">{movie.Genre}</Card.Subtitle>
                                    <Card.Text><strong>Plot:</strong> {movie.Plot}</Card.Text>

                                    <ListGroup variant="flush" className="text-white" style={{ backgroundColor: 'transparent' }}>
                                        <ListGroup.Item className="text-white" style={{ backgroundColor: 'transparent' }}>
                                            <strong>Director:</strong> {movie.Director}
                                        </ListGroup.Item>
                                        <ListGroup.Item className="text-white" style={{ backgroundColor: 'transparent' }}>
                                            <strong>Writer:</strong> {movie.Writer}
                                        </ListGroup.Item>
                                        <ListGroup.Item className="text-white" style={{ backgroundColor: 'transparent' }}>
                                            <strong>Actors:</strong> {movie.Actors}
                                        </ListGroup.Item>
                                        <ListGroup.Item className="text-white" style={{ backgroundColor: 'transparent' }}>
                                            <strong>Runtime:</strong> {movie.Runtime}
                                        </ListGroup.Item>
                                        <ListGroup.Item className="text-white" style={{ backgroundColor: 'transparent' }}>
                                            <strong>Language:</strong> {movie.Language}
                                        </ListGroup.Item>
                                        <ListGroup.Item className="text-white" style={{ backgroundColor: 'transparent' }}>
                                            <strong>Country:</strong> {movie.Country}
                                        </ListGroup.Item>
                                        <ListGroup.Item className="text-white" style={{ backgroundColor: 'transparent' }}>
                                            <strong>IMDB Rating:</strong> {movie.imdbRating} ({movie.imdbVotes} votes)
                                        </ListGroup.Item>
                                        {movie.Ratings?.length > 0 && (
                                            <ListGroup.Item className="text-white" style={{ backgroundColor: 'transparent' }}>
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
                </div>
            </div>

            <Footer />
        </>
    )
}

export default MovieCard