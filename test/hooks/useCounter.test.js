import { act, renderHook } from"@testing-library/react";
import { useCounter } from"../../src/hooks/useCounter";

describe('Pruebas del useCounter', () => {

    test('Debe retornar los valores por defecto', () => {
        
        // Permite renderizar o retornar un hook, indicado como argumento. 
        // Retorna la información de como esta el hook en ese instante de tiempo. Es decir, el resultado del hook
        const { result } = renderHook( () => useCounter() );
        const { counter, decrement, increment, reset } = result.current; // Obtiene los valores actuales del retorno del hook

        expect( counter ).toBe(10); // Valida que el valor del contador sea de 10
        expect( decrement ).toEqual( expect.any( Function )); // Valida que decrement sea una función
        expect( increment ).toEqual( expect.any( Function )); // Valida que increment sea una función
        expect( reset ).toEqual( expect.any( Function )); // Valida que reset sea una función

    });

    test('Debe de ejecutar el counter con el valor de 100', () => {

        const { result } = renderHook( () => useCounter(100) );
        const { counter } = result.current

        expect( counter ).toBe(100);

    });

    test('Debe de incrementar el contador', () => {

        const { result } = renderHook( () => useCounter(100) );
        const { counter, increment } = result.current;

        // Función utilizada para realizar el llamado de funciones de los hooks. Ejecuta la función que se pasa 
        // adentro de su callback
        act( () => {
            increment();
        });

        // Se debe hacer la prueba con el valor actual de counter. Si se llama counter directamente no va a funcionar
        // la prueba, ya que counter no se actualiza como tal, la actualización se recibe en el result.current.counter
        expect( result.current.counter ).toBe(101);

    });

    test('Debe de decrementar el contador', () => {

        const { result } = renderHook( () => useCounter(100) );
        const { counter, decrement } = result.current;

        // Función utilizada para realizar el llamado de funciones de los hooks. Ejecuta la función que se pasa 
        // adentro de su callback
        act( () => {
            decrement();
        });

        // Se debe hacer la prueba con el valor actual de counter. Si se llama counter directamente no va a funcionar
        // la prueba, ya que counter no se actualiza como tal, la actualización se recibe en el result.current.counter
        expect( result.current.counter ).toBe(99);

    });

    test('Debe de hacer el reset del contador', () => {

        const { result } = renderHook( () => useCounter(100) );
        const { counter, increment, reset } = result.current;

        // Función utilizada para realizar el llamado de funciones de los hooks. Ejecuta la función que se pasa 
        // adentro de su callback
        act( () => {
            increment(); // Hacer un aumento, necesario para luego hacer el reset del contador 
            reset();
        });

        // Se debe hacer la prueba con el valor actual de counter. Si se llama counter directamente no va a funcionar
        // la prueba, ya que counter no se actualiza como tal, la actualización se recibe en el result.current.counter
        expect( result.current.counter ).toBe(100);

    });

})