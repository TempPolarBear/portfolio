
import { useEffect, useRef, useState } from "react"

type RandomMode = "number" | "words"

function Randomizer() {
  const [mode, setMode] = useState<RandomMode>("number")
  const [from, setFrom] = useState("1")
  const [to, setTo] = useState("10")
  const [words, setWords] = useState("")
  const [result, setResult] = useState("")
  const [error, setError] = useState(false)
  const [spinning, setSpinning] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => { if (timerRef.current !== null) clearTimeout(timerRef.current) }
  }, [])

  const changeMode = (nextMode: RandomMode) => {
    if (spinning) return
    setMode(nextMode)
    setResult("")
    setError(false)
  }

  const revealResult = (value: string) => {
    setResult("")
    setError(false)
    setSpinning(true)
    timerRef.current = setTimeout(() => {
      setResult(value)
      setSpinning(false)
      timerRef.current = null
    }, 600)
  }

  const showError = (message: string) => {
    setResult(message)
    setError(true)
  }

  const generate = () => {
    if (spinning) return

    if (mode === "number") {
      if (!from.trim() || !to.trim()) return showError("Enter both From and To values.")

      const min = Number(from)
      const max = Number(to)

      if (!Number.isInteger(min) || !Number.isInteger(max)) return showError("Enter whole numbers for both fields.")
      if (min > max) return showError("From must be less than or equal to To.")

      revealResult(String(Math.floor(Math.random() * (max - min + 1)) + min))
      return
    }

    const values = words.split(",").map(value => value.trim()).filter(Boolean)
    if (!values.length) return showError("Enter at least one value.")

    revealResult(values[Math.floor(Math.random() * values.length)])
  }

  return (
    <article className="card utility-card">
      <div className="card-header">
        <h5 className="fw-bold m-0 p-0"><i className="fa-solid fa-dice me-1"></i>Randomizer</h5>
      </div>

      <div className="card-body">
        {/* Mode selection */}
        <div className="d-flex gap-2 mb-3" role="group" aria-label="Randomizer mode">
          <button type="button" className={`btn flex-fill shadow-sm zoomInOut ${mode === "number" ? "btn-primary" : "btn-outline-primary"}`} aria-pressed={mode === "number"} onClick={() => changeMode("number")} disabled={spinning}>
            <i className="fa-solid fa-dice me-2"></i>Number
          </button>
          <button type="button" className={`btn flex-fill shadow-sm zoomInOut ${mode === "words" ? "btn-primary" : "btn-outline-primary"}`} aria-pressed={mode === "words"} onClick={() => changeMode("words")} disabled={spinning}>
            <i className="fa-solid fa-font me-2"></i>Words
          </button>
        </div>

        {/* Number mode */}
        {mode === "number" && (
          <div className="row g-2 mb-3">
            <div className="col-6">
              <label className="form-label" htmlFor="random-from">From</label>
              <input id="random-from" className="form-control" type="number" step="1" inputMode="numeric" value={from} onChange={event => setFrom(event.target.value)} disabled={spinning} />
            </div>
            <div className="col-6">
              <label className="form-label" htmlFor="random-to">To</label>
              <input id="random-to" className="form-control" type="number" step="1" inputMode="numeric" value={to} onChange={event => setTo(event.target.value)} disabled={spinning} />
            </div>
          </div>
        )}

        {/* Words mode */}
        {mode === "words" && (
          <div className="mb-3">
            <label className="form-label" htmlFor="random-words">Values, separated by commas</label>
            <textarea id="random-words" className="form-control" rows={3} placeholder="apple, banana, mango" value={words} onChange={event => setWords(event.target.value)} disabled={spinning} />
          </div>
        )}

        {/* Animated result */}
        <div className="random-result-area d-flex align-items-center justify-content-center text-center fs-5 fw-semibold mb-3" role="status" aria-live="polite">
          {spinning ? (
            mode === "number" ? (
              <i className="fa-solid fa-dice random-spin text-primary fa-2x" aria-label="Generating number" />
            ) : (
              <span className="random-spin text-primary fs-1 fw-bold" aria-label="Generating word">A</span>
            )
          ) : (
            <span key={result} className={`random-result-text ${error ? "text-danger" : ""}`}>{result}</span>
          )}
        </div>

        <button className="btn btn-primary w-100 shadow-sm zoomInOut" type="button" onClick={generate} disabled={spinning}>
          <i className="fa-solid fa-shuffle me-2"></i>{spinning ? "Generating..." : "Generate"}
        </button>
      </div>
    </article>
  )
}

export default Randomizer
