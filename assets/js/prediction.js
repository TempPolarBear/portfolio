(() => {
  const button = document.getElementById("prediction-button");
  const result = document.getElementById("prediction-result");

  if (!button || !result) return;

  const predictions = [
    "A small learning step can lead to a useful idea.",
    "A focused task may feel easier than expected today.",
    "A creative solution could appear after a short break.",
    "Your next practice session may reveal something new.",
    "A clear plan can make room for an enjoyable experiment.",
  ];

  button.addEventListener("click", () => {
    result.textContent = predictions[Math.floor(Math.random() * predictions.length)];
  });
})();
