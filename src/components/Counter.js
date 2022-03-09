import { useState } from "react";
import "./styles.css"

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="card">
      <p className="subtitle">Counter</p>
      <div className="input-container">
        <input type="text" readOnly={true} value={count} />
        <button onClick={increaseCount} className="button">Count</button>
      </div>
    </div>
  );
};



export default Counter;
