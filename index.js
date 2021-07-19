import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  var [nombre, setNome] = useState("");
  var [fecha, setData] = useState("");
  var [edad, setInt] = useState("");

  function enviar(evt) {
    console.log("Nombre:", nombre);
    console.log("Fecha:", fecha);
    console.log("Edad:", edad);
  }

  return (
    <div>
      <h1>Formulario</h1>
      <p>
        Nombre:
        <input
          placeholder="Nombre"
          onChange={(evt) => setNome(evt.target.value)}
        />
      </p>
      <p>
        Fecha:
        <input
          placeholder="Apellido"
          onChange={(evt) => setData(evt.target.value)}
        />
      </p>
      <p>
        Edad:
        <input
          placeholder="Correo"
          onChange={(evt) => setInt(evt.target.value)}
        />
      </p>
<p>
        Edad:
        <input
          placeholder="Numero Telefonico"
          onChange={(evt) => setInt(evt.target.value)}
        />
      </p>
      <button onClick={enviar}>Registrarse</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
