import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer className="bg-black text-white py-4 mt-auto">
            <Container>
                <Row>
                    <Col className="d-flex justify-content-center flex-wrap gap-4 mb-3">
                        <a href="https://yts.mx/blog" className="text-white text-decoration-none small">
                            Blog
                        </a>
                        <a href="https://yts.mx/dmca" className="text-white text-decoration-none small">
                            DMCA
                        </a>
                        <a href="https://yts.mx/api" className="text-white text-decoration-none small">
                            API
                        </a>
                        <a href="https://yts.mx/rss-guide" className="text-white text-decoration-none small">
                            RSS
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center small text-white">
                        <div>YTS &copy; 2011–2025</div>
                        <div className="mt-1">
                            This site does not store any files on its server.
                            <br />
                            All contents are provided by non-affiliated third parties.
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer