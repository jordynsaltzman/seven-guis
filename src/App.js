import {useState} from "react";
import Counter from "./components/Counter";
import TempConverter from "./components/TempConverter";
import FlightBooker from "./components/FlightBooker";
import Timer from "./components/Timer";

function App() {

  return (
    <div className="App">
      <p className="title">7 GUIs Challenge</p>
      <Counter/>
      <TempConverter/>
      <FlightBooker/>
      <Timer/>
    </div>
  );
}

export default App;
