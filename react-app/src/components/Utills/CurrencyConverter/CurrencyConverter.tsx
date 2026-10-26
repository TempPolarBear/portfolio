
import { useEffect, useMemo, useState } from "react"

type Currency = { iso_code: string; name: string; symbol?: string | null }
type Rate = { rate: number; date: string; base: string; quote: string }

const API = "https://api.frankfurter.dev/v2"
const fallback: Currency[] = [
  { iso_code: "USD", name: "US Dollar" },
  { iso_code: "EUR", name: "Euro" },
  { iso_code: "UAH", name: "Ukrainian Hryvnia" },
  { iso_code: "GBP", name: "British Pound" },
  { iso_code: "CZK", name: "Czech Koruna" },
  { iso_code: "PLN", name: "Polish Zloty" },
]

function CurrencyConverter() {
  const [currencies, setCurrencies] = useState<Currency[]>(fallback)
  const [amount, setAmount] = useState("100")
  const [from, setFrom] = useState("USD")
  const [to, setTo] = useState("EUR")
  const [fromSearch, setFromSearch] = useState("")
  const [toSearch, setToSearch] = useState("")
  const [rateData, setRateData] = useState<Rate | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [catalogError, setCatalogError] = useState(false)
  const [swapped, setSwapped] = useState(false)

  // Load available currencies
  useEffect(() => {
    const controller = new AbortController()

    const loadCurrencies = async () => {
      try {
        const response = await fetch(`${API}/currencies`, { signal: controller.signal })
        if (!response.ok) throw new Error("Currency request failed")

        const data: Currency[] = await response.json()
        if (!Array.isArray(data)) throw new Error("Invalid currency list")

        const list = data
          .filter(item => item.iso_code && item.name)
          .sort((a, b) => a.iso_code.localeCompare(b.iso_code))

        if (!list.length) throw new Error("Empty currency list")
        if (!controller.signal.aborted) setCurrencies(list)
      } catch {
        if (!controller.signal.aborted) setCatalogError(true)
      }
    }

    void loadCurrencies()
    return () => controller.abort()
  }, [])

  // Fetch rate when selected currencies change
  useEffect(() => {
    if (from === to) return

    const controller = new AbortController()
    const timer = setTimeout(async () => {
      setLoading(true)
      setError("")

      try {
        const response = await fetch(`${API}/rate/${from}/${to}`, { signal: controller.signal })
        if (!response.ok) throw new Error("Rate request failed")

        const data: Rate = await response.json()
        if (!Number.isFinite(data.rate) || data.rate <= 0) throw new Error("Invalid rate")

        if (!controller.signal.aborted) setRateData(data)
      } catch {
        if (!controller.signal.aborted) {
          setRateData(null)
          setError("Unable to load exchange rates.")
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    }, 350)

    return () => {
      clearTimeout(timer)
      controller.abort()
    }
  }, [from, to])

  const filteredFrom = useMemo(() => currencies.filter(item =>
    `${item.iso_code} ${item.name}`.toLowerCase().includes(fromSearch.toLowerCase())
  ), [currencies, fromSearch])

  const filteredTo = useMemo(() => currencies.filter(item =>
    `${item.iso_code} ${item.name}`.toLowerCase().includes(toSearch.toLowerCase())
  ), [currencies, toSearch])

  const value = Number(amount)
  const validAmount = amount.trim() !== "" && Number.isFinite(value) && value >= 0
  const currentRate = from === to ? 1 : rateData?.base === from && rateData?.quote === to ? rateData.rate : null
  const result = validAmount && currentRate !== null ? value * currentRate : null

  const formatMoney = (number: number, currency: string) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency, maximumFractionDigits: 2 }).format(number)

  const swapCurrencies = () => {
    setFrom(to)
    setTo(from)
    setFromSearch("")
    setToSearch("")
    setSwapped(value => !value)
  }

  return (
    <article className="card utility-card">
      <div className="card-header">
        <h5 className="fw-bold m-0 p-0">
          <i className="fa-solid fa-money-bill-transfer me-2"></i>Currency Converter
        </h5>
      </div>

      <div className="card-body">
        {/* Amount */}
        <label className="form-label fw-semibold" htmlFor="currency-amount">Amount</label>
        <input id="currency-amount" className="form-control form-control-lg mb-3" type="number" min="0" step="any" inputMode="decimal" value={amount} onChange={event => setAmount(event.target.value)} />

        {/* Currency selection */}
        <div className="row g-2 align-items-end mb-3">
          <div className="col-5">
            <label className="form-label fw-semibold" htmlFor="currency-from">From</label>
            <input className="form-control form-control-sm mb-2" aria-label="Search source currency" placeholder="Search..." value={fromSearch} onChange={event => setFromSearch(event.target.value)} />
            <select id="currency-from" className="form-select" value={from} onChange={event => setFrom(event.target.value)}>
              {!filteredFrom.some(item => item.iso_code === from) && <option value={from}>{from}</option>}
              {filteredFrom.map(item => <option key={item.iso_code} value={item.iso_code}>{item.iso_code} — {item.name}</option>)}
            </select>
          </div>

          <div className="col-2 text-center">
            <button className="btn btn-outline-primary currency-swap" type="button" onClick={swapCurrencies} aria-label="Swap currencies">
              <i className={`fa-solid fa-right-left ${swapped ? "currency-swap-rotated" : ""}`}></i>
            </button>
          </div>

          <div className="col-5">
            <label className="form-label fw-semibold" htmlFor="currency-to">To</label>
            <input className="form-control form-control-sm mb-2" aria-label="Search target currency" placeholder="Search..." value={toSearch} onChange={event => setToSearch(event.target.value)} />
            <select id="currency-to" className="form-select" value={to} onChange={event => setTo(event.target.value)}>
              {!filteredTo.some(item => item.iso_code === to) && <option value={to}>{to}</option>}
              {filteredTo.map(item => <option key={item.iso_code} value={item.iso_code}>{item.iso_code} — {item.name}</option>)}
            </select>
          </div>
        </div>

        {/* Result */}
        <div className="currency-result-box text-center p-3 rounded-3 border">
          <p className="small text-body-secondary mb-2">Converted amount</p>

          <div key={`${from}-${to}-${amount}-${currentRate}`} className="currency-result-value fs-3 fw-bold text-primary" aria-live="polite">
            {!validAmount ? "Enter a valid amount" : loading || (from !== to && currentRate === null && !error) ? "Loading..." : result !== null ? formatMoney(result, to) : "—"}
          </div>

          {validAmount && currentRate !== null && (
            <p className="small mb-1">1 {from} = {currentRate.toFixed(4)} {to}</p>
          )}

          {from !== to && currentRate !== null && rateData?.date && (
            <p className="small text-body-secondary mb-0">Rate date: {rateData.date}</p>
          )}

          {from === to && <p className="small text-body-secondary mb-0">Same currency</p>}
          {error && from !== to && <p className="text-danger small mb-0">{error}</p>}
        </div>

        {catalogError && <p className="small text-body-secondary mt-2 mb-0">Limited currency list available.</p>}
        <p className="small text-body-secondary text-center mt-3 mb-0">Reference rates updated daily</p>
      </div>
    </article>
  )
}

export default CurrencyConverter
