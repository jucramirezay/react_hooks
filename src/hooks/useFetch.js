import { useEffect, useState } from "react";


export const useFetch = ( url ) => {

    // Estado que almacena las propiedades de acuerdo a la respuesta de la función getFetch()
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    });

    const getFetch = async () => {

        setState({
            ...state,
            isLoading: true,
        });

        const resp = await fetch(url);
        const data = await resp.json();

        setState({
            data,
            isLoading: false,
            hasError: null
        });
    }
    
    // Efecto que se ejecuta cada vez que cambie la URL enviada como argumento del Hook
    useEffect(() => {
        getFetch();
    }, [url]); // Cada vez que el URL cambie se dispara el useEffect
    
    // El hook retornara las mismas propiedades que tiene el estado
    return {
        data:       state.data,
        isLoading:  state.isLoading,
        hasError:   state.hasError
    };
}
