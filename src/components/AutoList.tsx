import { useEffect, useState } from "react";
import { Auto } from "../types/Auto";
import AutoCard from "./AutoCard";
import { useAutoContext } from "../context/AutoContext";
import autosData from "../data/autos.json";
import '../styles/AutoList.css';


export const AutoList: React.FC = () => {
    const { autos, setAutos } = useAutoContext();
    const [colorFiltro, setColorFiltro ] = useState<string>("");

    useEffect(() => {
        setAutos(autosData);
    }, [setAutos]);

    const autosFiltrados = colorFiltro ? autos.filter(auto => auto.color.toLowerCase() === colorFiltro.toLowerCase()) : autos;

    return (
        <>
        <div className="filterContainer">
            <p>Filtrar por color</p>
            <select value={colorFiltro} onChange={(e) => setColorFiltro(e.target.value)}>
              <option value="">Todos</option>
              <option value="rojo">Rojo</option>
              <option value="azul">Azul</option>
              <option value="blanco">Blanco</option>
              <option value="gris">Gris</option>
              <option value="negro">Negro</option>
            </select>
          </div>
        <table>
            <thead className="tableHeader">
                <tr>
                    <th>Marca</th>
                    <th>Modelo</th>
                    <th>Año</th>
                    <th>Color</th>
                    <th>Precio</th>
                    <th>Acción</th>
                </tr>
            </thead>
            <tbody className="tableAuto">
                {autosFiltrados.map((auto: Auto) => (
                    <AutoCard key={auto.id} auto={auto} />
                ))}
            </tbody>
        </table>
        </>
    );
}
