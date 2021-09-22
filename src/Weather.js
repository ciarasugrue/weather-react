import React, { useState } from "react";
import FormattedDate from './FormattedDate';
import axios from "axios";
import './Weather.css';

export default function Weather(props) {
const [loaded, setLoaded] = useState(false);
const [weather, setWeather] = useState(null);
function handleResponse(response) {
setWeather({
    temperature: response.data.main.temp,
    city: response.data.name,
    humidity: response.data.main.humidity,
    wind: response.data.wind.speed,
    date: new Date(response.data.dt * 1000)
});
setLoaded(true);
}
    
if (loaded) {
return (
    <div className="weather">
        <h1>{weather.city}</h1>
        <h2>
            <FormattedDate date={weather.date} />
        </h2>
        <form>
            <div className="row">
                <div className="col-9">
                    <input
                        type="search"
                        placeholder="Search for a city..."
                        className="form-control"
                        autoFocus="on"
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
    <div className="row">
        <div className="col-6">
        <div className="float-left">
            <span className="temperature">
                {Math.round(weather.temperature)}
            </span>
            <span className="unit">°C</span>
        </div>
        </div>
        <div className="col-6">
            <ul>
                <li>
                    Wind: {weather.wind} km/hr
                </li>
                <li>
                    Humidity: {weather.humidity}%
                </li>
            </ul>
        </div>
        </div>
        </div>
    );
} else {
    const apiKey = "eb6eea518ef4b4002fbbf1c966d1b147";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);  

    return "Loading...";
    }
}
      
