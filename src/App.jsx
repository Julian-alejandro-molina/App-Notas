import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Link,Route,Routes } from "react-router-dom";
import "./App.css";
import { Cardrecientes } from "./Componentes/Cardrecientes.jsx";
import { Textarea } from "./Componentes/Textarea";
import { Presentacion } from "./Componentes/Presentacion";
import { Inicioapp } from "./Componentes/Inicioapp";
import { Login } from "./Componentes/Login";




function App() {
  

  return (
    <>
   
   
    <Routes>      
        <Route path='/' element={<Presentacion/>}></Route>
        <Route path='/inicioapp' element={<Inicioapp/>}></Route>
        <Route path='/textarea' element={<Textarea></Textarea>} ></Route>
        <Route path='/inicioapp/:usuarios' element={<Inicioapp/>}></Route>
        <Route path='/Actualizar-Nota/:id' element={<Textarea></Textarea>} ></Route>
        <Route path='/Iniciar-sesion' element={<Login></Login>} ></Route>
        
      </Routes>
      
    </>
    
  );
}

export default App;
