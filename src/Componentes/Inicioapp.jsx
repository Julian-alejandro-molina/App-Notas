import '../Estilos/Estilosinicioapp.css'
import { useState,useEffect } from "react";
import { Menu } from "../Componentes/Menu";
import { BotonAdd } from "../Componentes/BotonAdd";

import { AiFillPlusCircle } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { Cardrecientes } from '../Componentes/Cardrecientes'
import { v4 as uuidv4 } from 'uuid';
import { json } from 'react-router-dom';
const valorInicial = false;
const menuvalorInicial = false;
export const Inicioapp = ({ }) => {

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
    let [notas, setNotas] = useState(JSON.parse(localStorage.getItem('listNotas')) || []);
    //console.log(notas);
    //console.log(notas.id);

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
    

    let tituloNota = []
    let bandera =false
    const titulos = notas.map(index => index.titulo);
    //console.log(titulos);
    titulos.forEach(element => {
        if (element === buscar) {
            tituloNota = element
            bandera=true;

        }
    });
    let resultTitulo = notas.filter(dato => dato.titulo === tituloNota)
    //console.log(resultTitulo)
    useEffect(()=>{
        if (bandera===true) {
            setNotas(resultTitulo)
        }else
            {
                setNotas(JSON.parse(localStorage.getItem('listNotas')) || []); 
        }

    },[bandera]);


    const filtrar = (searchParams) => {
        if(searchParams) {
            const newNotas = notas.filter((nota) => {
                if(nota.titulo.includes(searchParams)) {
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

            <AiFillPlusCircle className="add" onClick={mostrarMenu}></AiFillPlusCircle>

            <a className="boton" onClick={verificarSeguir}>
                <AiOutlineMenu className="icono-munu"></AiOutlineMenu>
            </a>

            <input className="buscador" type="text" onChange={ev => filtrar(ev.target.value)} placeholder="Buscar" />

            {mostrarComponente}
            {mostrarmenuAdd}
            {notas.map((elementoNota,) => {

                return <Cardrecientes

                    key={uuidv4()}
                    titulo={elementoNota.titulo}
                    nota={elementoNota.nota}
                    fecha={elementoNota.fecha}
                    id={elementoNota.id}
                    addMensaje={addMensaje}
                />

            })}






        </div>

    );
}