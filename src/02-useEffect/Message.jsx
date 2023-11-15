import { useEffect } from "react";

// Componente utilizado para ser desmontado. Una vez el nombre del usuario no sea strider2 el componente será destruido
export const Message = () => {

    useEffect(() => {

        // Desestructuración del evento de movimiento de mouse, toma las coordenadas x, y 
        // Esta función es necesaria ya que simboliza un espacio en memoria para la función del evento de movimiento
        const onMouseMove = ({ x, y}) => {
            const coords = {x, y};
            console.log(coords);
        }

        // * función setup, se ejecuta en este caso cuando el componente se construye, gracias a la lista de dependencias
        console.log('Message mounted');
        // Creación de un listener de movimiento de mouse, se debe pasar como segundo argumento una función de referencia
        window.addEventListener('mousemove', onMouseMove);

        // Función cleanup. Se ejecuta una vez el componente ha dejado de existir en el JSX 
        return() => {
            console.log('Message unmounted');
            window.removeEventListener('mousemove', onMouseMove); // destrucción del evento de movimiento de mouse
        }
    }, []);

        
    return (
        <>
            <h3>Usuario ya existe</h3>
        </>
    );
}
