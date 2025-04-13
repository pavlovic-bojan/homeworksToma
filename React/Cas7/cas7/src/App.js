import logo from './logo.svg'
import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

console.log(process.env.REACT_APP_OMDB_API_KEY)
//https://www.omdbapi.com/?t=terminator&apikey=8b91d8e2
console.log(process.env.REACT_APP_OMDB_API_URL)
function App() {
    const [movie, setMovie] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await axios.get(process.env.REACT_APP_OMDB_API_URL, {
                    params: {
                        t: 'Terminator',
                        apikey: process.env.REACT_APP_OMDB_API_KEY,
                    },
                });
                setMovie(response.data)
            } catch (err) {
                setError('Došlo je do greške prilikom dohvatanja filma')
                console.error(err)
            }
        };

        fetchMovie()
    }, [])

    if (error) return <div>{error}</div>
    if (!movie) return <div>Učitavanje...</div>

  return (
      <>
          <div>
              <h1>{movie.Title}</h1>
              <p>{movie.Plot}</p>
              <img src={movie.Poster} alt={movie.Title}/>
          </div>

          <div className="App">
              <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo"/>
                  <p>
                      Edit <code>src/App.js</code> and save to reload.
                  </p>
                  <a
                      className="App-link"
                      href="https://reactjs.org"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      Learn React
                  </a>
              </header>
          </div>
      </>
  );
}

export default App
