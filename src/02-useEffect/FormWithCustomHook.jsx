import { useForm } from "../hooks/useForm"

// Componente que esta utilizando un custom hook para crear el formulario
export const FormWithCustomHook = () => {

    // Se envia al custom hook los valores iniciales de las propiedades que se van a manejar en el formulario
    const { formState, onInputChange, onResetForm } = useForm({
        username: '',
        email: '',
        password: '',
    });

    // Desestructuración del formulario
    const {username, email, password} = formState;

    return (
        <>
            <h1>Formulario con custom hook</h1>
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
            <input 
                type="password"
                className='form-control mt-2'
                placeholder='password'
                name='password' 
                value={ password }
                onChange={ onInputChange }
            />

            <button onClick={ onResetForm } className="btn btn-primary mt-2">Borrar</button>
            
        </>
    )
}
