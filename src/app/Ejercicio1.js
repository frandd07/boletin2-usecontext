import React, { createContext, useContext, useState, useEffect } from 'react';

const TemaContext = createContext();

export function TemaProvider({ children }) {
  const [tema, setTema] = useState('light');

  useEffect(() => {
    document.body.style.backgroundColor = tema === 'light' ? '#fff' : '#333';
    document.body.style.color = tema === 'light' ? '#000' : '#fff';
  }, [tema]);

  return (
    <TemaContext.Provider value={{ tema, setTema }}>
      {children}
    </TemaContext.Provider>
  );
}


export default function Ejercicio1() {  
  const { tema, setTema } = useContext(TemaContext);

  return (
    <div>
      <h1>Ejercicio 1: Cambiar de tema</h1>
      <button onClick={() => setTema(tema === 'light' ? 'dark' : 'light')}>Cambiar Tema</button>
    </div>
  );
}
