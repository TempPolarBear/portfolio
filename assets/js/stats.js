
const startDate = new Date(2026, 1, 23);

const dateElement = document.querySelector("#current-date");
const daysElement = document.querySelector("#learning-days");
const hoursElement = document.querySelector("#learning-hours");
const minutesElement = document.querySelector("#learning-minutes");

function updateLearningStats() {
  const now = new Date();

  const formattedDate = now.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const difference = Math.max(0, now - startDate);

  const days = Math.floor(difference / 86400000);
  const hours = Math.floor(difference / 3600000) % 24;
  const minutes = Math.floor(difference / 60000) % 60;

  dateElement.textContent = formattedDate;
  daysElement.textContent = days;
  hoursElement.textContent = String(hours).padStart(2, "0");
  minutesElement.textContent = String(minutes).padStart(2, "0");
}

updateLearningStats();

const statsIntervalId = setInterval(updateLearningStats, 60000);
