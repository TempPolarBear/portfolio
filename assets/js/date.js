(() => {
  const citySelect = document.getElementById("date-city");
  const dayOutput = document.getElementById("date-day");
  const dateOutput = document.getElementById("date-current");
  const timeOutput = document.getElementById("date-time");

  if (!citySelect || !dayOutput || !dateOutput || !timeOutput) return;

  const updateTime = () => {
    const timezone = citySelect.value;
    const now = new Date();
    dayOutput.textContent = new Intl.DateTimeFormat("en-GB", { weekday: "long", timeZone: timezone }).format(now);
    dateOutput.textContent = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: timezone }).format(now);
    timeOutput.textContent = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit", timeZone: timezone }).format(now);
  };

  citySelect.addEventListener("change", updateTime);
  updateTime();
  window.setInterval(updateTime, 1000);
})();
