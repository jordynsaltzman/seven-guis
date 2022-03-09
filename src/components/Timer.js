import { useState, useEffect } from "react";

const Timer = () => {
  const [timeElapsed, setTimeElapsed] = useState(0); //in milliseconds
  const [sliderVal, setSliderVal] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setTimeElapsed((timeElapsed) => timeElapsed + 100);
    }, [100]);

    if (timeElapsed >= 100000) {
      setTimeElapsed(0);
    }

    return () => clearTimeout(timer);
  }, [timeElapsed, sliderVal]);

  const handleReset = () => {
    setTimeElapsed(0);
    setSliderVal(0);
  };

  const handleSliderChange = (event) => {
    setTimeElapsed(event.target.value * 100);
    setSliderVal(event.target.value);
  };

  return (
    <div>
      <p className="subtitle">Timer</p>
      <div>
        <p>{timeElapsed / 1000}</p>
        <div
          style={{
            height: 20,
            width: "100%",
            backgroundColor: "#dedede",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          <div
            style={{
              height: "100%",
              width: timeElapsed / 1000 + "%",
              backgroundColor: "red",
              transition: "all 0.1s ease-in-out",
            }}
          ></div>
        </div>
        <input
          type="range"
          min="0"
          max="1000"
          step={0.1}
          value={sliderVal}
          onChange={handleSliderChange}
        />
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
