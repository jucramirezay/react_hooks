import { useForm } from "../hooks/useForm";


export const TodoAdd = ({ onNewTodo }) => {

    const { description, onInputChange, onResetForm} = useForm({
        description: ''
    });

    const onSubmit = (event) => {
        event.preventDefault(); // Previene que se recargue el navegador al dar enter en un input de un formulario
        const newTodo = {
            id: new Date().getTime(),
            description: description, // Elimina el input de espacios vacios al inicio y al final
            done: false
        } 

        // Tiene que haber mas de un caracter para que se pase el input al componente padre
        if(description.length <= 1) {
            return;
        }
        onNewTodo( newTodo ); // Paso del input al componente padre
        onResetForm(); // Limpia el input value
    }


    return (
        <form onSubmit={ event => onSubmit(event) } aria-label="form">
            <input 
                type="text" 
                placeholder="¿Qué hay que hacer?"
                className="form-control"
                name="description"
                value={ description }
                onChange={ onInputChange }    
            />
            <button 
                type="submit"
                className="btn btn-outline-primary mt-2"
            >
                Agregar
            </button>
        </form>
    );
}
