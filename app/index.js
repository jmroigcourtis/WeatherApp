async function getWeather() {
    const city = document.getElementById('city').value;
    let url = `https://api.weatherapi.com/v1/current.json?key=40db190f395f458385d125137243012&q=${city}&aqi=no`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        const weatherInfo = document.getElementById('weather-info');
        if (data.error) {
            weatherInfo.innerHTML = `<p>Error: ${data.error.message}</p>`;
        } else {
            weatherInfo.innerHTML = `
                <h2>Weather in ${data.location.name}</h2>
                <p>Temperature: ${data.current.temp_c}°C</p>
                <p>Condition: ${data.current.condition.text}</p>
                <img src="${data.current.condition.icon}" alt="Weather icon">
            `;
        }
    } catch (error) {
        console.error(error);
        const weatherInfo = document.getElementById('weather-info');
        weatherInfo.innerHTML = `<p>Error: Unable to fetch weather data</p>`;
    }
    if (data.error) {
        weatherInfo.innerHTML = `<p>Error: ${data.error.message}</p>`;
    } else {
        weatherInfo.innerHTML = `
            <h2>Weather in ${data.location.name}</h2>
            <p>Temperature: ${data.current.temp_c}°C</p>
            <p>Condition: ${data.current.condition.text}</p>
            <img src="${data.current.condition.icon}" alt="Weather icon">
        `;
    }
}




