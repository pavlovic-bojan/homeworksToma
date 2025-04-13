import { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, Row, Col, Card, Pagination } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MovieResult = ({ movie }) => {
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const fetchMovies = async (query, currentPage) => {
        const searchQuery = query?.trim() || 'kum'

        try {
            const res = await axios.get(process.env.REACT_APP_OMDB_API_URL, {
                params: {
                    apikey: process.env.REACT_APP_OMDB_API_KEY,
                    s: searchQuery,
                    page: currentPage,
                    type: 'movie',
                },
            })

            if (res.data.Response === 'False') {
                setError(res.data.Error)
                setMovies([])
                setTotalResults(0)
            } else {
                setMovies(res.data.Search)
                setError(null)
                setTotalResults(parseInt(res.data.totalResults, 10))
            }
        } catch (err) {
            setError('Greška pri dohvaćanju filmova.')
            setMovies([])
            setTotalResults(0)
        }
    }

    useEffect(() => {
        fetchMovies(movie, page)
    }, [movie, page])

    const totalPages = Math.ceil(totalResults / 10)

    const renderPaginationItems = () => {
        const items = []
        const start = Math.max(1, page - 1)
        const end = Math.min(totalPages, page + 1)

        for (let number = start; number <= end; number++) {
            items.push(
                <Pagination.Item
                    key={number}
                    active={number === page}
                    onClick={() => setPage(number)}
                >
                    {number}
                </Pagination.Item>
            )
        }

        return items
    }

    return (
        <Container className="py-4">
            {error && <p className="text-danger">{error}</p>}

            <Row className="gx-3 gy-4">
                {movies.map((movie) => (
                    <Col key={movie.imdbID} style={{ flex: '0 0 20%', maxWidth: '20%' }}>
                        <Card bg="dark" text="white" className="h-100">
                            {movie.Poster !== 'N/A' ? (
                                <Card.Img
                                    variant="top"
                                    src={movie.Poster}
                                    style={{ height: '300px', objectFit: 'cover' }}
                                />
                            ) : (
                                <div
                                    style={{ height: '300px', backgroundColor: '#444' }}
                                    className="d-flex align-items-center justify-content-center text-muted"
                                >
                                    Nema slike
                                </div>
                            )}
                            <Card.Body>
                                <Card.Title className="fs-6">{movie.Title}</Card.Title>
                                <Card.Text className="text-white">{movie.Year}</Card.Text>
                                <Link to={`/movie/${movie.Title.replace(/\s+/g, '_')}`} className="btn btn-primary">View Details</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            {totalPages > 1 && (
                <Pagination className="justify-content-center mt-4">
                    <Pagination.Prev
                        disabled={page === 1}
                        onClick={() => setPage(page - 1)}
                    />
                    {renderPaginationItems()}
                    <Pagination.Next
                        disabled={page === totalPages}
                        onClick={() => setPage(page + 1)}
                    />
                </Pagination>
            )}
        </Container>
    )
}

export default MovieResult