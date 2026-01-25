import { useState } from "react"
import RecipeCard from "./components/RecipeCard"
import "./App.css"

export default function App() {
  const [query, setQuery] = useState("")
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function searchRecipes() {
    if (!query) return

    try {
      setLoading(true)
      setError("")
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      )
      const data = await res.json()
      setMeals(data.meals || [])
    } catch (err) {
      setError("Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container">
      <h1>🍲 Recipe Finder</h1>

      <div className="search">
        <input
          placeholder="Search recipe..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={searchRecipes}>Search</button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {meals.length === 0 && !loading && <p>No recipes found</p>}

      <div className="grid">
        {meals.map((meal) => (
          <RecipeCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  )
}
