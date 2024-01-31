import React from 'react'
import "./Weather.css";
import search_icon from "../Assets/search.jpeg"
import cloud_icon from "../Assets/cloud.png"
import humidity_icon from "../Assets/humidity.png"
import wind_icon from "../Assets/wind.png"
const Weather = () => {
  let api_Key="548e0259be92a9d20a09a3132df1e317";

  const search = async ()=>{
    const element = document.getElementsByClassName("cityInput");
    if(element[0].value==="")
    {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_Key}`;
    let response = await fetch(url);
    let data = await response.json();

    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-rate");
    const temp = document.getElementsByClassName("weather-temp");
    const location=document.getElementsByClassName("weather-location");

    humidity[0].innerHTML = data.main.humidity+" %";
    wind[0].innerHTML=data.wind.speed+"km/h";
    temp[0].innerHTML=data.main.temp+"℃";
    location[0].innerHTML= data.name;
    
  }
  return (
    <div className='container'>
        <div className='top-bar'>
            <input type='text' className='cityInput' placeholder='Search'>
            </input>
            <div className='search-icon' onClick={()=>{search()}}>
              <img src={search_icon} className='search-icon1' alt=''></img>
            </div>
        </div>
        <div className='weather-image'>
          <img src={cloud_icon}  alt='' className='cloud_icon'></img>
        </div>
        <div className='weather-temp'>24℃</div>
        <div className='weather-location'>Mumbai</div>
        <div className='data-container'>
          <div className='element'>
            <img src={humidity_icon} className='icon' alt=''></img>
            <div className='data'>
              <div className='humidity-percent'>64%</div>
              <div className='text'>Humidity</div>
            </div>
          </div>
          <div className='element'>
            <img src={wind_icon} className='icon' alt=''></img>
            <div className='data'>
              <div className='wind-rate'>6 km/h</div>
              <div className='text'>Wind</div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Weather