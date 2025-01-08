import React, { createContext, useContext, useState, useEffect } from 'react';

const PermissionsContext = createContext();

export function PermissionsProvider({ children }) {
  const [permissions, setPermissions] = useState({ admin: false, canEdit: false });
  const [loading, setLoading] = useState(true);

  const fetchPermissions = async () => {
    setLoading(true);
    try {
      const response = await new Promise((resolve) =>
        setTimeout(() => resolve({ admin: true, canEdit: false }), 1000)
      );
      setPermissions(response);
    } catch (error) {
      console.error('Error al obtener permisos', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPermissions();
  }, []);

  return (
    <PermissionsContext.Provider value={{ permissions, fetchPermissions, loading }}>
      {children}
    </PermissionsContext.Provider>
  );
}

export function usePermissions() {
  return useContext(PermissionsContext);
}

function AdminPanel() {
  const { permissions } = usePermissions();

  if (!permissions.admin) {
    return <p>No tienes permisos para acceder a esta sección.</p>;
  }

  return (
    <div>
      <h2>Panel de Administración</h2>
      <p>Bienvenido al panel de administración.</p>
    </div>
  );
}

export default function Ejercicio5() {
  const { permissions, fetchPermissions, loading } = usePermissions();

  return (
    <div>
      <h1>Ejercicio 5: Control de Permisos de Usuario</h1>
      
      {loading ? (
        <p>Cargando permisos...</p>
      ) : (
        <>
          <AdminPanel />
          <button onClick={fetchPermissions}>Actualizar permisos</button>
        </>
      )}
    </div>
  );
}
