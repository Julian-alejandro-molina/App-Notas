import { useState, useEffect  } from "react";
import{useParams}from 'react-router-dom';
import "../Estilos/Textarea.css";
import { AiFillSave } from 'react-icons/ai'
import { AiOutlineLeft } from 'react-icons/ai';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { NotaGuardada } from '../Componentes/NotaGuardada'

let nota_id;
let notas;
let nota;
let posicion;
let bandera=false
var contadorFecha = [];
let notasGuardadas =  [];
const datos = {
  id: "",
  titulo: '',
  nota: "",
  fecha: {},

};
export const Textarea = ({ }) => {
  
  const params= useParams();
  const { id } = params;
  

  const [anuncio, setAnuncio] = useState(false);
  //const id=params.id
  //return <h1>{params.id}</h1>
  const editar=()=>{
    const editarNota=JSON.parse(localStorage.getItem('listNotas'));
    console.log(editarNota)
  }

  const valoranuncio = () => {
    setAnuncio(!anuncio)
  }
  /*------------cambiar el estado de anuncion desde el boton del componente notaguardada---------------- */
  const addMensaje = (mensaje) => {
    //console.log(mensaje);
    setAnuncio(mensaje)
  }

  const MostrarAnuncio = anuncio ? <NotaGuardada EnviarValorAnuncncio={anuncio} addMensaje={addMensaje} /> : "";//Enviamos la prop  EnviarValorAnuncion con el valor del estado después de presionar el botón guardar, que sería su valor opuesto(true) 
  let habilitar;
  const [idunico, setIdunico] = useState(Math.floor(Math.random() * 999999));
  const [searchInput, setSearchInput] = useState('');
  const [searchText, setSearchText] = useState('');
  const [idNotaActualizar, setIdNotaActualizar] = useState('');

  
  if(id) {
    useEffect(()=>{
       
      notas = JSON.parse(localStorage.getItem('listNotas'));
      nota = notas.find((nota) => nota.id === id);//Buscamos el elemento que cumple con la condicion
      posicion=notas.findIndex(element=> element.id===nota.id);//*obtenemos la posicion del componente a remplazar*/ 

      setSearchInput(nota.titulo)
      setSearchText(nota.nota)
      setIdNotaActualizar(nota.id)
      
      
      notas.splice(posicion,1);
      let listNotaJson = JSON.stringify(notas);
      localStorage.setItem('listNotas', listNotaJson);
      
      bandera=true;
      console.log(notas);
      console.log(bandera);
      console.log(nota.id);
      
      
      
      
      
      
    }, [])
  }
  
  const habilitarbtn=()=>{
   
    if (datos.titulo!=''&& datos.nota!='') {
      habilitar=false
          
    }else{
      habilitar=true
    }
    
  }

  habilitarbtn();
  
  
  
  const capturardatos = (valor) => {
    datos.titulo=searchInput
    datos.nota=searchText     
  }

  capturardatos();
  const obtenerdatos=(objeto)=>{
    const titulos=objeto.titulo
    const notas=objeto.nota    
  }
  
  const Limpiarinputs = () => {
    // document.getElementById('nota').value = "";
    // document.getElementById('titulo').value = "";
    setSearchInput('');
    setSearchText('');
  }

  
  const guardar = () => {

  
    obtenerdatos(datos);
    notasGuardadas = JSON.parse(localStorage.getItem("listNotas") || '[]');
    if (datos.titulo === '') {
      alert('Recuarda que el titulo de tu nota es obligatotio')
      document.getElementById('titulo').focus();
      datos.titulo = document.getElementById('titulo').value;
      return;// Se detiene la 

    } else if (datos.nota === '') {
      alert('Recuarda que el contenido de tu nota es obligatotio')
      document.getElementById('nota').focus();
      return;

    }
    
    Limpiarinputs();
    setIdunico(idunico + 1);
    datos.id = idunico.toString();
    const fecha = new Date();
    const añoActual = fecha.getFullYear();
    const hoy = fecha.getDate();
    const mesActual = fecha.getMonth() + 1;
    contadorFecha.push(añoActual, hoy, mesActual);
    const fechaString = contadorFecha.toString();
    datos.fecha = fechaString;

    const datoscopia = { ...datos };
    datos.nota = '';
    datos.titulo = '';
    datos.id = '';
    datos.fecha = '';
    contadorFecha = [];
    notasGuardadas.push(datoscopia);

    //console.log("Notas",notasGuardadas)
  }

  const guardarlocalStorage = () => {
    localStorage.setItem('listNotas', JSON.stringify(notasGuardadas));
    //const listNotas = JSON.parse(localStorage.getItem('listNotas'));
    //console.log(listNotas)
  }
  const ejecutar = () => {
    guardar();
    guardarlocalStorage();
    valoranuncio();
  }
  return (
    <div>
      <div className="contenedor">
        <div className="bloc-de-ntoas">
          <button disabled={habilitar} id='btn' className="boton-guardar" onClick={ejecutar} ><AiFillSave className="icono-guardar"></AiFillSave></button>
          <Link to={'/inicioapp'}><AiOutlineLeft className="regresar"></AiOutlineLeft></Link>
          {/* <AiFillDelete className='delete'></AiFillDelete>*/}
        </div>

        <input
          placeholder="Tiulo"
          type="text" className="input"
          id="titulo"
          value={searchInput}
          onChange={ev => setSearchInput(ev.target.value)}
          
        />

        <div className="contenedor-text-anuncio ">
          {MostrarAnuncio}
          <textarea
            className="contenedor-textarea" id="nota"
            onChange={ev=>setSearchText(ev.target.value)}
            value={searchText}
          >
            
          </textarea>

        </div>

      </div>




    </div>
  );

};
