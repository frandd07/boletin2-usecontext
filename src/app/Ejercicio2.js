import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); 

  const login = (username) => {
    setUser({ username }); 
  };

  const logout = () => {
    setUser(null); 
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext); 
}

export default function Ejercicio2() {
    const { user, login, logout } = useAuth();
    const [username, setUsername] = useState('');
  
    const handleLogin = () => {
      login(username); 
      setUsername(''); 
    };
  
    return (
      <div>
        <h1>Ejercicio 2: Autenticación</h1>
        {!user ? (
          <div>
            <input 
              type="text"
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              placeholder="Ingresa tu nombre de usuario" 
            />
            <button onClick={handleLogin}>Iniciar Sesión</button>
          </div>
        ) : (
          <div>
            <h4>Hola, {user.username}</h4>
            <button onClick={logout}>Cerrar Sesión</button>
          </div>
        )}
      </div>
    );
    
  }
