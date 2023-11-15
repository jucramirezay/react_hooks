import { useState } from "react";

export const useCounter = ( initialValue = 10 ) => {
    
    const [counter, setCounter] = useState(initialValue);
    
    // Funciones que utilizan la funcion de cambio de estado del hook useState
    const increment = (value = 1) => {
        setCounter( counter + value);
    }

    const decrement = (value = 1) => {
        setCounter( counter - value);
    }

    const reset = () => {
        setCounter( initialValue );
    }
    
    // Objeto con las propiedades que va a retonar el hook
    return{
        counter,
        increment,
        decrement,
        reset
    };

}
