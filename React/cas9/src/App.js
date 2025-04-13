import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Movies from "./components/Movies"
import MovieCard from "./Templates/Snippets/MovieCard";

function App() {

    return (
        <div className="bg-dark text-white">
            <Router>
                <Routes>
                    <Route path="/" element={<Movies />} />
                    <Route path="/movie/:title" element={<MovieCard />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App