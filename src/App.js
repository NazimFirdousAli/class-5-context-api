import React, {useState} from 'react';
import Parent from './Parent.js'
import counterContext from './counterContext.js';
import './App.css';

function App() {

  let counterWithUsestate = useState(0);
  return (

    <counterContext.Provider value = {counterWithUsestate}>
    <div className='App'>
      <h1>Hello world by App js</h1>
      <Parent />
      
    </div>
    </counterContext.Provider>
  );
}

export default App;
