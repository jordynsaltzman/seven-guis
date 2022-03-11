import { useState, useEffect } from "react";

const Timer = () => {
  const [timeElapsed, setTimeElapsed] = useState(0); // in milliseconds
  const [duration, setDuration] = useState(100);

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
    <div className="card">
      <p className="subtitle">Timer</p>
      <div>
        <p className="seconds">{(timeElapsed / 1000).toFixed(2)} / {duration} seconds</p>
        <div className="time-elapsed-container">
            <p className="elapsed-label">Elapsed Time:</p>
            <div
          style={{
            height: 20,
            width: "100%",
            backgroundColor: "#dedede",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            borderRadius: 3,
            margin: "0px, 10px",
          }}
        >
          <div
            style={{
              height: "100%",
              width:
                !duration || !timeElapsed
                  ? 0
                  : timeElapsed / 10 / duration + "%",
              backgroundColor: "#98B4AA",
              transition: "all 0.04s ease-in",
            }}
          ></div>
        </div></div>
        
        <div style={{display: 'flex', flexDirection: 'row', marginTop: 10, alignItems: 'center', justifyContent: 'space-between'}}>
          <label className="duration-label">
            Duration:
            <input
              type="range"
              min="0"
              max="100"
              step={0.01}
              value={duration}
              onChange={handleSliderChange}
              style={{padding: 0}}
            />
          </label>
          <button onClick={handleReset} className="button">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
