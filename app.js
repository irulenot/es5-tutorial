"use strict";

searchButton.addEventListener('click', searchWeather);

function searchWeather() {
  var cityName = searchCity.value;
  // use trim to account for blank spaces
  if(cityName.trim().length == 0){
    return alert('Please enter a City Name');
  }
  var http = new XMLHttpRequest();
  var apiKey = '426eee677455fbc5010c84a10a0007c4'
  // url key, must add http:// to start
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName;
  var method = 'GET';

  http.open(method, url);
  http.onreadystatechange = function() {
    if(http.readyState == XMLHttpRequest.DONE && http.status == 200){
      // handles what will be done if request works
    }else if (http.readyState === XMLHttpRequest.DONE) {
      alert('Something went wrong!');
    }
  };

}
