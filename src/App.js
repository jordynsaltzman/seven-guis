import Counter from "./components/Counter";
import TempConverter from "./components/TempConverter";
import FlightBooker from "./components/FlightBooker";
import Timer from "./components/Timer";
import CRUD from "./components/CRUD";

import "./components/styles.css";

function App() {
  return (
    <div className="App">
      <div className="heading-container">
        <h1 className="title">7GUIs Challenge</h1>
        <div className="nav-links">
          <h2 className="subtitle">Counter</h2>
          <h2 className="subtitle">Temperature Converter</h2>
          <h2 className="subtitle">Flight Booker</h2>
          <h2 className="subtitle">Timer</h2>
          <h2 className="subtitle">CRUD</h2>
        </div>
      </div>

      <Counter />
      <TempConverter />
      <FlightBooker />
      <Timer />
      <CRUD />
    </div>
  );
}

export default App;
