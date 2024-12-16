import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('es'); 

  const changeLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'es' ? 'en' : 'es'));
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}


export function useLanguage() {
  return useContext(LanguageContext);
}

export default function Ejercicio3() {
    const { language, changeLanguage } = useLanguage();
  
    return (
      <div>
        <h1>Ejercicio 3: Cambiar idioma</h1>
        <h5>{language === 'es' ? 'Hola' : 'Hello'}</h5>
        <button onClick={changeLanguage}>
          {language === 'es' ? 'Cambiar Idioma' : 'Change Language'}
        </button>
      </div>
    );
  }
