import React, {Component} from 'react'
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'

function App() {
  return (
    <div className="App">
      <Message />
      {/* <Greet></Greet>
      <Welcome></Welcome> 
      <Hello></Hello>*/}
      {/* <Greet name="Cathrine" nickname="Cat"/>
      <Greet name="Casper" nickname="Sidor"/>
      <Greet name="Christer" nickname="Basse"/> */}
    </div>
    
  );
}

export default App;
