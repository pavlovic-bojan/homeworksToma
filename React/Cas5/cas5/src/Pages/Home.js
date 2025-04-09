import AllVideos from "../Components/AllVideos"
import SearchBar from "../Components/SearchBar"
import {useState} from "react";

const Home = ({VIDEOS}) => {

    const [videos, setVideos] = useState(VIDEOS)
    const [filteredVideos, setFilteredVideos] = useState(VIDEOS)

    const handleSearchBar = (results) => {
        setFilteredVideos(results)
    }

    return (
        <>
            <h1>Home page</h1>
            <SearchBar videos = {videos} onSearchVideo = {handleSearchBar} />
            <AllVideos videos = { filteredVideos} />
        </>
    )
}

export default Home