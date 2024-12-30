async function getWeather(city) {
    let city = document.getElementById('city');
    console.log(city)
    let url = `https://localhost:3000/api/weather/${city}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error fetching weather data: ${response.statusText}`);
        }
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.error(error);
        throw new Error(`Failed to fetch weather data: ${error.message}`);
    }
}