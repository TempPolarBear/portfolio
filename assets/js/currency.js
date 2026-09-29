(() => {
  const form = document.getElementById("currency-form");
  const amountInput = document.getElementById("currency-amount");
  const fromSelect = document.getElementById("currency-from");
  const toSelect = document.getElementById("currency-to");
  const swapButton = document.getElementById("currency-swap");
  const status = document.getElementById("currency-status");
  const details = document.getElementById("currency-details");
  const rateOutput = document.getElementById("currency-rate");
  const resultOutput = document.getElementById("currency-result");

  if (!form || !amountInput || !fromSelect || !toSelect || !swapButton || !status || !details || !rateOutput || !resultOutput) return;

  const setStatus = (message, isError = false) => {
    status.textContent = message;
    status.classList.toggle("text-danger", isError);
  };

  const formatAmount = (amount, currency) => new Intl.NumberFormat("en", { style: "currency", currency, maximumFractionDigits: 2 }).format(amount);

  swapButton.addEventListener("click", () => {
    [fromSelect.value, toSelect.value] = [toSelect.value, fromSelect.value];
    details.hidden = true;
    setStatus("");
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const amount = Number(amountInput.value);
    const from = fromSelect.value;
    const to = toSelect.value;

    if (!Number.isFinite(amount) || amount < 0) {
      details.hidden = true;
      setStatus("Enter a valid amount.", true);
      return;
    }

    details.hidden = true;
    setStatus("Loading...");

    try {
      const rate = from === to ? 1 : (await (async () => {
        const response = await fetch(`https://api.frankfurter.dev/v2/rate/${from.toLowerCase()}/${to.toLowerCase()}`);
        if (!response.ok) throw new Error("Rate request failed");
        const data = await response.json();
        if (!Number.isFinite(data.rate)) throw new Error("Rate data missing");
        return data.rate;
      })());

      rateOutput.textContent = `1 ${from} = ${rate.toFixed(4)} ${to}`;
      resultOutput.textContent = formatAmount(amount * rate, to);
      setStatus("");
      details.hidden = false;
    } catch {
      details.hidden = true;
      setStatus("Unable to load exchange rates.", true);
    }
  });
})();
