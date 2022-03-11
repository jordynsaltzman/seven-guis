import { useState } from "react";
import Counter from "./components/Counter";
import TempConverter from "./components/TempConverter";
import FlightBooker from "./components/FlightBooker";
import Timer from "./components/Timer";
import CRUD from "./components/CRUD";

import "./components/styles.css";

function App() {
  const [activeCard, setActiveCard] = useState("counter");

  const cards = [
    {
      name: "counter",
      component: <Counter />,
    },
    {
      name: "temperature converter",
      component: <TempConverter />,
    },
    {
      name: "flight booker",
      component: <FlightBooker />,
    },
    {
      name: "timer",
      component: <Timer />,
    },
    {
      name: "crud",
      component: <CRUD />,
    },
  ];
  return (
    <div className="App">
      <div className="heading-container">
        <h1 className="title">7GUIs Challenge</h1>
        <div className="nav-links">
          {cards.map((card) => (
            <div onClick={() => setActiveCard(card.name)} key={card.name}>
              <h2
                className="subtitle"
                style={{ color: card.name === activeCard ? "#74959A" : "#3a3b3c" }}
              >
                {card.name}
              </h2>
            </div>
          ))}
        </div>
      </div>

      {activeCard === "counter" ? (
        <Counter />
      ) : activeCard === "temperature converter" ? (
        <TempConverter />
      ) : activeCard === "timer" ? (
        <Timer />
      ) : activeCard === "flight booker" ? (
        <FlightBooker />
      ) : activeCard === "crud" ? (
        <CRUD />
      ) : null}
    </div>
  );
}

export default App;
