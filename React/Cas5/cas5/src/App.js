import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./Pages/Home"
import Video from "./Components/Video"
import VIDEOS from "./videos.json"

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Home VIDEOS = {VIDEOS} />} />
                    <Route path={'/video/:id'} element={<Video VIDEOS = {VIDEOS}/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
