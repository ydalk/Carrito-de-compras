import {useState} from 'react'
import './Item.css'

const Item =({nombre, descripcion, imagen, stock, contador}) => {

  const [cantU, setCantU] = useState(stock); 
  const [valor, setValor] = useState("COMPRAR") 
  const [disable, setDisable] = useState(false);
  const [boton, setBoton] = useState('btn');
  
  const handlerButton = ()=>{
   
    if(cantU > 1){
      setCantU(prevState => prevState -1);
      contador()
    }else if( cantU === 1){
      contador()
      setValor("SIN STOCK")
      setCantU("agotado")
      setDisable(true)
      setBoton('btnDis')
    }else{
      setValor("SIN STOCK")
      setDisable(true)
    }
  }

  return (
    <div className='producto' >
      <h3>{nombre}</h3>
      <img src={imagen} alt='{nombre}'></img>
      <p>{descripcion}</p>
      <h5> En stock: <span>{cantU}</span></h5>
      <button className={boton} disabled={disable} onClick={()=>{handlerButton()}}>{valor}</button>
    </div>
  )
}
export default Item;