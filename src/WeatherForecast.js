import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import Axios from "axios";

export default function WeatherForecast(props) {
function handleResponse(response) {
console.log(response.data);
}

let apiKey = "eb6eea518ef4b4002fbbf1c966d1b147"
let longitude = props.coords.lon;
let latitude = props.coords.lat;
let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

Axios.get(apiUrl).then(handleResponse);
return (
    <div className="WeatherForecast">
        <div className="row">
            <div className="col">
                <div className="WeatherForecast-day">Thurs</div>
                <WeatherIcon code="01d" size={36}/>
                <div className="WeatherForecast-temps">
               <span className="WeatherForecast-temp-max">19°</span>
               <span className="WeatherForecast-temp-min">10°</span></div>
            </div>
        </div>
    </div>
);
}