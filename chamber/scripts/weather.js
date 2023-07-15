const LAT = "43.826";
const LONG = "-111.7897";
const APIKEY = "9c0bee6f434d831ee24ba541b382e9d4";

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
let weatherAPIURL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LONG}&appid=${APIKEY}&units=metric`;
let requestParams = {

}

fetch(weatherAPIURL)
.then(data=> {return data.json();})
.then(response => {
    weatherStatus = document.getElementById("weatherStatus");
    weatherDetails = document.getElementById("weatherDetails");
    icon = document.getElementById("weatherIcon");
    temp = document.getElementById("temp");
    windspeed = document.getElementById("windspeed");

    weatherStatus.innerHTML = response.weather[0].main;
    weatherDetails.innerHTML = response.weather[0].description;
    temp.innerHTML = response.main.temp;
    windspeed.innerHTML = response.wind.speed;

    const tempVal = response.main.temp;
    const windSpeedVal = response.wind.speed;
    const windchillElement = document.getElementById("windchill");

    //Calculate windchill, if conditions are met 

    if(tempVal >= 10 || windSpeedVal < 4.82) {
        windchillElement.innerText = "N/A";
    } else {
        windchillElement.innerText = Math.round(13.12 + (0.6215 * tempVal) - (11.37 * windSpeedVal**0.16) + (0.3965 * tempVal * windSpeedVal**0.16)) + "° F";
}
})



