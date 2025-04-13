import { useEffect, useState } from 'react'
import axios from 'axios'

const MovieResult = ({ title }) => {
    const [movie, setMovie] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!title) return

        const fetchMovie = async () => {
            try {
                const res = await axios.get(process.env.REACT_APP_OMDB_API_URL, {
                    params: {
                        t: title,
                        apikey: process.env.REACT_APP_OMDB_API_KEY,
                    },
                })

                if (res.data.Response === 'False') {
                    setError(res.data.Error)
                    setMovie(null)
                } else {
                    setMovie(res.data)
                    setError(null)
                }
            } catch (err) {
                setError('Greška pri dohvaćanju podataka.')
                console.error(err)
            }
        }

        fetchMovie()
    }, [title])

    if (!title) return null
    if (error) return <p>{error}</p>
    if (!movie) return <p>Učitavanje...</p>

    return (
        <div>
            <h2>{movie.Title}</h2>
            <p>{movie.Year}</p>
            <p>{movie.Plot}</p>
            {movie.Poster && <img src={movie.Poster} alt={movie.Title} />}
        </div>
    )
}

export default MovieResult
