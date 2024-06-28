import { createContext, useState } from "react";
import { useContext } from "react";

const SettingsContext = createContext();

export default function SettingsContextProvider({ children }) {
  const [dark, setDark] = useState("light");

  return (
    <SettingsContext.Provider value={{ dark, setDark }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettingsContext() {
  const context = useContext(SettingsContext);

  if (!context) {
    throw new Error(
      "useSettingsContext should be used inside SettingsContext provider"
    );
  }

  return context;
}
