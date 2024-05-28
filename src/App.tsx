import { useEffect } from "react";
import SearchForm from "./components/SearchForm"
import { useCriptoStore } from "./store"
import CryptoPrice from "./components/CryptoPrice";

function App() {

  const fetchCriptos = useCriptoStore((state)=> state.fetchCriptos);

  useEffect(()=> {
    fetchCriptos();
  },[])

  return (
    <>
     <div className="container">
        <h1 className="app-title">Cotizador de <span>Criptomonedas</span></h1>

          <div className="content">
            <SearchForm/>
            <CryptoPrice/>
          </div>
     </div>
    </>
  )
}

export default App
