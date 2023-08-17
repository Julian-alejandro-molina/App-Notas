import { Link } from 'react-router-dom';
import { useState } from "react";
import "../Estilos/Menu.css";
import { AiOutlineMenu } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillFile } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { AiOutlineCloudDownload } from "react-icons/ai";
import sofia from "../Imagenes/sofia.jpg";
import { Login } from "./Login";
import login from "../Imagenes/login.png";

export const Menu = () => {
  

  return (
    
      
      <div className="dropdown" id="contenedor-dropdown">
       
        <div className="inicio-secion" ><Link to={'/Iniciar-sesion'}> <img className='img-login' src={login} alt="" /></Link></div>
       
        
      </div>
    
  );
};
