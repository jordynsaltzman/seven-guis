import {useState} from "react";

const Counter = () => {

  const [count, setCount] = useState(0)
  
  const increaseCount = () => {
    setCount(count + 1)
  }

  return (
    <div>
        <p className="subtitle">Counter</p>
        <input type="text" readOnly={true} value={count}/>
        <button onClick={increaseCount}>Count</button>
    </div>
  );
}

export default Counter;