(() => {
  const form = document.getElementById("weather-form");
  const cityInput = document.getElementById("weather-city");
  const status = document.getElementById("weather-status");
  const details = document.getElementById("weather-details");

  if (!form || !cityInput || !status || !details) return;

  const fields = {
    location: document.getElementById("weather-location"),
    temperature: document.getElementById("weather-temperature"),
    condition: document.getElementById("weather-condition"),
    feelsLike: document.getElementById("weather-feels-like"),
    humidity: document.getElementById("weather-humidity"),
    wind: document.getElementById("weather-wind"),
  };

  const weatherDescriptions = {
    0: "Clear sky", 1: "Mainly clear", 2: "Partly cloudy", 3: "Overcast",
    45: "Fog", 48: "Rime fog", 51: "Light drizzle", 53: "Drizzle", 55: "Heavy drizzle",
    56: "Freezing drizzle", 57: "Heavy freezing drizzle", 61: "Light rain", 63: "Rain",
    65: "Heavy rain", 66: "Freezing rain", 67: "Heavy freezing rain", 71: "Light snow",
    73: "Snow", 75: "Heavy snow", 77: "Snow grains", 80: "Rain showers",
    81: "Heavy rain showers", 82: "Violent rain showers", 85: "Snow showers",
    86: "Heavy snow showers", 95: "Thunderstorm", 96: "Thunderstorm with hail", 99: "Severe thunderstorm with hail",
  };

  const setStatus = (message, isError = false) => {
    status.textContent = message;
    status.classList.toggle("text-danger", isError);
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const city = cityInput.value.trim();
    if (!city) {
      details.hidden = true;
      setStatus("Enter a city name.", true);
      return;
    }

    details.hidden = true;
    setStatus("Loading...");

    try {
      const locationResponse = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`);
      if (!locationResponse.ok) throw new Error("Location request failed");
      const locationData = await locationResponse.json();
      const location = locationData.results?.[0];
      if (!location) {
        setStatus("City not found.", true);
        return;
      }

      const currentFields = "temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m";
      const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=${currentFields}`);
      if (!weatherResponse.ok) throw new Error("Weather request failed");
      const weatherData = await weatherResponse.json();
      const current = weatherData.current;
      if (!current) throw new Error("Weather data missing");

      fields.location.textContent = [location.name, location.country].filter(Boolean).join(", ");
      fields.temperature.textContent = `${current.temperature_2m} °C`;
      fields.condition.textContent = weatherDescriptions[current.weather_code] || "Current conditions unavailable";
      fields.feelsLike.textContent = `${current.apparent_temperature} °C`;
      fields.humidity.textContent = `${current.relative_humidity_2m}%`;
      fields.wind.textContent = `${current.wind_speed_10m} km/h`;
      setStatus("");
      details.hidden = false;
    } catch {
      details.hidden = true;
      setStatus("Unable to load weather.", true);
    }
  });
})();
