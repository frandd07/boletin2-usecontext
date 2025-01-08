import React, { createContext, useContext, useState } from 'react';

const NotificationContext = createContext();

export function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (message) => {
    setNotifications((prevNotifications) => [...prevNotifications, message]);
  };

  const removeNotification = (index) => {
    setNotifications((prevNotifications) => prevNotifications.filter((_, i) => i !== index));
  };

  return (
    <NotificationContext.Provider value={{ notifications, addNotification, removeNotification }}>
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotifications() {
  return useContext(NotificationContext);
}

function NotificationList() {
  const { notifications, removeNotification } = useNotifications();

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', backgroundColor: 'lightgray', padding: '10px', zIndex: 1000 }}>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index} style={{ marginBottom: '5px' }}>
            {notification}
            <button onClick={() => removeNotification(index)} style={{ marginLeft: '10px' }}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Ejercicio6() {
  const { addNotification } = useNotifications();
  const [input, setInput] = useState('');

  const handleAddNotification = () => {
    if (input.trim()) {
      addNotification(input);
      setInput('');
    }
  };

  const handleAddDefaultNotification = () => {
    addNotification('Producto agregado al carrito');
  };

  return (
    <div>
      <h1>Ejercicio 6: Notificaciones Globales</h1>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Escribe tu notificación"
      />
      <button onClick={handleAddNotification}>
        Agregar Notificación
      </button>

      <button onClick={handleAddDefaultNotification}>
        Producto agregado al carrito
      </button>

      <NotificationList />
    </div>
  );
}
