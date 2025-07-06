const apikey = "08fb3b2a4186c75c979d113514a1e580";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    if (response.status = 404) {
        document.querySelector(".error").style.display = "block";
    }
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
    if (data.weather[0].main == "clouds") {
        weatherIcon.src = "images/clouds.png";
    }
    else if (data.weather[0].main == "clear") {
        weatherIcon.src = "images/clear.png";
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
    }
    else if (data.weather[0].main == "Humidity") {
        weatherIcon.src = "images/humidity.png";
    }
    else if (data.weather[0].main == "Wind") {
        weatherIcon.src = "images/wind.png";
    }
    else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "images/snow.png";
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/Rain.png";
    }
    else if (data.weather[0].main == "mist") {
        weatherIcon.src = "images/mist.png";
    }
    document.querySelector(".weather").style.display = "block";
};
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})



