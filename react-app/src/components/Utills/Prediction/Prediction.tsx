
import { useState } from "react"

type FortuneResponse = { fortune: string }

function Prediction() {
  const [prediction, setPrediction] = useState("Your fortune is waiting...")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [revealed, setRevealed] = useState(false)

  const handlePrediction = async () => {
    setLoading(true)
    setError(false)
    setRevealed(false)

    try {
      const response = await fetch("https://dumbapis.com/fortune", { cache: "no-store" })
      if (!response.ok) throw new Error("Request failed")

      const data: FortuneResponse = await response.json()
      if (typeof data.fortune !== "string" || !data.fortune.trim()) throw new Error("Invalid fortune")
      setPrediction(data.fortune)
    } catch {
      setPrediction("The universe is busy. Try again!")
      setError(true)
    } finally {
      setLoading(false)
      setRevealed(true)
    }
  }

  return (
    <article className="card utility-card">
      <div className="card-header">
        <h5 className="fw-bold m-0 p-0"><i className="fa-solid fa-wand-magic-sparkles me-2"></i>Fortune Cookie</h5>
      </div>

      <div className="card-body d-flex flex-column text-center">
        {/* Animated cookie */}
        <div className="fortune-cookie-container mx-auto my-2">
          <img
              src="/assets/img/utils/fortune-cookie.webp"
              alt="Golden fortune cookie"
              className={`fortune-cookie-img ${loading ? "fortune-shake" : revealed ? "fortune-bounce" : "fortune-float"}`}
            />
        </div>

        {/* Fortune message */}
        <div className="prediction-box d-flex align-items-center my-3">
          <p key={loading ? "loading" : prediction} className={`utility-result mb-0 ${error ? "text-danger" : ""} ${revealed ? "fortune-reveal" : ""}`} role="status" aria-live="polite">
            {loading ? "Revealing your fortune..." : prediction}
          </p>
        </div>

        <button className="btn btn-primary w-100 shadow-sm zoomInOut" type="button" onClick={handlePrediction} disabled={loading}>
          <i className="fa-solid fa-wand-magic-sparkles me-2"></i>{loading ? "Loading..." : "Reveal My Fortune"}
        </button>

        <p className="small text-body-secondary mt-3 mb-0">Just for fun!</p>
      </div>
    </article>
  )
}

export default Prediction
