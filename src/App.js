import {useState} from "react";
import Counter from "./components/Counter";
import TempConverter from "./components/TempConverter";
import FlightBooker from "./components/FlightBooker";

function App() {

  return (
    <div className="App">
      <p className="title">7 GUIs Challenge</p>
      <Counter/>
      <TempConverter/>
      <FlightBooker/>
    </div>
  );
}

export default App;
