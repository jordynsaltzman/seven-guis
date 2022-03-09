import { useState, useEffect } from "react";

const Timer = () => {
  const [timeElapsed, setTimeElapsed] = useState(0); // in milliseconds
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setTimeElapsed((timeElapsed) => timeElapsed + 100);
    }, [100]);

    if (timeElapsed / 10 / duration >= 100) {
      setTimeElapsed(0);
    }

    return () => clearTimeout(timer);
  }, [timeElapsed, duration]);

  const handleReset = () => {
    setTimeElapsed(0);
  };

  const handleSliderChange = (event) => {
    setDuration(event.target.value);
  };

  return (
    <div>
      <p className="subtitle">Timer</p>
      <div>
        <p>{!duration || !timeElapsed ? 0 : (timeElapsed / 1000).toFixed(2)}</p>
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
              width:
                !duration || !timeElapsed
                  ? 0
                  : timeElapsed / 10 / duration + "%",
              backgroundColor: "red",
              transition: "all 0.04s ease-in",
            }}
          ></div>
        </div>

        <input
          type="range"
          min="0"
          max="100"
          step={0.1}
          value={duration}
          onChange={handleSliderChange}
        />
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
