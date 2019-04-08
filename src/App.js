import React, { Component } from "react";
import Weather from "./Weather";
import './App.css'

console.log(process.env)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Weather : [],
      city : '',
      condition :''
     };
   
  }
  getlocation = (fn) => {
    
    if (navigator.geolocation) {
      console.log("Geo Location supported");
      return navigator.geolocation.getCurrentPosition(
        pos => {
          fn(pos)
        },
        err => {
          console.log(err);
        }
      );
    } else {
      console.log("Geo Location not supported");
    }
  };
 
  componentDidMount() {
   this.getlocation((position)=>{
    const url = `http://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
    fetch(url)
      .then(d => d.json())
      .then(Response => {
        console.log(Response)
        let temp = [];
        for (var i=0;i<Response.list.length;i+=8){
         temp.push({
          temparature : Response.list[i].main.temp,
          date : Response.list[i].dt_txt,
          humidity : Response.list[i].main.humidity,
          condition : Response.list[i].weather[0].main,
          id : Response.list[i].weather[0].id
         })
        }
        this.setState({
          Weather : temp,
          city : Response.city.name,
         })
      });
   })
  }

  render() {
    return (
    <div className="container text-center">
      <h1 className="text-center"> Weather Forecast </h1>
      <br/>
      <h4>City : {this.state.city} </h4>
      <hr/>
      <Weather data = {this.state.Weather}/>
    </div>
    );
  }
}

export default App;