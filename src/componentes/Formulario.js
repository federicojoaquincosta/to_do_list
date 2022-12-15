import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 as uuidv4 } from 'uuid';
import React, {useState} from "react";
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

const FormularioTareas = ({ tareas, cambiarTareas }) => {
    const [inputTarea, cambiarInput] = useState('');

    const handleInput = (e) => {
        cambiarInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        cambiarTareas(
            [...tareas,
                 {
                    id: uuidv4(),
                    texto: inputTarea,
                    completada: false
                }
            ]
    )

    }
    return <form action="" className="forumlario-tareas" onSubmit={handleSubmit}>
        <input type="text" className="formulario-tareas__input" placeholder="Escribe una tarea" value={inputTarea} onChange={(e) => handleInput(e)}/>
        <button type="submit" className="formulario-tareas__btm">
            <FontAwesomeIcon icon={faPlusSquare} className="formulario-tareas__icono-btn" />
        </button>
    </form>
}

export default FormularioTareas;