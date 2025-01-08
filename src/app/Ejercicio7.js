import React, { createContext, useContext, useState } from 'react';

const SettingsContext = createContext();

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
  });

  const updateSetting = (key, value) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [key]: value,
    }));
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSetting }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  return useContext(SettingsContext);
}

function SettingsPage() {
  const { settings, updateSetting } = useSettings();

  const handleToggle = (setting) => {
    updateSetting(setting, !settings[setting]);
  };

  return (
    <div>
      <h1>Ejercicio 7: Configuraciones</h1>
      <div>
        <label>
          <input
            type="checkbox"
            checked={settings.notifications}
            onChange={() => handleToggle('notifications')}
          />
          Habilitar notificaciones
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={settings.darkMode}
            onChange={() => handleToggle('darkMode')}
          />
          Activar modo oscuro
        </label>
      </div>
    </div>
  );
}

export default function Ejercicio7() {
  return (
    <SettingsProvider>
      <SettingsPage />
    </SettingsProvider>
  );
}
