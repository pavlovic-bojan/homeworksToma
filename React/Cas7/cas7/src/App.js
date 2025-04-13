import { useState } from 'react'
import SearchForm from './components/SearchForm'
import MovieResult from './components/MovieResult'

function App() {
    const [title, setTitle] = useState('')

    return (
        <div>
            <h1>Pretraga filmova</h1>
            <SearchForm onSearch={setTitle} />
            <MovieResult title={title} />
        </div>
    )
}

export default App
