import React,{useState} from "react";
import axios from "axios";
import "./Weather.css";
import WeatherForecast from "./WeatherForecast";

import WeatherInfo from "./WeatherInfo";

export default function Weather(props){
    const [city, setCity]=useState(props.defaultCity);
    
    const [weatherData, setWeatherData]=useState({ready:false});
    function handleResponse(response){
        
        console.log(response.data);
        setWeatherData({
            ready:true,
            city:response.data.name,
            date:new Date(response.data.dt * 1000),
            temperature:response.data.main.temp,
            wind:response.data.wind.speed,
            humidity:response.data.main.humidity,
            description:response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            coordinates:response.data.coord,
           

        });
        console.log(setWeatherData.date);
        
        
    }
    function search(){
    const apiKey="b400ae3b711a616262d18b0ca2cbe78f";
    let searchCity=city;
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    }

    function handleSubmit(event){
        event.preventDefault();
        search();

    }

    function handleCityChange(event){
        setCity(event.target.value);

    }
    if (weatherData.ready){
        return(
            <div className="Weather">
                <form onSubmit={handleSubmit}>
                   <div className="row">
                    <div className="col-9">
                        <input
                         type="search"
                         placeholder="Enter a city.."
                         className="form-control"
                         autoFocus="on"
                         onChange={handleCityChange}
                        />
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className="btn btn-primary w-100"
                        />
                    </div>
                   </div>
                
                </form>
                <WeatherInfo data={weatherData}/>
                <WeatherForecast coordinates={weatherData.coordinates}/>

                </div>
        )

    }
    else{
    search();

    return "loading..";

    }




    
    
}
