import { useState } from "react"
import { addValue, calculateExpression } from "./calculatorLogic"

const buttons = [
  { label: "C", action: "clear", style: "btn-danger calculator-clear" },
  { label: "÷", value: "/" },
  { label: "7", value: "7" },
  { label: "8", value: "8" },
  { label: "9", value: "9" },
  { label: "×", value: "*" },
  { label: "4", value: "4" },
  { label: "5", value: "5" },
  { label: "6", value: "6" },
  { label: "−", value: "-" },
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "+", value: "+" },
  { label: "0", value: "0", style: "btn-secondary calculator-zero" },
  { label: ".", value: "." },
  { label: "=", action: "equals", style: "btn-primary" },
]

function Calculator() {
  const [expression, setExpression] = useState("")
  const [error, setError] = useState("")

  const handleButton = (value?: string, action?: string) => {
    if (action === "clear") {
      setExpression("")
      setError("")
      return
    }

    if (action === "equals") {
      try {
        setExpression(calculateExpression(expression))
        setError("")
      } catch (err) {
        setExpression("")
        setError(err instanceof Error ? err.message : "Invalid expression")
      }
      return
    }

    if (value) {
      setError("")
      setExpression(current => addValue(current, value))
    }
  }

  return (
    <article className="card utility-card">
      <div className="card-header">
        <h5 className="fw-bold m-0 p-0"><i className="fa-solid fa-calculator me-1"></i>Calculator</h5>
      </div>

      <div className="card-body">
        {/* Display */}
        <label className="visually-hidden" htmlFor="calculator-display">Calculator display</label>
        <input id="calculator-display" type="text" className={`form-control text-end mb-3 ${error ? "is-invalid" : ""}`} value={error || expression} placeholder="0" readOnly aria-live="polite" />

        {/* Buttons */}
        <div className="calculator-grid">
          {buttons.map((button, index) => (
            <button key={index} type="button" className={`btn ${button.style ?? "btn-secondary"}`} onClick={() => handleButton(button.value, button.action)} aria-label={button.action === "clear" ? "Clear" : button.action === "equals" ? "Equals" : button.value === "/" ? "Divide" : button.value === "*" ? "Multiply" : undefined}>
              {button.label}
            </button>
          ))}
        </div>
      </div>
    </article>
  )
}

export default Calculator
