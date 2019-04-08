import React from 'react'
const Day = (props)=>{
    console.log(props)
    const getDay = ()=>{
      const day = new Date(props.curr).getDay();
      if(day === 1) {
        return <span>Monday</span>
      }
      else if(day === 2){
        return <span>Tuesday</span>
      }
      else if(day === 3){
        return <span>Wednesday</span>
      }
      else if(day === 4){
        return <span>Thursday</span>
      }
      else if(day === 5){
        return <span>Friday</span>
      }
      else if(day === 6){
        return <span>Saturday</span>
      }
      else if(day === 0){
        return <span>Sunday</span>
      }
    }
    return(
      <div>
        <h4>{props.curr.split(" ")[0]} - {getDay()}</h4>
        <hr/>
      </div>
    );
  }

export default Day;