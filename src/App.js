import React from 'react';
import './App.css';
import BabyNamesData from "./babyNamesData.json"
import ShowNames from './ShowNames.js';

function App() {
  return (
    <div className="App">
      <ShowNames BabyNames={BabyNamesData}/>      
    </div>
  );
}

export default App;
