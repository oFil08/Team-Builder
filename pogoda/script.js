var cityInput = document.getElementById("cityInput");
var weather = document.getElementById("weather");
const apiKey = 'd50f398aa84340a5d664df76734dbf09';

async function fetchWeather() {

    var city = cityInput.value.trim();
    if (!city) {
        alert("Please enter a city name");
        return;
    }

    weather.innerHTML = "Loading...";

    try {
        var response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);

        if (!response.ok) {
            weather.innerHTML = "City not found or invalid input.";
            return;
        }

        var data = await response.json();

        displayWeather(data);
    } catch (error) {
        weather.innerHTML = "Error fetching weather data.";
    }
}

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
