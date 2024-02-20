import React from 'react'
import './MeteoApp.css'

import search_icon from "../Assets/search.png";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";
import humidity_icon from "../Assets/humidity.png";
ng 
const MeteoApp = () => {

    let api_key = "8452fbaf1edeff933b7d88f99dea4b4b";

    const search = async () => {
     const element = document.getElementsByClassName("cityInput")
     if(element[0].value==="")
     {
         return 0;
     }
     let url = `https://api.openweathermap.org/data/2.5/weather?${element[0].value}&units=metric&appid=${api_key}`;
     let response = await fetch(url);
     let data = await response.json();
     const humidity = document.getElementsByClassName("humidity-percent");
     const wind = document.getElementsByClassName("wind-rate");
     const temperature = document.getElementsByClassName("weather-temp");
     const location = document.getElementsByClassName("weather-location");


     humidity[0].innerHTML = data.main.humidity;
     wind[0].innerHTML = data.wind.speed;
     temperature[0].innerHTML = data.main.temp;
     location[0].innerHTML = data.name;
 }


  return (
    <div>
        <div className="container">
            <div className="top-bar">
                <input type="text" className="cityInput" placeholder="search" />
                <div className="search-icon" onClick={() => {search()}}>
                    <img src={search_icon} alt="" />
                </div>
            </div>
            <div className="weather-image">
                <img src={cloud_icon} alt="" />
            </div>
            <div className="weather-temp">24°c</div>
            <div className="weather-location">Ouagadougou</div>
            <div className="data-container">
                <div className="element">
                    <img src={humidity_icon} alt="" className="icon"/>
                    <div className="data">
                        <div className="humidity-percent">40%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind_icon} alt="" className="icon"/>
                    <div className="data">
                        <div className="humidity-percent">18 km/h</div>
                        <div className="text">Wind speed</div>
                    </div>
                </div>
            </div>

        </div>
       
        
    </div>
  )
}

export default MeteoApp