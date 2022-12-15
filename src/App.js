import React, {useState} from 'react';
import './App.css';
import Header from './componentes/Header';
import FormularioTareas from './componentes/Formulario';
import ListaTareas from './componentes/ListaTareas';

function App() {
  const [tareas, cambiarTareas] = useState(
    [
     
    ]
  );

  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(false); 
  
  return (
    
    <div className="contenedor">
      <Header mostrarCompletadas={mostrarCompletadas} cambiarMostrarCompletadas={cambiarMostrarCompletadas} />
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas} />
      <ListaTareas tareas={tareas} cambiarTareas={cambiarTareas} mostrarCompletadas={mostrarCompletadas}/>
    </div>
  );
}



export default App;
