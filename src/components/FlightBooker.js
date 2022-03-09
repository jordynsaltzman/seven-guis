import { useState, useEffect } from "react";

const FlightBooker = () => {
  const [flightOption, setFlightOption] = useState("one-way flight");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [btnDisabled, setBtnDisabled] = useState();

  const handleChange = (event) => {
    setFlightOption(event.target.value);
  };

  //   const dateReg = new RegExp('/^\d{2}[.]\d{2}\1\d{4}$/');
  {/* {"22.03.1981".match(dateReg) ? <p>YES</p> : <p>NO</p>} */}

  const handleDepartureChange = (event) => {
    const departDate = event.target.value;
    setDepartureDate(departDate);
  };

  const handleReturnChange = (event) => {
    setReturnDate(event.target.value);
  };

  useEffect(() => {
    console.log(departureDate.slice(departureDate.length - 4));
    if (flightOption === "return flight") {
      if (
        departureDate.slice(departureDate.length - 4) >
        returnDate.slice(returnDate.length - 4)
      ) {
        setBtnDisabled(true);
      } else if (
        departureDate.slice(departureDate.length - 4) <
        returnDate.slice(returnDate.length - 4)
      ) {
        setBtnDisabled(false);
      } else {
        if (departureDate.substring(3, 5) > returnDate.substring(3, 5)) {
          setBtnDisabled(true);
        } else if (departureDate.substring(3, 5) < returnDate.substring(3, 5)) {
          setBtnDisabled(false);
        } else {
          if (departureDate.substring(0, 2) > returnDate.substring(0, 2)) {
            setBtnDisabled(true);
          } else if (
            departureDate.substring(0, 2) <= returnDate.substring(0, 2)
          ) {
            setBtnDisabled(false);
          } 
        }
      }
    }
  }, [departureDate, returnDate, flightOption]);

  return (
    <div>
      
      <p className="subtitle">Flight Booker</p>
      <select value={flightOption} onChange={handleChange}>
        <option value="one-way flight">one-way flight</option>
        <option value="return flight">return flight</option>
      </select>
      <input value={departureDate} onChange={handleDepartureChange} />
      <input
        disabled={flightOption === "one-way flight"}
        value={returnDate}
        onChange={handleReturnChange}
      />
      <button disabled={btnDisabled}>Book</button>
    </div>
  );
};

export default FlightBooker;
