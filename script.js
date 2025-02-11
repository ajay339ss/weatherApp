async function getWeather() {
    const apiKey = "1267407ce43dab8f32b1831981d067af"; // Replace with your API key
    const city = document.getElementById("city").value.trim();

    if (city === "") {
        alert("Please enter a city name.");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("City not found");
        }
        const data = await response.json();

        document.getElementById("city-name").innerText = `Weather in ${data.name}`;
        document.getElementById("temperature").innerText = `Temperature: ${data.main.temp}°C`;
        document.getElementById("description").innerText = `Condition: ${data.weather[0].description}`;

        // 🔥 Call the function to change the background dynamically
        changeBackground(data.weather[0].main);
        console.log(data.weather[0].main)

    } catch (error) {
        alert(error.message);
        console.error(error);
    }
}
function changeBackground(weatherCondition) {
    const body = document.body;

    if (weatherCondition.includes("Clear")) {
        body.style.background = "url('https://i.pinimg.com/736x/a3/30/27/a3302749e28a24458bff4578bbb89c1c.jpg')";
    } else if (weatherCondition.includes("Clouds")) {
        body.style.background = "url('https://i.pinimg.com/736x/ac/1b/16/ac1b163c5579ec8902db821130b8aedc.jpg')";
    } else if (weatherCondition.includes("Rain")) {
        body.style.background = "url('https://i.pinimg.com/736x/73/66/cb/7366cb8bc77029eb061213124e6a428f.jpg')";
    } else if (weatherCondition.includes("Snow")) {
        body.style.background = "url('https://i.pinimg.com/736x/70/0b/26/700b265f99e6a57003582b32a243c1f8.jpg')";
    } else {
        body.style.background = "url('https://i.pinimg.com/736x/6e/d7/04/6ed7047cedf7e09965a3297672d7d7cc.jpg')";
    }

    body.style.backgroundSize = "cover";
}

// Call this function inside getWeather()



