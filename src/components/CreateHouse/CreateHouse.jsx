import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createHouse } from "../../redux/actions";

// CUIDADOOOO. SI O SI FUNCTIONAL COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR HOOKS!
// Recordar que los hooks de React deben utilizarse de la forma "React.useState", "React.useEffect", etc.
// Los tests no van a reconocer la ejecución haciendo destructuring de estos métodos.
const CreateHouse = () => {
  //States
  const [input, setInput] = React.useState({
    name: "",
    region: "",
    words: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createHouse(input));
  };

  const inputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          onChange={inputChange}
          value={input.name}
        />
        <label>Region: </label>
        <input
          type="text"
          name="region"
          onChange={inputChange}
          value={input.region}
        />
        <label>Words: </label>
        <input
          type="text"
          name="words"
          onChange={inputChange}
          value={input.words}
        />
        <button type="submit" onClick={() => dispatch(createHouse(input))}>
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateHouse;
