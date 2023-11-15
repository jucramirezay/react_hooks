import { useState, useMemo } from "react";
import { useCounter } from "../hooks"

// Funciones externas no se re renderizan cuando el componente se renderiza nuevamente
const heavyStuff = ( iterationNumber = 100 ) => {
    for(let i = 0; i < iterationNumber; i++) {
        console.log("Ahí vamos");
    }

    return `${iterationNumber} iteraciones realizadas`;
}

export const MemoHook = () => {

    const {counter, increment} = useCounter( 4000 );
    const [show, setShow] = useState(true);

    // memoriza el valor de retorno. Se mantiene el valor a menos que las dependencias de useMemo cambien
    // * Primer argumento es una función que debe retornar un valor, si no retorna nada es undefined lo cual no tiene sentido
    // * Segundo argumento son las dependencias.
    const memorizedValue = useMemo( () => heavyStuff(counter), [counter] ); // memoriza el valor cada vez que cambia counter

    return (
        <>
            <h1>Counter: <small>{counter}</small></h1> {/* Uso del componente hijo Small */}
            <hr />

            <h4>{ memorizedValue }</h4>

            <button
                className="btn btn-primary"
                onClick={ () => increment( 1 ) }
            >+1</button>

            <button
                className="btn btn-outline-primary"
                onClick={ () => setShow( !show ) }
            >Show/Hide { JSON.stringify(show) }</button>
        </>
    )
}
