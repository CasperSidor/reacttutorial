import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'

function App() {
  return (
    <div className="App">
      {/* <Greet></Greet>
      <Welcome></Welcome> 
      <Hello></Hello>*/}
      <Greet name="Cathrine" nickname="Cat"/>
      <Greet name="Casper" nickname="Sidor"/>
      <Greet name="Christer" nickname="Basse"/>
    </div>
  );
}

export default App;
