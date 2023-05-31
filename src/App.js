import React from "react";
import './App.css';
import Weather from "./Weather";


export default function App() {
  return (
    <div className="App">
      <div className="container">
         <h1>Weather App</h1>
         <Weather defaultCity="Nairobi"/>
         
      <footer>
        Coded by agnes and open-sourced at <a href="https://github.com/agnesimbs/react-weather-app">Github</a> 
        </footer></div>
     
    </div>
  );
}


