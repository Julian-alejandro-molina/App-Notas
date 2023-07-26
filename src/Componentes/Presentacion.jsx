import { Link } from 'react-router-dom';
import'../Estilos/Estilospresentacion.css';
import notas from "../Imagenes/notas.png";
export const Presentacion=()=>{
 return(
    <>
       <div className="contenedor-inicio">
         <button className='logo-apicacion'><Link to={'/inicioapp'} ><img className='notas' src={notas} alt="" /></Link></button>       
        </div>
    </>
 )
}