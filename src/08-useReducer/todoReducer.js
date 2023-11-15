export const todoReducer = ( initialState = [], action ) => {

    switch (action.type) {
        case '[TODO] Add Todo':
            // Siempre se debe retornar un nuevo state
            // ! Evitar utilizar el push(), ya que siempre se debe retornar un nuevo elemento y con push() no sucede
            return [ ...initialState, action.payload ];
        case '[TODO] Remove Todo':
            // ! Método filter() retorna un nuevo arreglo, esto es permitido ya que un reducer debe retornar un nuevo estado
            // Retorna los elementos del arrelgo que NO tengan el mismo id enviado en el payload del action
            return initialState.filter( todo => todo.id !== action.payload );
        case '[TODO] Toggle Todo':
            // ! Método map() retorna un nuevo arreglo, esto es permitido ya que un reducer debe retornar un nuevo estado
            return initialState.map( todo => {
                 // Si el id del todo corresponde con el id enviado al que se le hizo el toogle, solamente la propiedad
                 // done del todo se modifica, se invierte a su valor contrario y se retorna el todo con el done modificado
                if( todo.id === action.payload ) { 
                    return {
                        ...todo, // El resto de la información del todo se mantiene
                        done: !todo.done,
                    }
                }
                return todo;
            });
        default:
            return initialState;
    }

};