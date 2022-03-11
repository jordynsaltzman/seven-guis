import { useState } from "react";

const TempConverter = () => {
  const [degC, setDegC] = useState();
  const [degF, setDegF] = useState();

  const handleCelciusInput = (event) => {
    if (!isNaN(+event.target.value)) {
      setDegC(event.target.value);
      setDegF(event.target.value * (9 / 5) + 32);
    }
  };

  const handleFahrenheitInput = (event) => {
    if (!isNaN(+event.target.value)) {
      setDegF(event.target.value);
      setDegC((event.target.value - 32) * (5 / 9));
    }
  };

  return (
    <div className="card">
      <p className="subtitle">Temperature Converter</p>
      <div className="temp-input-container">
        <label className="temp-label">
          Celcius:
          <input
            type="text"
            value={degC}
            onChange={handleCelciusInput}
            className="temp-input"
          />
        </label>
        <p className="equals-sign">=</p>
        <label className="temp-label">
          Fahrenheit:
          <input
            type="text"
            value={degF}
            onChange={handleFahrenheitInput}
            className="temp-input"
          />
        </label>
      </div>
    </div>
  );
};

export default TempConverter;
