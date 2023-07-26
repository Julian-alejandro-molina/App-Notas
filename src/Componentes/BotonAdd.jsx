import '../Estilos/BotonAdd.css'
import { useState } from 'react';
import { AiFillEdit } from "react-icons/ai";
import { AiFillFileAdd } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { Textarea } from './Textarea';
const valor = false;
export const BotonAdd = () => {


    return (
        <>
            <ul className='contenedor-botonadd' style={{ transition: ".5s" }} >
                <li className='contenedor-icono'><Link to={'/textarea'}><AiFillFileAdd className='icono'></AiFillFileAdd></Link></li>
                
            </ul>


        </>
    )
        ;
}