import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import Axios from "axios";

export default function WeatherForecast(props) {
let [loaded, setLoaded] = useState(false);
let [forecast, setForecast] = useState(null);

function handleResponse(response) {
setForecast(response.data.daily);
setLoaded(true);
}

if (loaded) {
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">{forecast[0].dt}</div>
                    <WeatherIcon code={forecast[0].weather[0].icon} size={36}/>
                    <div className="WeatherForecast-temps">
                   <span className="WeatherForecast-temp-max">{Math.round(forecast[0].temp.max)}°</span>
                   <span className="WeatherForecast-temp-min">{Math.round(forecast[0].temp.min)}°</span></div>
                </div>
            </div>
        </div>
    );
} else {
    let apiKey = "942c45d046a76a07395c03e29f82e284"
    let longitude = props.coords.lon;
    let latitude = props.coords.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    
    Axios.get(apiUrl).then(handleResponse);
    
    return null;
}
}