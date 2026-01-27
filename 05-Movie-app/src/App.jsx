import { useState } from "react"
import MovieCard from "./components/MovieCard"

const API_KEY = import.meta.env.VITE_TMDB_API_KEY

export default function App() {
  const [query, setQuery] = useState("")
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  console.log(import.meta.env.VITE_TMDB_API_KEY)

  async function searchMovies() {
    if (!query) return

    try {
      setLoading(true)
      setError("")

      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
      )

      const data = await res.json()
      setMovies(data.results || [])
    } catch (err) {
      setError("Failed to fetch movies")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container">
      <h1>🎬 Movie Search App</h1>

      <div className="search">
        <input
          placeholder="Search movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={searchMovies}>Search</button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      <div className="grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}
