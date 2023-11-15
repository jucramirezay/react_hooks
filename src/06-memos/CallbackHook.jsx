import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

// En este hook se hace el ejercicio en el cual una vez ocurre el incremento, el ShowIncrement no se redibuja
// el que se esta redibujando es CallbakHook y el estado lo actualiza por medio del useCallback
export const CallbackHook = () => {

    const [ counter, setCounter ] = useState( 10 );

    // Permite memorizar funciones. Retorna una función que se reprocesa cada vez que cambian las dependencias
    // La función interna del useCallback es la misma función que esta retornando el hook cuando cambian las dependencias
    const incrementFather = useCallback((valueIncrement) => { 
        setCounter( (value) => value + valueIncrement ) }, []);

    return (
        <>
            <h1>useCallback Hook: { counter }</h1>
            <hr />
            <ShowIncrement increment={ incrementFather } />
        </>
    );
}
