import { useEffect, useRef, useState } from 'react';
import '../Estilos/Login.css'
import { Link } from 'react-router-dom';
import { Inicioapp } from './Inicioapp';
import Swal from 'sweetalert2'
import { Confirmacionlogin } from './confirmacionlogin';


 let bandera;
 let mostrarComponente;
//let disabled;
export const Login = () => {
    const [usuario, setUsuario] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [disabled, setDisabled] = useState('');
    const[ver, setVer]=useState();
    const mostrarComponente = ver ? <Confirmacionlogin usuarios={usuario} contraseñas={contraseña} /> : "";
    
    const form = useRef();
    useEffect(() => {

        if (usuario === '' && contraseña === '') {
            setDisabled(true);
            //disabled=true;
            console.log(disabled);
        } else {
            setDisabled(false);
            //disabled=false;
            console.log(disabled);
        }
    }, [usuario, contraseña])



    const login = (usuario, contraseña,bandera) => {
        if (usuario === 'julio-molina@hotmail.es' && contraseña === '123456') {
            bandera=true;
           setVer(bandera)
           

        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
            })
            location.reload();
        }
        
    }
    

    const limpiar = () => {
        document.getElementById('email').value = '';
        document.getElementById('contraseña').value = '';
    }

    return (
        <div className='contenedor-login'>
            
            <div className='contenedor-login-inputs'>
                <h1 className='login'>Login</h1>
                <form action="" className='form' onSubmit={
                    ev => {
                        ev.preventDefault();
                        login(usuario, contraseña);
                        limpiar();
                        //regresar();
                    }
                }>
                    <input
                        name='usuario'
                        type="text"
                        className='usuario'
                        placeholder='email'
                        id='email'
                        onChange={ev => setUsuario(ev.target.value)}
                        
                        />
                    <input
                        name='contraseña'
                        type="text"
                        className='contraseña'
                        placeholder='contraseña'
                        id='contraseña'
                        onChange={ev => setContraseña(ev.target.value)}
                        
                        />
                    <p>sdasdasd</p>
                    <button className='iniciar' disabled={disabled} type='submit' value="Recargar" onClick={() => {
                        
                    }}>iniciar</button>
                </form>
            </div>
            {mostrarComponente} 
        </div>
    );
}