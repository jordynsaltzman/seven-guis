import { useState, useEffect } from "react";

const FlightBooker = () => {
  const [flightOption, setFlightOption] = useState("one-way flight");
  const [departureDate, setDepartureDate] = useState("04.28.2019");
  const [submittedData, setSubmittedData] = useState({
    depart: "",
    return: "",
    flight: "",
  });
  const [invalidDepartDate, setInvalidDepartDate] = useState(false);
  const [returnDate, setReturnDate] = useState("04.28.2019");
  const [invalidReturnDate, setInvalidReturnDate] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState();
  const [displayMessage, setDisplayMessage] = useState(false);

  const handleChange = (event) => {
    setFlightOption(event.target.value);
  };

  const handleDepartureChange = (event) => {
    setDepartureDate(event.target.value);
  };

  const handleReturnChange = (event) => {
    setReturnDate(event.target.value);
  };

  const handleBookFlight = (e) => {
    setDisplayMessage(true);
    setSubmittedData({
      depart: departureDate,
      return: returnDate,
      flight: flightOption,
    });
    e.preventDefault();
    setDepartureDate("");
    setReturnDate("");
  };

  useEffect(() => {
    if (
      (departureDate && isNaN(Date.parse(departureDate))) ||
      (departureDate.length !== 10 && departureDate.length > 0)
    ) {
      setInvalidDepartDate(true);
    } else {
      setInvalidDepartDate(false);
    }

    if (
      (returnDate && isNaN(Date.parse(returnDate))) ||
      (returnDate.length !== 10 && returnDate.length > 0)
    ) {
      setInvalidReturnDate(true);
    } else {
      setInvalidReturnDate(false);
    }

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
        if (departureDate.substring(0, 2) > returnDate.substring(0, 2)) {
          setBtnDisabled(true);
        } else if (departureDate.substring(0, 2) < returnDate.substring(0, 2)) {
          setBtnDisabled(false);
        } else {
          if (departureDate.substring(3, 5) > returnDate.substring(3, 5)) {
            setBtnDisabled(true);
          } else if (
            departureDate.substring(3, 5) <= returnDate.substring(3, 5)
          ) {
            setBtnDisabled(false);
          }
        }
      }
    }
  }, [departureDate, returnDate, flightOption]);

  return (
    <div className="card">
      <p className="subtitle">Flight Booker</p>

      <form onSubmit={handleBookFlight} className="flight-input-container">
        <select value={flightOption} onChange={handleChange}>
          <option value="one-way flight">one-way flight</option>
          <option value="return flight">return flight</option>
        </select>
        <input
          value={departureDate}
          onChange={handleDepartureChange}
          style={{ backgroundColor: invalidDepartDate ? "red" : "white" }}
        />
        <input
          disabled={flightOption === "one-way flight"}
          value={returnDate}
          onChange={handleReturnChange}
          style={{ backgroundColor: invalidReturnDate ? "red" : "white" }}
        />
        <input
          disabled={btnDisabled || invalidDepartDate || invalidReturnDate}
          className={btnDisabled ? "disabled-button" : "button"}
          type="submit"
          value="Book"
        />
      </form>
      {displayMessage ? (
        <p className="success-msg">
          You have booked a{" "}
          {submittedData.flight === "return flight"
            ? "round trip flight on "
            : "one-way flight on "}
          {submittedData.depart}
          {submittedData.flight === "return flight"
            ? ", returning on " + submittedData.return + "."
            : null}
        </p>
      ) : null}
    </div>
  );
};

export default FlightBooker;
