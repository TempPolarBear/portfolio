
import { useEffect, useState } from "react"

type City = {
  id: number
  name: string
  country?: string
  admin1?: string
  timezone: string
}

type CityResponse = { results?: City[] }
type SelectedCity = { name: string; country: string; timezone: string }

function Date_Time() {
  const [query, setQuery] = useState("")
  const [cities, setCities] = useState<City[]>([])
  const [selected, setSelected] = useState<SelectedCity>({ name: "Odesa", country: "Ukraine", timezone: "Europe/Kyiv" })
  const [now, setNow] = useState(() => new Date())
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (query.trim().length < 3) return

    const controller = new AbortController()
    const timer = setTimeout(async () => {
      setLoading(true)
      setError("")

      try {
        const response = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query.trim())}&count=8&language=en&format=json`,
          { signal: controller.signal }
        )
        if (!response.ok) throw new Error("Search failed")

        const data: CityResponse = await response.json()
        if (controller.signal.aborted) return
        setCities((data.results ?? []).filter(city => city.timezone))
      } catch {
        if (controller.signal.aborted) return
        setCities([])
        setError("Unable to search cities.")
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    }, 400)

    return () => {
      clearTimeout(timer)
      controller.abort()
    }
  }, [query])

  const format = (options: Intl.DateTimeFormatOptions) =>
    new Intl.DateTimeFormat("en-GB", { ...options, timeZone: selected.timezone }).format(now)

  const selectCity = (city: City) => {
    setSelected({ name: city.name, country: city.country ?? "", timezone: city.timezone })
    setQuery("")
    setCities([])
    setError("")
  }

  return (
    <article className="card utility-card">
      <div className="card-header">
        <h5 className="fw-bold m-0 p-0"><i className="fa-solid fa-earth-europe me-2"></i>World Clock</h5>
      </div>

      <div className="card-body">
        {/* City search */}
        <label className="form-label" htmlFor="city-search">Search city</label>
        <input id="city-search" className="form-control mb-2" type="search" placeholder="Enter city name..." value={query} onChange={event => {
          setQuery(event.target.value)
          setCities([])
          setError("")
        }} />

        {loading && <p className="small text-body-secondary">Searching...</p>}
        {error && <p className="small text-danger">{error}</p>}

        {cities.length > 0 && (
          <div className="list-group mb-3">
            {cities.map(city => (
              <button key={city.id} type="button" className="list-group-item list-group-item-action" onClick={() => selectCity(city)}>
                <i className="fa-solid fa-location-dot me-2"></i>
                {city.name}{city.admin1 ? `, ${city.admin1}` : ""}{city.country ? `, ${city.country}` : ""}
              </button>
            ))}
          </div>
        )}

        {/* Selected city */}
        <div className="text-center my-3">
          <h6 className="text-primary fw-bold mb-2">
            <i className="fa-solid fa-location-dot me-2"></i>{selected.name}, {selected.country}
          </h6>
          <div className="fs-3 fw-bold" role="timer">
            {format({ hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false })}
          </div>
        </div>

        {/* Date details */}
        <dl className="utility-details mb-0">
          <div><dt>Day</dt><dd>{format({ weekday: "long" })}</dd></div>
          <div><dt>Date</dt><dd>{format({ day: "numeric", month: "long", year: "numeric" })}</dd></div>
          <div><dt>Timezone</dt><dd>{selected.timezone}</dd></div>
        </dl>
      </div>
    </article>
  )
}

export default Date_Time
