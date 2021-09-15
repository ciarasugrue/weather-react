import React, { useState } from "react";
import './Weather.css';
import axios from "axios";

export default function Weather() {
const [loaded, setLoaded] = useState(false);
const [weather, setWeather] = useState(null);
function handleResponse(response) {
setWeather(response.data.main.temp);
setLoaded(true);
}
    
if (loaded) {
return (
    <div className="weather">
        <h1>Lyon</h1>
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
        <div className="float-left">
            <span className="temperature">
                {weather}
            </span>
        </div>
    </div>
    );
    } else {
    const apiKey = "eb6eea518ef4b4002fbbf1c966d1b147";
    let city = "Lyon";
    const apiUrl = `api.openweathermap.org/data/2.5/weather?q=${city}}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);  

    return "Loading...";
    }
}
      
