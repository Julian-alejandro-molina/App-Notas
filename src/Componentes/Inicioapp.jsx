import '../Estilos/Estilosinicioapp.css'
import { useState, useEffect, } from "react";
import{useParams}from 'react-router-dom';
import { Menu } from "../Componentes/Menu";
import { BotonAdd } from "../Componentes/BotonAdd";

import { AiFillPlusCircle } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { Cardrecientes } from '../Componentes/Cardrecientes'
import { v4 as uuidv4 } from 'uuid';
import { json } from 'react-router-dom';
import { Login } from "../Componentes/Login";

const corchetesuno= "{";
const corchetesdos="}";
const valorInicial = false;
const menuvalorInicial = false;
export const Inicioapp = ({ }) => {

    const params= useParams();
    const { usuarios } = params;
    console.log(usuarios);

    const [buscar, setBuscar] = useState();

    const [estilos, setEstilos] = useState(valorInicial);
    const mostrarComponente = estilos ? <Menu /> : "";
    const verificarSeguir = () => {
        setEstilos(!estilos);
    };
    const [menuAdd, setMenuAdd] = useState(menuvalorInicial);
    const mostrarmenuAdd = menuAdd ? <BotonAdd /> : "";
    const mostrarMenu = () => {
        setMenuAdd(!menuAdd);
    };
    const [notas, setNotas] = useState(JSON.parse(localStorage.getItem('listNotas')) || []);

    /*if ( notas === null ) {
        notas = [];
    }*/
    const addMensaje = (idigual, posicion) => {
        /*Comunicación con el componente Cardrecientes-----*/

        const resultado = notas.filter(posicion => posicion.id != idigual);
        setNotas(resultado);

        const listNota = JSON.parse(localStorage.getItem('listNotas'));
        listNota.splice(posicion, 1);
        let listNotaJson = JSON.stringify(listNota);
        localStorage.setItem('listNotas', listNotaJson);
    }



    /*------------------BUSCADOR-----------------------*/
    const filtrar = (searchParams) => {
        if (searchParams) {
            const newNotas = notas.filter((nota) => {
                if (nota.titulo.toLowerCase().includes(searchParams.toLocaleLowerCase())) {
                    return nota;
                }
            })
            setNotas(newNotas);
        } else {
            setNotas(JSON.parse(localStorage.getItem('listNotas')) || []);
        }

    }



    return (

        <div className="contenedor-principal">
            <div className='contenedor-corchetes'>
                 <h1 className='corchetesuno'>{corchetesuno}</h1>
                 <h1 className='titulo-nota'>Notas/</h1> <p className='text-usuarios'>{usuarios}</p>
                 <h1 className='corchetesdos'>{corchetesdos}</h1>
            </div>
                {mostrarComponente}
                <AiFillPlusCircle className="add" onClick={mostrarMenu}></AiFillPlusCircle>

                <a className="boton" onClick={verificarSeguir}>
                    <AiOutlineMenu className="icono-menu"></AiOutlineMenu>
                </a>

                <input className="buscador" type="text" onChange={ev => filtrar(ev.target.value)} placeholder="Buscar" />

                {mostrarmenuAdd}
                <div className='contenedor-p'>
                {notas.map((elementoNota) => {

                    return (<Cardrecientes

                        key={uuidv4()}
                        titulo={elementoNota.titulo}
                        nota={elementoNota.nota}
                        fecha={elementoNota.fecha}
                        id={elementoNota.id}
                        addMensaje={addMensaje}
                    />)

                })}





            </div>
        </div>

    );
}