const apiKey = "APİ GİRİNİZ";

document.getElementById("getWeatherBtn").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value.trim();
  if (!city) return alert("Lütfen bir şehir adı girin.");

const apiKey = "d1b981f7a5df1bfa6ac7c6e1e8c3be1c";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=tr&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("Şehir bulunamadı.");
      return response.json();
    })
    .then(data => {
      const weather = `
        <h2>${data.name}</h2>
        <p><strong>${data.weather[0].description}</strong></p>
        <p>Sıcaklık: ${data.main.temp}°C</p>
        <p>Nem: ${data.main.humidity}%</p>
        <p>Rüzgar: ${data.wind.speed} m/s</p>
      `;
      document.getElementById("weatherResult").innerHTML = weather;
    })
    .catch(error => {
      document.getElementById("weatherResult").innerHTML = `<p>${error.message}</p>`;
    });
});
