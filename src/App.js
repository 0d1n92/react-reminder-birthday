import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  return <>
  <main>
  <div className="section container">
  <h3>{"compiono gli anni " + data.length}</h3>
     <List people={data}></List> 
  </div>
  </main>
  </>;
}

export default App;
