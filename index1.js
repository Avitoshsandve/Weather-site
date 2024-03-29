const input = document.querySelector("input");
const btn = document.getElementById("btn");
const icon = document.querySelector(".icon");
const weather = document.querySelector(".weather");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");

btn.addEventListener("click", () => {
    let city = input.value;
    getWeather(city);
});

function getWeather(city) {
    console.log(city);
    const apiKey = 'e81776f6b5d8a03758dfac1205f3814e'; 
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const iconcode = data.weather[0].icon;
        icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${iconcode}.png" alt="weather icon">`;
        const weatherCity = data.name;
        const weatherCountry = data.sys.country;
        weather.innerHTML = `${weatherCity}, ${weatherCountry}`;
        let weatherTemp = data.main.temp;
        weatherTemp -= 273.15; 
        const temp = weatherTemp.toFixed(2); 
        temperature.innerHTML = `${temp}°C`;
        const weatherDescription = data.weather[0].description;
        description.innerHTML = weatherDescription;
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });
}
