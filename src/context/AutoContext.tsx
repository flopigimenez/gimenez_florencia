import { createContext, useContext, useState, ReactNode,  } from "react";
import { Auto } from "../types/Auto";

interface AutoContextType {
  autos: Auto[];
  setAutos: (autos: Auto[]) => void;
  favoritos: Auto[]; 
  agregarFavorito: (auto: Auto) => void; 
  quitarFavorito: (autoId: number) => void;
}

const AutoContext = createContext<AutoContextType | undefined>(undefined);

export const useAutoContext = () => {
  const context = useContext(AutoContext);
  if (!context) throw new Error("useAutoContext debe usarse dentro de AutoProvider");
  return context;
};

export const AutoProvider = ({ children }: { children: ReactNode }) => {
  const [autos, setAutos] = useState<Auto[]>([]);
  const [favoritos, setFavoritos] = useState<Auto[]>([]);

  const agregarFavorito = (auto: Auto) => {
    setFavoritos((prevFavoritos) => prevFavoritos.find(f => f.id === auto.id) ? prevFavoritos : [...prevFavoritos, auto]);
  }

  const quitarFavorito = (autoId: number) => {
    setFavoritos((prevFavoritos) => prevFavoritos.filter(auto => auto.id !== autoId));
  };

  return (
    <AutoContext.Provider value={{ autos, setAutos, favoritos, agregarFavorito, quitarFavorito }}>
      {children}
    </AutoContext.Provider>
  );
};