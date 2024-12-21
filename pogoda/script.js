var weather = document.getElementById("weather");
const apiKey = 'd50f398aa84340a5d664df76734dbf09';

function displayWeather(data) {
    const { name, main, weather: weatherInfo } = data;

    if (!weatherInfo || weatherInfo.length === 0) {
        weather.innerHTML = "Weather data unavailable.";
        return;
    }

    const description = weatherInfo[0].description;
    const temp = main.temp;
    const feelsLike = main.feels_like;

    weather.innerHTML = `
        <h2>Pogoda w ${name}</h2>
        <p>${description.toUpperCase()}</p>
        <p>Temperatura powietrza: ${temp}°C</p>
        <p>Temperatura odczuwalna: ${feelsLike}°C</p>
    `;
}

document.addEventListener("DOMContentLoaded", async function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async function(position) {
            const { latitude, longitude } = position.coords;
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`);
            const data = await response.json();
            displayWeather(data);
        }, function(error) {
            weather.innerHTML = "Error fetching location.";
            console.error(error);
        });
    } else {
        weather.innerHTML = "Geolocation is not supported by this browser.";
    }
});
