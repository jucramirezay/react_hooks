import { useState } from "react";
import { useCounter } from "../hooks"
import { Small } from "./Small";

// Cada vez que este componente se re renderice, los componentes hijos se redibujan, por eso se hace necesario memorizar
// el estado de los componentes hijos en caso de que se este haciendo un proceso pesado y no se necesite el redibujado
// del componente hijo. 
export const Memorize = () => {

    const {counter, increment} = useCounter( 10 );
    const [show, setShow] = useState(true);

    return (
        <>
            <h1>Counter: <Small value={counter} /></h1> {/* Uso del componente hijo Small */}
            <hr />

            <button
                className="btn btn-primary"
                onClick={ () => increment( 1 ) }
            >+1</button>

            {/* Botón que genera un cambio de estado que es ajeno al componente hijo Small */}
            <button
                className="btn btn-outline-primary"
                onClick={ () => setShow( !show ) }
            >Show/Hide { JSON.stringify(show) }</button>
        </>
    )
}
