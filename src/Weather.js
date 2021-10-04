import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import './Weather.css';

export default function Weather(props) {
const [loaded, setLoaded] = useState(false);
const [weatherData, setWeatherData] = useState(null);
const [city, setCity] = useState(props.defaultCity)
function handleResponse(response) {
setWeatherData({
    temperature: response.data.main.temp,
    city: response.data.name,
    coords: response.data.coord,
    humidity: response.data.main.humidity,
    wind: response.data.wind.speed,
    icon: response.data.weather[0].icon,
    date: new Date(response.data.dt * 1000)
});
setLoaded(true);
}
    
function search() {
    const apiKey = "942c45d046a76a07395c03e29f82e284";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event) {
event.preventDefault();
search();
}

function handleCityChange(event) {
setCity(event.target.value);
}

if (loaded) {
return (
    <div className="weather">
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-9">
                    <input
                        type="search"
                        placeholder="Search for a city..."
                        className="form-control"
                        autoFocus="on"
                        onChange={handleCityChange}
                    />
                </div>
                <div className="col-3">
                    <input 
                        type="submit" 
                        value="Search" 
                        className="btn btn-primary w-100"/>
                </div>
            </div>
        </form>
        <WeatherInfo data={weatherData}/>
        <WeatherForecast coords={weatherData.coords}/>
        </div>
    );
} else {
    search();
    return "Loading...";
    }
}
      
