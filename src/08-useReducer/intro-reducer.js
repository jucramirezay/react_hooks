
// *Concepto de lo que es initial state
// Como quiero que este mi app al iniciar, una parte de ella o un modulo de la misma
const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del alma',
    done: false
}];

// Reducer. No es mas que una función pura que manipula el state y retorna un nuevo valor del mismo. Recibe dos argumentos
// * Estado -> Estado del reducer. Se iguala al estado inicial 
// * Acción -> Quien le dice al Reducer como debe cambiar el estado
const todoReducer = (state = initialState, action = {}) => {

    // Evalua el type de la acción, en caso de cumplirse, returna el state con el valor que tenía y con el nuevo valor
    if(action.type === '[TODO] add todo') {
        // ! No se utiliza para el estado el método push() para agregar nuevos valores
        // ! Esto ya que siempre es necesario retornar un nuevo estado y con el método push() no se retorna un nuevo arreglo
        return[...state, action.payload]
    }

    // Como condicion un reducer siempre debe devolver un estado
    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del poder',
    done: false
}

// Cuando se desee hacer una modificación al Reducer, lo que se hace es mandar una acción, donde esa acción indica como
// se va a modificar
// Forma de crear una acción para un reducer, este es el estándar
const addTodoAction = {
    type: '[TODO] add todo', // Indica el tipo de acción
    payload: newTodo,  // Lo que va dentro de la acción. No necesariamente siempre va esta propiedad
}

todos = todoReducer( todos, addTodoAction );

console.log(todos);