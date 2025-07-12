import { AutoList } from "./components/AutoList"
import { Favoritos } from "./components/Favoritos"
import { AutoProvider } from "./context/AutoContext"
import './App.css'
export const App = () => {

  return (
    <AutoProvider>
      <div className="appContainer">
        <div>
          <h1>Lista de Autos</h1>
          <AutoList/>
        </div>
        <div>
          <h2>Favoritos</h2>
          <Favoritos />
        </div>
      </div>
    </AutoProvider>
  )
}

