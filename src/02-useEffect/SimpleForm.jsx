import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    // Antes de utilizar el useEffect es necesario mantener el estado
    // Los nombres de las propiedades del objeto deben ser los mismos del name del input, esto para que se sepa que variable va a cambiar
    const [formState, setFormState] = useState({
        username: 'jucramirezay',
        email: 'jucramirezay@gmail.com',
    });

    const { username, email } = formState;

    // Gracias a esta función se maneja el cambio de los valores del input
    // se desestructura el target que proviene del objeto event de react
    const onInputChange = ({ target }) => {
        const { name, value } = target; // Se desestructuran del target las propiedades name y value (propiedades del input)
        setFormState({
            ...formState, // Mantiene el valor de los input que no se estan modificando
            [ name ]: value // De esta forma se indica que solamente la propiedad que se esta modificando es la que se va a cambiar en el estado
        });
    }

    // Efect que se llama solamente en la construcción del componente
    useEffect(() => {
        console.log('useEffect called')
    },[]);

    // Efecto que se ejecuta cada vez que exista un cambio en el formulario
    useEffect(() => {
        console.log('formState change')
    },[formState]);

    // Efecto que se ejecuta cada vez que el email cambie
    useEffect(() => {
        console.log('email change')
    },[email]);

    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />

            <input 
                type="text"
                className='form-control'
                placeholder='username'
                name='username' 
                value={ username }
                onChange={ onInputChange }
            />
            <input 
                type="email"
                className='form-control mt-2'
                placeholder='mail'
                name='email' 
                value={ email }
                onChange={ onInputChange }
            />
            {
                // Si el usuario strider2 existe (esta en el input en ese momento) el mensaje del componente Message será mostrado
                // En caso de que el usuario strider2 NO exista, el componente Message deja de existir, será destruido del JSX
                (username === 'strider2') && <Message />
            }
            
        </>
    )
}
