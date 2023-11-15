import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

    // Desestructuracción del objeto que se encuentra alojado en el context
    const {user, setUser} = useContext( UserContext );

    return (
        <>
            <h1>LoginPage</h1>
            <hr />
            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>
            <button 
                className="btn btn-primary"
                onClick={() => setUser({ id: 123, name: 'Camilin Camilito', email: 'jucramirezay@gmail.com' })}>
                Set User
            </button>
        </>
    )
}
