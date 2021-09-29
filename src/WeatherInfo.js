import React from "react";
import './WeatherInfo.css';
import WeatherIcon from "./WeatherIcon.js"
import FormattedDate from './FormattedDate';

export default function WeatherInfo(props) {
    return (
        <div className="weatherInfo">
        <h1>{props.data.city}</h1>
        <h2>
            <FormattedDate date={props.data.date} />
        </h2>
        <div className="row mt-3">
        <div className="col-6"> 
        <div className="clearfix">
            <div className="float-left">
        <WeatherIcon code={props.data.icon} alt={props.data.description}/>
            </div>
        <div className="float-left">
            <span className="temperature">
                {Math.round(props.data.temperature)}
            </span>
            <span className="unit">°C</span>
        </div>
        </div>
        </div>
        <div className="col-6">
            <ul>
                <li>
                    Wind: {props.data.wind} km/hr
                </li>
                <li>
                    Humidity: {props.data.humidity}%
                </li>
            </ul>
        </div>
        </div>
        </div>
    );
}