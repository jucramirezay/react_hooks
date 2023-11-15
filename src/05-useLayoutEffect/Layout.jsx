import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote} from "../03-examples/index";

export const Layout = () => {

    // Contador que incrementa cada vez que se oprima el botón de next character
    const { counter, increment } = useCounter(1);

    // Fetch que se hace a la API indicada
    const {data, isLoading, hasError} = useFetch(`https://rickandmortyapi.com/api/character/${counter}`);

    const { name, species } = !!data && data;

    return (
        <>
            <h1>Rick and Morty Quotes</h1>
            <hr />
            {
                isLoading 
                    ?   <LoadingQuote />
                    :   <Quote name={ name } species={ species } />
            }
            <button className="btn btn-primary" onClick={ () => { increment(1) }}>
                Next Character
            </button>
        </>
    );
}
