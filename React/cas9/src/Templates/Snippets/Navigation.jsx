import {Navbar, Nav, Container, FormControl, Form} from 'react-bootstrap'
import { useState } from 'react'

const Navigation = ({ onQuickSearch }) => {
    const [searchText, setSearchText] = useState('')

    const handleSearch = (e) => {
        e.preventDefault()
        if (!searchText.trim()) return
        onQuickSearch(searchText.trim())
    }
  return (
      <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
          <Container>
              <Navbar.Brand href="/" className="fw-bold text-uppercase">
                  YTS<span className="text-success">.Movies</span>
              </Navbar.Brand>

              <Navbar.Toggle aria-controls="main-navbar" />
              <Navbar.Collapse id="main-navbar">
                  <Nav className="ms-auto align-items-center">
                      <Form className="d-flex ms-3" onSubmit={handleSearch}>
                          <FormControl
                              type="search"
                              placeholder="Quick search"
                              className="me-2 bg-dark text-white border-secondary rounded-lg"
                              aria-label="Search"
                              size="sm"
                              value={searchText || 'Quick search'}
                              onChange={(e) => setSearchText(e.target.value)}
                          />
                      </Form>
                      <Nav.Link href="/">Browse Movies</Nav.Link>
                      <Nav.Link href="https://yts.mx/login">Login</Nav.Link>
                      <Nav.Link href="https://yts.mx/register">Register</Nav.Link>
                  </Nav>
              </Navbar.Collapse>
          </Container>
      </Navbar>
  )
}

export default Navigation