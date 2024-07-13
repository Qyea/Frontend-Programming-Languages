import React, { useEffect, useState } from "react";
import { withUserData } from "../hocs/withUserData";

export const Form = ({
  initialName = "",
  initialAge = "",
  initialSurname = "",
  onSubmit,
}) => {
  const [name, setName] = useState(initialName);
  const [age, setAge] = useState(initialAge);
  const [surname, setSurname] = useState(initialSurname);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleSurnameChange = (e) => {
    setSurname(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      name,
      age,
      surname,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="name" onChange={handleNameChange} />
      <input name="age" placeholder="age" onChange={handleAgeChange} />
      <input
        name="surname"
        placeholder="surname"
        onChange={handleSurnameChange}
      />
      <button type="submit" onClick={handleSubmit}>
        Save
      </button>
    </form>
  );
};

export default withUserData(Form);
