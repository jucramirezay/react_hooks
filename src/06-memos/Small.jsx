import { memo } from 'react';

// Este componente se redibuja en dos casos
// * Cada vez que cambia el valor del value
// * Cada vez que ocurre un cambio en el componente padre (re renderizado del padre)
// En vista de que el segundo caso es incorrecto en muchos casos, no debería ser re renderizado este componente
// cuando el componente padre se re renderice. se utiliza el métod memo de React para almacenar el estado del componente
export const Small = memo(({ value }) => {

    console.log('Me volvi a generar')

    return (
        <small>{ value }</small>
    );
});

Small.displayName = 'Small';