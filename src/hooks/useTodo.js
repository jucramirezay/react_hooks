import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer";

// Estado inicial
const initialState = [];

// Función init(), inicializa el reducer de acuerdo al valor del initialState
// ? En este caso se utiliza la función init() ya que cuando se recarga el navegador es necesario traer la información
// ? que se encuentra en el local Storage para inicializar el arreglo de todos. Si no se hace esto, cada vez que se
// ? recarga la app, se inicializa el arreglo de todos con un arreglo vacío y no con la información del local Storage
const init = () => {
    // Inicializa el arreglo de todos del reducer con la información en String que se encuentra en el local Storage
    // parsea esta información de String a JSON. En caso de que no haya nada en el local Storage para que no retorne null
    // retorna un arreglo vacío
    return JSON.parse( localStorage.getItem('todos')) || [];
}

export const useTodo = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init );

     // Efecto secundario utilizado para almacenar los todos ingresados en el localStorage
     useEffect(() => {
        // * En el local storage solamente se pueden grabar Strings
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]) // Cada vez que cambia el arrelgo de todos se lanza el efecto

    // Llama el reducer para crear un nuevo todo
    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
            donde: false,
        }
        // El dispatch es la función que se utiliza para enviar la acción al reducer
        dispatch( action );
    }

    // Llama el reducer para eliminar un todo
    const handleDeleteTodo = ( id ) => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: id,
        };
        // El dispatch es la función que se utiliza para enviar la acción al reducer
        dispatch( action );
    }

    const handleToggleTodo = (id) => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: id,
        }
        dispatch( action );
    }

    let todosCount = todos.length;

    const todosPending = todos.filter( todo => !todo.done ).length

    return {
        todos,
        todosCount,
        todosPending,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        
    };

}