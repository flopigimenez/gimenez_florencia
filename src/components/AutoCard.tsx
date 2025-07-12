import { useAutoContext } from "../context/AutoContext";
import { Auto } from "../types/Auto";
import '../styles/AutoCard.css';

interface AutoProps {
  auto: Auto;
}

const AutoCard: React.FC<AutoProps> = ({ auto }) => {
  const { agregarFavorito } = useAutoContext();

  return (
    <tr {...auto.anio < 2020 ? { className: "autoAntiguo" } : {}}>
      <td>{auto.marca}</td>
      <td>{auto.modelo}</td>
      <td>{auto.anio}</td>
      <td>{auto.color}</td>
      <td>${auto.precio}</td>
      <td>
        <button
          className="btnAgregarFavorito"
          onClick={() => {
            agregarFavorito(auto);
          }}>
          Agregar a favoritos
        </button>
      </td>
    </tr>
  )
}

export default AutoCard;
