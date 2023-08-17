import '../Estilos/confirmacionlogin.css'
import { Link } from 'react-router-dom';
import { Login } from './Login';
export const Confirmacionlogin=({usuarios,contraseñas})=>{
    return(
        <div className='contenedor-confirmar-login'>
            <h1 className='texto'>Inicio de sesión correcto</h1>
            <button className='confirmar'><Link to={`/inicioapp/${usuarios}`}>ok</Link></button>
        </div>
    );
}