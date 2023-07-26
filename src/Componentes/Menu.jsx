import { useState } from "react";
import "../Estilos/Menu.css";
import { AiOutlineMenu } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillFile } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { AiOutlineCloudDownload } from "react-icons/ai";
import sofia from "../Imagenes/sofia.jpg";

export const Menu = () => {
  

  return (
    
      
      <div className="dropdown" id="contenedor-dropdown">
        <h1 className="nombre-sofia">Sofia fernandez </h1>
        <nav className="contenedor-imagen-perfil">
          <img className="sofia" src={sofia} alt="" />
        </nav>
        <ul className="lista-menu">
          <div className="contenedor-intem-list">
            <AiFillFile className="icono-lista"></AiFillFile>
            <li className="iten-list">Mis notas</li>
          </div>
          <div className="contenedor-intem-list">
            <AiFillDelete className="icono-lista"></AiFillDelete>
            <li className="iten-list">Notas eliminadas</li>
          </div>
          <div className="contenedor-intem-list">
            <AiOutlineCloudUpload className="icono-lista"></AiOutlineCloudUpload>
            <li className="iten-list">Respaldar</li>
          </div>
          <div className="contenedor-intem-list">
            <AiOutlineCloudDownload className="icono-lista"></AiOutlineCloudDownload>
            <li className="iten-list">Restaurar</li>
          </div>
        </ul>
        <hr />
        <h1 className="recientes">Recientes</h1>
        <div className="contenedor-recientes"></div>
      </div>
    
  );
};
