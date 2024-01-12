function updateWeather() {
    // Simulate random weather values
    const temperature = getRandomValue(20, 30).toFixed(2);
    const humidity = getRandomValue(40, 70).toFixed(2);
    const lightIntensity = getRandomValue(200, 800).toFixed(2);
    const atmosphericPressure = getRandomValue(980, 1010).toFixed(2);

    // Display the simulated values
    document.getElementById("temperature").innerText = `Temperature: ${temperature} °C`;
    document.getElementById("humidity").innerText = `Humidity: ${humidity} %`;
    document.getElementById("light").innerText = `Light Intensity: ${lightIntensity} lux`;
    document.getElementById("pressure").innerText = `Atmospheric Pressure: ${atmosphericPressure} hPa`;
}

function getRandomValue(min, max) {
    return Math.random() * (max - min) + min;
}
