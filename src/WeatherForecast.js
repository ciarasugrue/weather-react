import React, { useState } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
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
                {forecast.map(function(dailyForecast, index) {
                    if (index < 5) {
                    return (
                        <div className="col" key={index}>
                      <WeatherForecastDay data={dailyForecast}/>  
                </div>
                    );
                }
                })}
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