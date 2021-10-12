import React from "react";
import './WeatherInfo.css';
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import FormattedDate from './FormattedDate';

export default function WeatherInfo(props) {
    return (
        <div className="weatherInfo">
        <h1>{props.data.city}</h1>
        <ul className="currently">
            <li>
        <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">
        {props.data.description}
            </li>
        </ul>
        <div className="row mt-3">
        <div className="col-6"> 
        <div className="clearfix">
            <div className="float-left">
        <WeatherIcon code={props.data.icon} size={55}/>
            </div>
            <div className="float-left">
        <WeatherTemperature celsius={props.data.temperature} />
            </div>
        </div>
        </div>
        <div className="col-6">
            <ul className="conditions">
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