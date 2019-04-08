import React from 'react'
import Day from "./Day";
import {FaClock,FaTint} from "react-icons/fa";
import Condition from "./Condition";

const Weather=({data})=>{
    const listItems = data.map((number) =>
     <div className="col-md-6">
       <div className="card">
         <div className="card-body">
           <Day curr={number.date}></Day>
           <div className="row">
             <div className="col-md-6">
              <p>
               <FaClock/> {number.date.split(" ")[1]}
              </p>
             </div>
             <div className="col-md-6">
             <p><FaTint/> {number.humidity}</p>
             </div>
           </div>
           <Condition nature={number.condition} key={number.id}/>
           <p> Temparature : {number.temparature} </p>
         </div>
       </div>
       <br/>
     </div>
   );
   return (
     <div className="container-fluid">
       <div className="row">
       {listItems}
     </div>
     </div>
   );
 }
 export default Weather;