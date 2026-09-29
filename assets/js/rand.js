(() => {
  const numberFields = document.getElementById("random-number-fields");
  const wordFields = document.getElementById("random-words-fields");
  const modeButtons = document.querySelectorAll("[data-random-mode]");
  const fromInput = document.getElementById("random-from");
  const toInput = document.getElementById("random-to");
  const wordsInput = document.getElementById("random-words");
  const result = document.getElementById("random-result");
  const generateButton = document.getElementById("random-generate");

  if (!numberFields || !wordFields || !fromInput || !toInput || !wordsInput || !result || !generateButton) return;

  let mode = "number";

  const setResult = (message, isError = false) => {
    result.textContent = message;
    result.classList.toggle("text-danger", isError);
  };

  const setMode = (nextMode) => {
    mode = nextMode;
    numberFields.classList.toggle("d-none", mode !== "number");
    wordFields.classList.toggle("d-none", mode !== "words");
    modeButtons.forEach((button) => {
      const selected = button.dataset.randomMode === mode;
      button.classList.toggle("btn-primary", selected);
      button.classList.toggle("btn-outline-primary", !selected);
      button.setAttribute("aria-pressed", String(selected));
    });
    setResult("");
  };

  modeButtons.forEach((button) => button.addEventListener("click", () => setMode(button.dataset.randomMode)));

  generateButton.addEventListener("click", () => {
    if (mode === "number") {
      if (!fromInput.value.trim() || !toInput.value.trim()) {
        setResult("Enter both From and To values.", true);
        return;
      }

      const from = Number(fromInput.value);
      const to = Number(toInput.value);

      if (!Number.isInteger(from) || !Number.isInteger(to)) {
        setResult("Enter whole numbers for both fields.", true);
      } else if (from > to) {
        setResult("From must be less than or equal to To.", true);
      } else {
        setResult(String(Math.floor(Math.random() * (to - from + 1)) + from));
      }
      return;
    }

    const values = wordsInput.value.split(",").map((value) => value.trim()).filter(Boolean);
    if (!values.length) {
      setResult("Enter at least one value.", true);
      return;
    }
    setResult(values[Math.floor(Math.random() * values.length)]);
  });
})();
