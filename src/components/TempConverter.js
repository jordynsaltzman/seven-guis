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
    <div>
      <p className="subtitle">Temperature Converter</p>
      <label>
        {" "}
        Celcius:
        <input type="text" value={degC} onChange={handleCelciusInput} />{" "}
      </label>
      <label>
        Fahrenheit:
        <input type="text" value={degF} onChange={handleFahrenheitInput} />
      </label>
    </div>
  );
};

export default TempConverter;
