import Navigation from "../Templates/Snippets/Navigation"
import Footer from "../Templates/Snippets/Footer"
import Search from "./Search"
import { useState } from "react"
import MovieResult from "../Templates/MovieResult"
import MovieCard from "../Templates/Snippets/MovieCard" // Importujemo MovieCard

const Movies = () => {
    const [movieTitle, setMovieTitle] = useState('')
    const [selectedMovie, setSelectedMovie] = useState(null) // Dodajemo stanje za izabrani film

    const handleSearch = (query, filters) => {
        console.log('Searching for:', query)
        setMovieTitle(query)
        setSelectedMovie(null) // Resetujemo izabrani film prilikom nove pretrage
    }

    return (
        <>
            <Navigation onQuickSearch={handleSearch} />
            <Search onSearch={handleSearch} />

            {selectedMovie ? (
                <MovieCard movie={selectedMovie} /> // Ako je film izabran, prikazujemo MovieCard
            ) : (
                <MovieResult movie={movieTitle} setSelectedMovie={setSelectedMovie} /> // Inače, prikazujemo MovieResult
            )}

            <Footer />
        </>
    )
}

export default Movies