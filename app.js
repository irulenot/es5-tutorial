"use strict";

// init.js availiable as called before app.js, thus can access searchButton
searchButton.addEventListener('click', searchWeather);

// searchWeatheris hoisted up by JS
function searchWeather() {
  console.log(searchCity.value);
}
