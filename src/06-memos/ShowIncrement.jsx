
export const ShowIncrement = ({ increment }) => {

    // No se redibuja este componente ya que la función increment esta memorizada, no hay cambios en el componente
    console.log(' Me volvi a generar ');

    return (
        <button
            className="btn btn-primary"
            onClick={() => {
                increment(5);
            }}
        > Incrementar </button>
    )
}
