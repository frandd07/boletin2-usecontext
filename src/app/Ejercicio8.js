import React, { createContext, useState, useContext } from "react";

const ContextoCarga = createContext();

function ProveedorCarga({ children }) {
  const [cargando, setCargando] = useState(false);

  const iniciarCarga = () => setCargando(true);
  const detenerCarga = () => setCargando(false);

  return (
    <ContextoCarga.Provider value={{ cargando, iniciarCarga, detenerCarga }}>
      {children}
    </ContextoCarga.Provider>
  );
}

function Spinner() {
  const { cargando } = useContext(ContextoCarga);

  return (
    cargando && (
      <div>
        <div>🔄</div>
        <p>Cargando...</p>
      </div>
    )
  );
}

function SimulacionCarga() {
  const { iniciarCarga, detenerCarga } = useContext(ContextoCarga);

  const cargarDatos = () => {
    iniciarCarga();
    setTimeout(() => {
      detenerCarga();
    }, 2000);
  };

  return (
    <div>
      <h1>Ejercicio 8: Simulación de Carga de Datos</h1>
      <button onClick={cargarDatos}>Cargar Datos</button>
    </div>
  );
}

function Ejercicio8() {
  return (
    <ProveedorCarga>
      <SimulacionCarga />
      <Spinner />
    </ProveedorCarga>
  );
}

export default Ejercicio8;
