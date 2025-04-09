import AllVideos from "../Components/AllVideos"
import SearchBar from "../Components/SearchBar"
import VIDEOS from "../videos.json"
import {useState} from "react";

const Home = () => {

    let [videos, setVideos] = useState(VIDEOS)

    return (
        <>
            <h1>Home page</h1>
            <SearchBar/>
            <AllVideos/>
        </>
    )
}

export default Home