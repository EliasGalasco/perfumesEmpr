import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

function InputForm(props) {
return (
    <div className="d-flex justify-content-center" style={{ display: "flex", marginBottom: 8 }}>
        <label className="me-2 fw-bolder" style={{ width: "150px"}}>{props.label}</label>
        <input style={{ width: "550px"}}
        value={props.value}
        name={props.name}
        type="text"
        onChange={props.onInputChange}
    />
    </div>
);
}

export default function CartForm(props) {
  const [userData, setUserData] = useState({
    Nombre: "",
    Pais: "",
    Ciudad: "",
    Correo: "",
    Telefono: "",
    Direccion: "",
    Text: ""
  });


  function onInputChange(evt) {
    //1. Que input se modifico
    const field = evt.target.name;
    const value = evt.target.value;

    //2 Modificacion del State
    //2 Copiar el state con una variable 
    const newState = { ...userData };

    //modificar la propiedad correspondiente
    newState[field] = value;

    //3. Aplicar el Set State
    setUserData(newState);
  }

  function clearData() {
    setUserData({
        Nombre: "",
        Pais: '',
        Ciudad: '',
        Correo: "",
        Telefono: "",
        Direccion: '',
        Text: ''
    });
  }

  function onSubmit(evt) {
    evt.preventDefault();
    props.onSubmit(userData);
  }

  let arrayUserData = Object.keys(userData);

  return (
    <form onSubmit={onSubmit}>
    {arrayUserData.map((field, index) => (
        <InputForm
            name={field}
            value={userData[field]}
            onInputChange={onInputChange}
            label={field}
            key={index} 
        />
    ))}
    <div className="d-flex justify-content-center">
        <Button 
            disabled={
            !(
                userData.Nombre !== "" &&
                userData.Pais !== "" &&
                userData.Ciudad !== ""&&
                userData.Correo !== "" &&
                userData.Telefono !== "" &&
                userData.Direccion !== ""&&
                userData.Text !== ""
            )
            }
            type="submit"
        >
            Finalizar Compra
        </Button>
    <Button onClick={clearData}>Vaciar Datos</Button>
    </div>
    </form>
);
}
