import {useEffect, useState} from 'react'
import './App.css'

export default function App() {
  const [city, setCity] = useState("Delhi")
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

  console.log(import.meta.env.VITE_WEATHER_API_KEY)


  async function fetchWeather() {
    if (!city) return

    try {
      setLoading(true)
      setError("")

      const res = await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );

      if (!res.ok) throw new Error("City not found")

        const data = await res.json()
        setWeather(data)
    } catch (err) {
      setError(err.message)
      setWeather(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchWeather()
  }, [])

  return (

  <div className="container">
      <h1>🌦️ Weather App</h1>

      <div className="search">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city..."
        />
        <button onClick={fetchWeather}>Search</button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {weather && !loading && (
        <div className="card">
          <h2>{weather.name}</h2>
          <p>{weather.weather[0].description}</p>
          <h1>{Math.round(weather.main.temp)}°C</h1>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind: {weather.wind.speed} km/h</p>
        </div>
      )}
    </div>
  );
}