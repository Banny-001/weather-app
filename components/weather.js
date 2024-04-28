import React ,{useEffect,useState}from"react";
import  "./weather.css";
//import "./public/assets"
import clear_icon from "./assets/clear_icon.png";
import   cloud_icon from "./assets/cloud_icon.png";
import  drizzle_icon from"./assets/drizzle_icon.png";
import  rain_icon from"./assets/rain_icon.png";
import  snow_icon from"./assets/snow_icon.png";

const WeatherApp  =()=>{

    let api_key="650e1990995ebbf3925169c4b9b00cf3"

    const [wicon,setWicon]=useState(snow_icon)

    const search=async ()=>{
        const element=document.getElementsByClassName("cityInput")
        if (element[0].value===" ")
        {
            return 0;
        }
    
         let url= `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
         let response=  await fetch (url);
         let data= await  response.json();
    
     
    const humidity =document.getElementsByClassName("humidity");
    const wind=document.getElementsByClassName("wind-speed");
    const temp=document.getElementsByClassName("weather-temp") ;
    const london=document.getElementsByClassName("location");

    
    humidity[0].innerHTML=data.main.humidity + " % RH ";
    wind[0].innerHTML= Math.floor(data.wind.speed) +"km/h";
    temp[0].innerHTML= Math.floor(data.main.temp) +"°C";
    london[0].innerHTML=data.name;
    
 
    
    if(data.weather[0].icon==="01n" || data.weather[0].icon==="01d")
    {
        setWicon(snow_icon);
     }
 
     else if (data.weather[0].icon==="02n"|| data.weather[0].icon==="02d")
     {
        setWicon(clear_icon);
     }
     else if(data.weather[0].icon==="03n"|| data.weather[0] .icon==="03d")
       {
        setWicon(drizzle_icon);
       }
       else if( data.weather[0].icon==="04n" || data.weather[0].icon==="04d")
       {
         setWicon(rain_icon);
       }
       else 
       {
        setWicon(cloud_icon);
       }
  }

    return (
        <div className="weather-card">
         <div className="header">
         <input type="text"placeholder="Enter city name"  className="cityInput" ></input>
          <button onClick={()=>{search()}}>search</button>
        </div>
        <div className="body">
            <img src={wicon}></img>
          
         <h1 className="weather-temp">Temp 23°C</h1>
         <h3 className="location">London</h3>
        </div >
        <div className="footer">
            <img src="./humidity.png" className="humidity-img"></img>
         <h5 className="humidity">Humidity  64% RH. </h5>
        < img src="./wind.png"></img>
         <h5 className="wind-speed">Wind 18km/hr</h5>
            
            
         </div>
          
        </div>
       );
     }

     export default WeatherApp;