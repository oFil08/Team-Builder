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
    console.log("Checking if geolocation is available...");
    
    // Check if geolocation is available
    if (navigator.geolocation) {
        console.log("Geolocation is available in this browser.");
        
        navigator.geolocation.getCurrentPosition(
            async function(position) {
                console.log("Location fetched:", position.coords);  // Log the coordinates for debugging
                
                const { latitude, longitude } = position.coords;
                console.log(`Fetching weather for coordinates: Latitude - ${latitude}, Longitude - ${longitude}`);
                
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`);
                
                if (!response.ok) {
                    console.error("Error fetching weather data:", response.status, response.statusText);
                    weather.innerHTML = "Error fetching weather data.";
                    return;
                }

                const data = await response.json();
                displayWeather(data);
            },
            function(error) {
                console.error("Geolocation error:", error);  // Log error details

                if (error.code === error.PERMISSION_DENIED) {
                    weather.innerHTML = "Location permission denied.";
                } else if (error.code === error.POSITION_UNAVAILABLE) {
                    weather.innerHTML = "Unable to determine location.";
                } else if (error.code === error.TIMEOUT) {
                    weather.innerHTML = "Geolocation request timed out.";
                } else {
                    weather.innerHTML = "Error fetching location.";
                }
            }
        );
    } else {
        console.error("Geolocation is not supported by this browser.");
        weather.innerHTML = "Geolocation is not supported by this browser.";
    }
});
