import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  return <>

  <div className="container">
      <h3>count birthday to day</h3>
  
    {data.map((person)=>{
      console.log(person);
      const {id,name,age,image}= person;
      return <div className="person">  
              <img src={image}></img>
                <h4>{name}</h4>
                <p>{age}</p>
              </div>
    })}
    
  </div>
  </>;
}

export default App;
