import AllBooks from "../Components/AllBooks"
import SearchBar from "../Components/SearchBar"
import {useState} from "react";

const Home = ({BOOKS}) => {

    const [books, setBooks] = useState(BOOKS)
    const [filteredBooks, setFilteredBooks] = useState(BOOKS)

    const handleSearchBar = (results) => {
        setFilteredBooks(results)
    }

    return (
        <>
            <h1>Home page</h1>
            <SearchBar books = {books} onSearchBook = {handleSearchBar} />
            <AllBooks books = { filteredBooks} />
        </>
    )
}

export default Home