
import { useEffect, useRef, useState } from "react"
import type { FormEvent } from "react"

type Location = {
  name: string
  country?: string
  latitude: number
  longitude: number
}

type CurrentWeather = {
  temperature_2m: number
  apparent_temperature: number
  relative_humidity_2m: number
  wind_speed_10m: number
  weather_code: number
  is_day: number
}

type WeatherData = {
  location: string
  current: CurrentWeather
}

type WeatherInfo = { description: string; icon: string }

function getWeather(code: number, isDay: boolean): WeatherInfo {
  if (code === 0) return { description: "Clear sky", icon: isDay ? "fa-sun" : "fa-moon" }
  if (code <= 3) return { description: "Partly cloudy", icon: isDay ? "fa-cloud-sun" : "fa-cloud-moon" }
  if ([45, 48].includes(code)) return { description: "Fog", icon: "fa-smog" }
  if (code >= 51 && code <= 57) return { description: "Drizzle", icon: "fa-cloud-rain" }
  if (code >= 61 && code <= 67) return { description: "Rain", icon: "fa-cloud-showers-heavy" }
  if (code >= 71 && code <= 77) return { description: "Snow", icon: "fa-snowflake" }
  if (code >= 80 && code <= 82) return { description: "Rain showers", icon: "fa-cloud-showers-heavy" }
  if (code >= 85 && code <= 86) return { description: "Snow showers", icon: "fa-snowflake" }
  if (code >= 95) return { description: "Thunderstorm", icon: "fa-cloud-bolt" }
  return { description: "Weather unavailable", icon: "fa-cloud" }
}

function Weather() {
  const [city, setCity] = useState("")
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const requestRef = useRef<AbortController | null>(null)
  const requestIdRef = useRef(0)

  useEffect(() => () => {
    requestIdRef.current += 1
    requestRef.current?.abort()
    requestRef.current = null
  }, [])

  const searchWeather = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const query = city.trim()
    const requestId = ++requestIdRef.current

    requestRef.current?.abort()
    requestRef.current = null

    if (!query) {
      setLoading(false)
      setWeather(null)
      setError("Enter a city name.")
      return
    }

    const controller = new AbortController()
    requestRef.current = controller
    const isCurrentRequest = () =>
      requestId === requestIdRef.current && !controller.signal.aborted

    setLoading(true)
    setError("")
    setWeather(null)

    try {
      // Find city coordinates
      const geoResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=1&language=en&format=json`,
        { signal: controller.signal }
      )
      if (!geoResponse.ok) throw new Error("Location request failed")

      const geoData: { results?: Location[] } = await geoResponse.json()
      if (!isCurrentRequest()) return

      const location = geoData.results?.[0]
      if (!location) {
        setError("City not found.")
        return
      }

      // Get current weather
      const fields = "temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code,is_day"
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=${fields}`,
        { signal: controller.signal }
      )
      if (!response.ok) throw new Error("Weather request failed")

      const data: { current?: CurrentWeather } = await response.json()
      if (!isCurrentRequest()) return

      if (!data.current) throw new Error("Weather data missing")

      setWeather({
        location: [location.name, location.country].filter(Boolean).join(", "),
        current: data.current
      })
    } catch {
      if (isCurrentRequest()) setError("Unable to load weather.")
    } finally {
      if (isCurrentRequest()) {
        setLoading(false)
        if (requestRef.current === controller) requestRef.current = null
      }
    }
  }

  const current = weather?.current
  const info = current ? getWeather(current.weather_code, current.is_day === 1) : null

  return (
    <article className="card utility-card">
      <div className="card-header">
        <h5 className="fw-bold m-0 p-0">
          <i className="fa-solid fa-cloud-sun me-2"></i>Weather
        </h5>
      </div>

      <div className="card-body">
        {/* City search */}
        <form onSubmit={searchWeather} noValidate>
          <label className="form-label fw-semibold" htmlFor="weather-city">City</label>
          <div className="weather-controls mb-3">
            <input id="weather-city" className="form-control" type="search" placeholder="Enter a city..." value={city} onChange={event => setCity(event.target.value)} />
            <button className="btn btn-primary shadow-sm" type="submit" disabled={loading}>
              <i className="fa-solid fa-magnifying-glass me-1"></i>
              {loading ? "Loading..." : "Search"}
            </button>
          </div>
        </form>

        {/* Loading and errors */}
        {loading && <p className="text-center text-body-secondary small" role="status">Loading weather...</p>}
        {error && <p className="text-danger text-center small" role="alert">{error}</p>}

        {/* Weather result */}
        {weather && current && info && (
          <div className="weather-result text-center">
            <h6 className="fw-bold text-primary mb-3">
              <i className="fa-solid fa-location-dot me-2"></i>{weather.location}
            </h6>

            <i className={`fa-solid ${info.icon} fa-3x text-primary my-2 weather-icon`}></i>
            <div className="display-5 fw-bold my-2">{current.temperature_2m}°C</div>
            <p className="fw-semibold mb-3">{info.description}</p>

            <dl className="utility-details mb-0">
              <div><dt><i className="fa-solid fa-temperature-half me-2"></i>Feels like</dt><dd>{current.apparent_temperature}°C</dd></div>
              <div><dt><i className="fa-solid fa-droplet me-2"></i>Humidity</dt><dd>{current.relative_humidity_2m}%</dd></div>
              <div><dt><i className="fa-solid fa-wind me-2"></i>Wind</dt><dd>{current.wind_speed_10m} km/h</dd></div>
            </dl>
          </div>
        )}

        {!weather && !loading && !error && (
          <p className="text-center text-body-secondary small mb-0">
            <i className="fa-solid fa-earth-europe me-2"></i>Search for weather anywhere in the world.
          </p>
        )}
      </div>
    </article>
  )
}

export default Weather
