import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createHouse } from "../../redux/actions";
import "./CreateHouse.css";

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
    <div className="createHouse-container">
      <div className="containerHouseCreate">
        <h2 className="tituloContainer">Create House</h2>
        <p className="textContainer">
          En este apartado podrás crear tu propia casa de{" "}
          <strong>Game of Thrones</strong>, solo necesitas llenar los campos
          requeridos a continuación
        </p>
        <form className="createHouse-form" onSubmit={(e) => handleSubmit(e)}>
          <label className="label-form">Name: </label>
          <input
            type="text"
            name="name"
            onChange={inputChange}
            autoComplete={false}
            value={input.name}
            className="input-form"
            placeholder="Name"
          />
          <br />
          <label className="label-form">Region: </label>
          <input
            type="text"
            name="region"
            onChange={inputChange}
            value={input.region}
            className="input-form"
            placeholder="Region"
          />
          <br />
          <label className="label-form">Words: </label>
          <input
            type="text"
            name="words"
            onChange={inputChange}
            value={input.words}
            className="input-form"
            placeholder="Words"
          />
          <br />
          <button
            className="button-createForm"
            type="submit"
            onClick={() => dispatch(createHouse(input))}
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateHouse;
