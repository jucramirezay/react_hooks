import { useRef } from "react"

// La idea de este componente es que cada vez que se oprime el botón Set Focus, se hace un foco del input 
export const FocusScreen = () => {

    // Permite mantener una referencia, y cuando esa referencia cambie no se re renderice el componente
    const inputRef = useRef();

    const setFocus = () => {
        // Toma el valor actual que tiene la referencia al inputRef y a ese input actual es al que se le hace el foco
        inputRef.current.select();
    }

    return (
        <>
            <h1>FocusScreen</h1>
            <hr />

            <input 
                ref={ inputRef } // Se debe crear la referencia al nodo del DOM indicado
                type="text" 
                placeholder="Write your name"
                className="form-control"    
            />

            <button className="btn btn-primary mt-2" onClick={ setFocus }>Set Focus</button>
        </>
    )
}
