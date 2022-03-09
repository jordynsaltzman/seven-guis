import {useState} from "react";

function App() {

  const [count, setCount] = useState(0)
  
  const increaseCount = () => {
    setCount(count + 1)
    console.log(count)
  }

  return (
    <div className="App">
      <p className="title">7 GUIs Challenge</p>
      <div>
        <p className="subtitle">Counter</p>
        <input type="text" readOnly={true} value={count}/>
        <button onClick={increaseCount}>Count</button>
      </div>
    </div>
  );
}

export default App;
