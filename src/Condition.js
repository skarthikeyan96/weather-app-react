import React from 'react'
const Condition = ({nature})=>{
    const weather = [
      {
        name:'Clouds',
        url :`https://cdn1.iconfinder.com/data/icons/weather-icons-6/512/clouds-512.png`
      },
      {
        name : 'sunny',
        url :`https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-partly-cloudy-512.png`
      },
      {
        name : 'Rain',
        url : `https://cdn4.iconfinder.com/data/icons/sunnyday-simple/142/sun_rain-512.png`,
      },
      {
        name : 'snowy',
        url : `https://cdn3.iconfinder.com/data/icons/picons-weather/57/23_snow_blizzard-512.png`
      }
    ] 
  
    return(
    <div>
      {
        weather.map(data=>{
        if(data.name === nature){
         return <img src={data.url}  key={weather.name} id="weather" alt ="weather" className="img img-responsive"/>
        }
      })
      }
    </div>)
  }

  export default Condition;