import { useAutoContext } from "../context/AutoContext";
import '../styles/Favoritos.css';

export const Favoritos = () => {
    const { favoritos, quitarFavorito } = useAutoContext();
    return (
        <div>
            {favoritos.map((auto) => (
                <div key={auto.id} className="favoritoCard">
                    {auto.marca} {auto.modelo}
                    <button
                        className="btnQuitar"
                        onClick={() => quitarFavorito(auto.id)}>
                        Quitar
                    </button>
                </div>
            ))}
            {favoritos.length === 0 && <p>No hay autos favoritos</p>}
        </div>
    )
}
