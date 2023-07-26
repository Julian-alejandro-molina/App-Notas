import React from "react";
import { useState } from "react";
import '../Estilos/Cardrecientes.css';
import pencil from '../Imagenes/pencil.png'
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Textarea } from "./Textarea";
import { Link } from 'react-router-dom';




export const Cardrecientes = ({titulo,nota,id,fecha,addMensaje}) => {
  //const datos=;
  //console.log('este',datos)
  const Eliminar = () => {
    const idigual =id
    const listNotas = JSON.parse(localStorage.getItem('listNotas'));
    //console.log(listNotas)
    //console.log(idigual);
    /*obtenemos la posicion del componente a eliminar*/ 
    let posicion = listNotas.findIndex((index) => index.id == id);
    //console.log(posicion);
    addMensaje(idigual,posicion,titulo)

  }

  const Editar=()=>{
    //const editarNota=JSON.parse(localStorage.getItem('listNotas'));
    //console.log(editarNota)
    
  }
 






  return (

    <div className="red" id='elemento'>


      <samp className="card-titulo">{titulo}</samp>
      <p className="card-nota">{nota}</p>
      <a onClick={Eliminar} ><AiOutlineCloseCircle className="card-menu" /></a>
      <div className="fondo"><Link to={`/Actualizar-Nota/${id}`}><img src={pencil} onClick={Editar} className="pencil" /></Link></div>


      <nav className="card-id" id='id'>{id} </nav>
      <samp className="card-fecha">{fecha}</samp>


    



    </div>
  );

}