import { useLayoutEffect, useRef, useState } from "react";

export const Quote = ({ name, species}) => {

    const pRef = useRef(); // Referencia a la etiqueta de parrafo p
    const [boxSize, setBoxSize] = useState({ width:0, height: 0 }); // Estado que guarda tamaño de la caja de la etiqueta parrafo

    // Una vez el componente se ha dibujado se quiere obtener el tamaño que ocupa el parrafo en el DOM 
    useLayoutEffect(() => {
      const { width, height } = pRef.current.getBoundingClientRect(); // Con esta propiedad de la referencia al parrafo se obtiene el width y el height
      setBoxSize({ width, height });
    }, []);

    return (
      <>
        <blockquote className="blockquote text-end"
          style={{ display: 'flex' }} // flex-box CSS, cambia el tamaño de acuerdo al contenido 
        >
          <p ref={ pRef } className="mb-1">{ name }</p> {/* Cambia de tamaño dependiendo del nombre */}
          <footer className="blockquote-footer">{ species }</footer>
        </blockquote>
        <code>{ JSON.stringify(boxSize) }</code> {/* Muestra el tamaño que se obtiene del parrafo */}
      </>
    );
}
