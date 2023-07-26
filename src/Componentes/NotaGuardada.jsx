import React, { useState } from "react"
import  '../Estilos/NotaGuardada.css'
import success from '../Imagenes/success.png'
export const NotaGuardada=({EnviarValorAnuncncio,addMensaje})=>{
    const[ocultar ,setOcultar]=useState();
    //console.log(EnviarValorAnuncncio);
    const BotonAceptar=()=>{
        setOcultar(!EnviarValorAnuncncio)// cambia le el valor del estado ocultar
        addMensaje(ocultar);//ejecuata la funcion addMenje  
       
    }
    //console.log('este',ocultar)
    
    return(
     <div className="notaguardada" >
        <img src={success} alt=""className="success" />
      <h1 className="text">Tu nota se guardó exitosamente  </h1>
      <button  className="ok" onClick={BotonAceptar} >ok</button>
      </div>
);
}