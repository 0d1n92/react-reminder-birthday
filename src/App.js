import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data);

  return <>
  <main>
  <div className="section container">
  <h3>{"compiono gli anni " + people.length}</h3>
     <List people={people}></List> 
      <button onClick={()=> setPeople([])}>delete</button>
  </div>
  </main>
  </>;
}

export default App;
