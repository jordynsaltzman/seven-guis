import { useState, useEffect } from "react";
import React from "react";

const CRUD = () => {
  const emptyPerson = {
    id: "",
    name: "",
    surname: "",
  };

  const [people, setPeople] = useState([]);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [person, setPerson] = useState(emptyPerson);
  const [selectedPerson, setSelectedPerson] = useState(emptyPerson);
  const [prefix, setPrefix] = useState();
  const [enableCreateBtn, setEnableCreateBtn] = useState(true);

  const handlePrefixChange = (e) => {
    setPrefix(e.target.value);
  };

  const handleNameChange = (e, key) => {
    if (key === "name") {
      setName(e.target.value);
    } else if (key === "surname") {
      setSurname(e.target.value);
    }

    if (!selectedPerson.id) {
      setPerson({ ...person, [e.target.name]: e.target.value });
    } else {
      setSelectedPerson({ ...selectedPerson, [e.target.name]: e.target.value });
    }
  };

  useEffect(() => {
    if (selectedPerson.name) {
      setEnableCreateBtn(false);
    } else setEnableCreateBtn(true);
  }, [selectedPerson, name, surname, enableCreateBtn]);

  const handleSelectPerson = (person) => {
    if (selectedPerson === person) {
      setSelectedPerson(emptyPerson);
      setName("");
      setSurname("");
      setEnableCreateBtn(true);
    } else {
      setSelectedPerson(person);
      setName(person.name);
      setSurname(person.surname);
    }
  };

  const createPerson = (person) => {
    person.id = Math.floor(Math.random() * 100);
    setPeople([...people, person]);
    setPerson(emptyPerson);
    clearPerson();
  };

  const clearPerson = () => {
    setSelectedPerson(emptyPerson);
    setName("");
    setSurname("");
  };

  const updatePerson = (selectedPerson) => {
    setPeople(
      people.map((person) =>
        person.id === selectedPerson.id
          ? { name: name, surname: surname }
          : person
      )
    );
    clearPerson();
  };

  const deletePerson = (id) => {
    setPeople(people.filter((person) => person.id !== id));
    clearPerson();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    let person = {
      name: name,
      surname: surname,
    };

    if (!person.name || !person.surname) return;
    createPerson(person);
  };

  return (
    <div className="card">
      <p className="subtitle">CRUD</p>
      <div>
        <label className="name-label">
          Filter Prefix:
          <input
            value={prefix}
            onChange={handlePrefixChange}
            style={{ width: 50 }}
          />
        </label>
      </div>
      <div className="listbox-container"
      >
        <div className="listbox">
          {people
            .filter((person) => {
              if (prefix != undefined) {
                return person.surname
                  .toLowerCase()
                  .startsWith(prefix.toLowerCase());
              } else {
                return person;
              }
            })
            .map((person) => (
              <div
                key={person.id}
                className="list-item"
                onClick={() => handleSelectPerson(person)}
                style={{
                  backgroundColor:
                    selectedPerson === person ? "#98B4aa" : "#fff",
                  color: selectedPerson === person ? "#fff" : "#000",
                }}
              >
                <p>
                  {person.surname}, {person.name}
                </p>
              </div>
            ))}
        </div>

        <form onSubmit={handleFormSubmit} className="form-container">
          <div className="name-input-container">
            <label className="name-label">Name:</label>
            <input
              className="name-input"
              type="text"
              name="name"
              style={{ width: 100 }}
              onChange={(e) => handleNameChange(e, "name")}
              value={name}
            />
          </div>
          <div className="name-input-container">
            <label className="name-label">Surname:</label>
            <input
              className="name-input"
              type="text"
              name="surname"
              style={{ width: 100 }}
              onChange={(e) => handleNameChange(e, "surname")}
              value={surname}
            />
          </div>
          <div className="button-div">
            <button
              className={!enableCreateBtn ? "disabled-button-crud" : "button-crud"}
              disabled={!enableCreateBtn}
              name="create"
              type="submit"
            >
              Create
            </button>
            <button
              className={enableCreateBtn ? "disabled-button-crud" : "button-crud"}
              disabled={enableCreateBtn}
              name="update"
              type="submit"
              onClick={() => updatePerson(selectedPerson)}
            >
              Update
            </button>
            <button
              className={enableCreateBtn ? "disabled-button-crud" : "button-crud"}
              disabled={enableCreateBtn}
              name="delete"
              onClick={() => deletePerson(selectedPerson.id)}
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CRUD;
