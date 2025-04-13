import Navigation from "../Templates/Snippets/Navigation"
import Footer from "../Templates/Snippets/Footer"
import Search from "./Search"
import {useState} from "react"
import MovieResult from "../Templates/MovieResult"

const Movies = () => {

    const [movieTitle, setMovieTitle] = useState('')

    const handleSearch = (query, filters) => {
        console.log('Searching for:', query)
        setMovieTitle(query)
    }

  return (
    <>
      <Navigation onQuickSearch={handleSearch} />
      <Search onSearch={handleSearch} />
      <MovieResult movie={movieTitle} />
      <Footer />
    </>
  )
}

export default Movies