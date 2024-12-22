const weatherElement = document.getElementById("weather");
const apiKey = 'd50f398aa84340a5d664df76734dbf09';

function displayWeather(data) {
    const { name, main, weather: weatherInfo } = data;
    const description = weatherInfo[0].description;
    const temp = main.temp;
    const feelsLike = main.feels_like;

    weatherElement.innerHTML = `
        <h2>Weather in ${name}</h2>
        <p>${description.toUpperCase()}</p>
        <p>Temperature: ${temp}°C</p>
        <p>Feels Like: ${feelsLike}°C</p>
    `;
}

if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        const { latitude, longitude } = position.coords;
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => displayWeather(data))
            .catch(error => {
                weatherElement.innerHTML = "Error fetching weather data.";
                console.error(error);
            });
    }, function(error) {
        weatherElement.innerHTML = "Error fetching location.";
        console.error(error);
    });
} else {
    weatherElement.innerHTML = "Geolocation is not supported by this browser.";
}
