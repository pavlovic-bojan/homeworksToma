import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./Pages/Home"
import Video from "./Components/Video"

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Home />} />
                    <Route path={'/video/:id'} element={<Video />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
