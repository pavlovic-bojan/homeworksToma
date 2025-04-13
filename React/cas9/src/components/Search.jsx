import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useState } from 'react'

const genres = ['All', 'Action', 'Comedy', 'Drama', 'Horror', 'Romance', 'Sci-Fi']
const qualities = ['All', '720p', '1080p', '2160p', '3D']
const ratings = ['All', '9+', '8+', '7+', '6+', '5+']
const languages = ['All', 'English', 'French', 'German', 'Spanish', 'Japanese']
const years = Array.from({ length: 30 }, (_, i) => `${2025 - i}`)

const Search = ({ onSearch }) => {
    const [query, setQuery] = useState('')
    const [filters, setFilters] = useState({
        sort: 'Date Added',
        order: 'Descending',
        quality: 'All',
        genre: 'All',
        rating: 'All',
        language: 'All',
        year: 'All',
    })

    const handleInputChange = (e) => {
        setQuery(e.target.value)
    }

    const handleFilterChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value })
    }

    const handleSearch = (e) => {
        e.preventDefault()
        onSearch(query, filters)
    }

    return (
        <div className="bg-black text-white py-4 border-bottom border-secondary">
            <Container>
                <Form onSubmit={handleSearch}>
                    <Row className="align-items-center mb-3 gy-2 col-md-12">
                        <Col md={11}>
                            <Form.Control
                                type="text"
                                placeholder="Search movies..."
                                value={query}
                                onChange={handleInputChange}
                                className="bg-dark text-white border-secondary"
                            />
                        </Col>
                        <Col md="auto">
                            <Button type="submit" variant="success">
                                Search
                            </Button>
                        </Col>
                    </Row>
                    <Row className="gy-2 col-md-12">
                        <Col md>
                            <Form.Select
                                name="sort"
                                onChange={handleFilterChange}
                                className="bg-dark text-white border-secondary"
                            >
                                <option value="Date Added">Sort by: Date Added</option>
                                <option value="Title">Title</option>
                                <option value="Year">Year</option>
                                <option value="Rating">Rating</option>
                            </Form.Select>
                        </Col>
                        <Col md>
                            <Form.Select
                                name="order"
                                onChange={handleFilterChange}
                                className="bg-dark text-white border-secondary"
                            >
                                <option>Descending</option>
                                <option>Ascending</option>
                            </Form.Select>
                        </Col>
                        <Col md>
                            <Form.Select
                                name="quality"
                                onChange={handleFilterChange}
                                className="bg-dark text-white border-secondary"
                            >
                                {qualities.map((q) => (
                                    <option key={q}>{q}</option>
                                ))}
                            </Form.Select>
                        </Col>
                        <Col md>
                            <Form.Select
                                name="genre"
                                onChange={handleFilterChange}
                                className="bg-dark text-white border-secondary"
                            >
                                {genres.map((g) => (
                                    <option key={g}>{g}</option>
                                ))}
                            </Form.Select>
                        </Col>
                        <Col md>
                            <Form.Select
                                name="rating"
                                onChange={handleFilterChange}
                                className="bg-dark text-white border-secondary"
                            >
                                {ratings.map((r) => (
                                    <option key={r}>{r}</option>
                                ))}
                            </Form.Select>
                        </Col>
                        <Col md>
                            <Form.Select
                                name="language"
                                onChange={handleFilterChange}
                                className="bg-dark text-white border-secondary"
                            >
                                {languages.map((l) => (
                                    <option key={l}>{l}</option>
                                ))}
                            </Form.Select>
                        </Col>
                        <Col md>
                            <Form.Select
                                name="year"
                                onChange={handleFilterChange}
                                className="bg-dark text-white border-secondary"
                            >
                                <option>All</option>
                                {years.map((y) => (
                                    <option key={y}>{y}</option>
                                ))}
                            </Form.Select>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    )
}

export default Search