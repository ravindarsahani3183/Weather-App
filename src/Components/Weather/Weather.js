import React from 'react'
import "./Weather.css";
const Weather = () => {
  return (
    <div className='container'>
        <div className='top-bar'>
            <input type='text' className='cityInput' placeholder='Search'>
            </input>
            <div className='search-icon'>

            </div>
        </div>
    </div>
  )
}

export default Weather