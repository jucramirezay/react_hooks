import { useState } from "react";

export const CounterApp = () => {

    // Creación de un estado que posee un objeto con tres valores
    const [counter, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30
    });

    const { counter1, counter2, counter3 } = counter; // Se desestrctura el valor del estado (objeto con tres propiedades)
  
    return (
        <>
            <h1>Counter1: { counter1 }</h1>
            <h1>Counter2: { counter2 }</h1>
            <h1>Counter3: { counter3 }</h1>
            <hr />
            <button className="btn" onClick={
                // Para alterar el valor de un solo estado y dejar los otros como estaban, se utiliza el spread operator. 
				// Siempre deben ponerse los demás estados, inclusive si estos no se modifican. 
                () => setCounter({ 
                    ...counter,
                    counter1: counter1 + 1 
                })
            }>+1</button>
        </>
    );
}
