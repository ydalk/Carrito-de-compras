import Cabecera from "./components/Cabecera";
import Listado from "./components/Listado";
import { useState } from "react";

function App() {

  const[compras, setCompras] = useState(0);

  const conteoCompras = ()=>{
    setCompras(compras + 1);
  }
  
  return (
    <div className="App">
      <Cabecera compras = {compras}/>
      <Listado
        contador = {conteoCompras}
      />
    </div>
  );
}

export default App;
