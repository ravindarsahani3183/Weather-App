import React from 'react'
import "./Weather.css";
import search_icon from "../Assets/search.jpeg"
import cloud_icon from "../Assets/cloud.png"
const Weather = () => {
  return (
    <div className='container'>
        <div className='top-bar'>
            <input type='text' className='cityInput' placeholder='Search'>
            </input>
            <div className=''>
              <img src={search_icon} className='search-icon' alt=''></img>
            </div>
        </div>
        <div className='weather-image'>
          <img src={cloud_icon}  alt=''></img>
        </div>
        <div className='weather-temp'>24℃</div>
        <div className='weather-location'>Mumbai</div>
        <div className='data-container'>
          <div className='element'>
            <img className='icon'></img>
            <div className='data'></div>
          </div>
        </div>
    </div>
  )
}

export default Weather