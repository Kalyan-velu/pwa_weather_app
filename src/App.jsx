import { useState } from 'react'
import './App.css'
import { fetchWeather, geoLocation } from './Api'

function App() {
  const [query, setQuery] = useState('')
  const [city, setCity] = useState([])
  const [weather, setWeather] = useState(null)

  const search = async (e) => {
    if (e.key === 'Enter') {
      const { data } = await geoLocation(query)
      if (data) {
        setCity([city, ...data])
        console.log(city)
      }
    }
  }

  const weatherDetailts = async (city) => {
    const { data } = await fetchWeather(city)
    console.log(data)
    setWeather(data)
  }

  return (
    <div className='app'>
      {/* <h1 className='logo'>Weather App</h1> */}
      <div className="search">
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={(e) => search(e)} placeholder="Enter City" />
        <span>** Press Enter After Entering City Name</span>
        <div className="search-list">
          {city && city.map((city, index) => (
            <div key={index} onClick={() => weatherDetailts(city)} className="city">
              <h2 className="city-name">
                <span>{city.name}</span>
                <sup>{city.country}</sup>
              </h2>
            </div>
          ))}
        </div>
      </div>
      {city.length > 0 && <button onClick={() => setCity([])} className='getData-button'>Remove City Suggestion</button>}
      <button onClick={search} className='getData-button'>Get Weather</button>
      {weather && (
        <div className="weather-card">
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className="city-temp">
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
          </div>
          <div className="info">
            <img className="city-icon" src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt={weather.weather[0].description} />
            <p>{weather.weather[0].description}</p>
          </div>
        </div>)}
    </div>
  )
}
export default App
