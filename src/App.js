import React, {Component} from 'react'
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'

function App() {
  return (
    <div className="App">
      Søgefeldt <input />
      <hr />
      <label>
        Kategorier:
        <p/ >
        Tegneserier <input type="checkbox" name="CartoonCheckbox"/>
        <p/ >
        Litteratur <input type="checkbox" name="LitteratureCheckbox"/>
        <p/ >
        Roman <input type="checkbox" name="NovelCheckbox"/>
      </label>
      <hr />

      Sorter efter:
        <p/ >
        <label>
          <input type="radio" name="myRadio" value="Price" />
          Pris
        </label>
        <label>
          <input type="radio" name="myRadio" value="Year" />
          Årstal
        </label>

      {/* <Greet></Greet>
      <Welcome></Welcome> 
      <Hello></Hello>*/
      /* <Greet name="Cathrine" nickname="Cat"/>
      <Greet name="Casper" nickname="Sidor"/>
      <Greet name="Christer" nickname="Basse"/> */}
    </div>
    
  );
}

export default App;
