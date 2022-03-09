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
//   const dateReg = new RegExp("^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$")
//   console.log(dateReg.test("05.06.1994"))


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
