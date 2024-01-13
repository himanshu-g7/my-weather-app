const apiKey = "c6bbf3b3a597a946edbe7fff26756cd5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchBox = document.querySelector(".card .search input");
const searchBtn = document.querySelector(".card .search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "&degC";
        document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
        document.querySelector(".wind").innerHTML = data.wind.speed + " kmph";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "./images/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "./images/clear.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "./images/rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "./images/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "./images/mist.png";
        }

        document.querySelector(".card .weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    onclick = checkWeather(searchBox.value);
});

