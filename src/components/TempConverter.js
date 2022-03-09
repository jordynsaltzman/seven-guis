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
      <input type="text" value={degC} onChange={handleCelciusInput} />
      <input type="text" value={degF} onChange={handleFahrenheitInput} />
    </div>
  );
};

export default TempConverter;
