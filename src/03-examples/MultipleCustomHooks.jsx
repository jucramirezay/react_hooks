import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote} from "./index";

export const MultipleCustomHooks = () => {

    // Contador que incrementa cada vez que se oprima el botón de next character
    const { counter, increment } = useCounter(1);

    // Fetch que se hace a la API indicada
    const {data, isLoading, hasError} = useFetch(`https://rickandmortyapi.com/api/character/${counter}`);

    // ? Línea de código compleja
    // Ya que la data es null apenas se hace la petición a la API (antes de la respuesta del fetch)
    // No es posible desestructurar su valor directamente, por ende, se hace un condicional donde se pregunta
    // si existe la data, entonces que desestrcuture los valores name y species. 
    // * Se esta haciendo una doble negación del valor que tiene la variable data, en caso de que la doble negación 
    // * sea true (cuando ya hay objeto con datos), entonces realiza la desestructuración del objeto
    // Valor normal -> null ..... Valor negación -> !null: true ..... Valor doble negación -> !!null: false
    const { name, species } = !!data && data;

    return (
        <>
            <h1>Rick and Morty Quotes</h1>
            <hr />
            {
                isLoading 
                    ? <LoadingQuote />
                    :  <Quote name={ name } species={ species } />
            }
            <button 
                className="btn btn-primary" 
                disabled={ isLoading } 
                onClick={ () => { increment(1) }}>
                Next Character
            </button>
        </>
    );
}
