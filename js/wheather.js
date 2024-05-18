// API call
const baseUrl = "https://api.openweathermap.org/data/2.5/onecall?";
const lat = "lat=51.17&";
const lon = "lon=4.46&";
const apiOptions = "units=metric&exclude=minutely,alerts&lang=nl&"; // juiste units, geen data per minuut, geen alerts en taal in nederlands
const apiKey = "appid=dbb76c5d98d5dbafcb94441c6a10236e";
const fullUrl = baseUrl + lat + lon + apiOptions + apiKey;

fetch(fullUrl)
    .then((response) => response.json())
    .then((data) => {

        // Icons base url + extension

        const weatherWrapperElement = document.getElementById("weather-wrapper");

        if (weatherWrapperElement) {
            const iconBaseUrl = "https://openweathermap.org/img/wn/";

            const currentTemp = Math.round(data.current.temp);

            weatherWrapperElement.style.backgroundImage = "url('https://mdbgo.io/ascensus/mdb-advanced/img/" + data.current.weather[0].main.toLowerCase() + ".gif')"

            weatherWrapperElement.innerHTML = `
                <!-- Main current data -->
                <div class="card-header p-4 border-0">
                    <div class="text-center mb-3">
                        <p class="h2 mb-1">Neona</p>
                        <p class="mb-1">${data.current.weather[0].description}</p>
                        <p class="display-1 mb-1">${currentTemp}°C</p>
                        <span>Druk: ${data.current.pressure}</span>
                        <span class="mx-2">|</span>
                        <span>Vochtigheid: ${data.current.humidity}</span>
                    </div>
                </div>
    
                <!-- Hourly forecast -->
                <div class="card-body p-4 border-top border-bottom mb-2">
                    <div class="row text-center">
                        <div class="col-2">
                            <strong class="d-block mb-2">Now</strong>
                            <img id="wrapper-icon-hour-now" src="${iconBaseUrl + data.hourly[0].weather[0].icon}.png" alt="weather-icon-now" />
                            <strong class="d-block">${data.hourly[0].temp}°</strong>
                        </div>
                        <div class="col-2">
                            <strong class="d-block mb-2">Now</strong>
                            <img id="wrapper-icon-hour-now" src="${iconBaseUrl + data.hourly[1].weather[0].icon}.png" alt="weather-icon-hour-1" />
                            <strong class="d-block">${data.hourly[1].temp}°</strong>
                        </div>
                        <div class="col-2">
                            <strong class="d-block mb-2">Now</strong>
                            <img id="wrapper-icon-hour-now" src="${iconBaseUrl + data.hourly[2].weather[0].icon}.png" alt="weather-icon-hour-2" />
                            <strong class="d-block">${data.hourly[2].temp}°</strong>
                        </div>
                        <div class="col-2">
                            <strong class="d-block mb-2">Now</strong>
                            <img id="wrapper-icon-hour-now" src="${iconBaseUrl + data.hourly[3].weather[0].icon}.png" alt="weather-icon-hour-3" />
                            <strong class="d-block">${data.hourly[3].temp}°</strong>
                        </div>
                        <div class="col-2">
                            <strong class="d-block mb-2">Now</strong>
                            <img id="wrapper-icon-hour-now" src="${iconBaseUrl + data.hourly[4].weather[0].icon}.png" alt="weather-icon-hour-4" />
                            <strong class="d-block">${data.hourly[4].temp}°</strong>
                        </div>
                        <div class="col-2">
                            <strong class="d-block mb-2">Now</strong>
                            <img id="wrapper-icon-hour-now" src="${iconBaseUrl + data.hourly[5].weather[0].icon}.png" alt="weather-icon-hour-5" />
                            <strong class="d-block">${data.hourly[5].temp}°</strong>
                        </div>
                    </div>
                </div>
    
                <!-- Daily forecast -->
                <div class="card-body px-5">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <strong>Vandaag</strong>
                        </div>
                        <div class="col-lg-2 text-center">
                            <img src="${iconBaseUrl + data.current.weather[0].icon}.png" alt="icon-temp-today" />
                        </div>
                        <div class="col-lg-4 text-end">
                            <span>${currentTemp}°</span>
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <strong>Morgen</strong>
                        </div>
                        <div class="col-lg-2 text-center">
                            <img src="${iconBaseUrl + data.daily[0].weather[0].icon}.png" alt="icon-temp-tomorrow" />
                        </div>
                        <div class="col-lg-4 text-end">
                            <span>${Math.round(data.daily[0].temp.day)}°</span>
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <strong>Overmorgen</strong>
                        </div>
                        <div class="col-lg-2 text-center">
                            <img src="${iconBaseUrl + data.daily[1].weather[0].icon}.png" alt="icon-temp-day-after-tomorrow" />
                        </div>
                        <div class="col-lg-4 text-end">
                            <span>${Math.round(data.daily[1].temp.day)}°</span>
                        </div>
                    </div>
                </div>
            `;
        }
    });