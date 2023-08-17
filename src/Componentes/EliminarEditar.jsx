import React from "react";
import {AiTwotoneDelete } from "react-icons/ai";
import {AiTwotoneEdit } from "react-icons/ai";
import'../Estilos/EliminarEditar.css';
export const EliminarEditar = () => {
    return (
        <div className="contenedor-eliminar-editar">
            <AiTwotoneDelete className="delete-nota"/>
            <AiTwotoneEdit className="editar-nota"/>
        </div>
    );
}