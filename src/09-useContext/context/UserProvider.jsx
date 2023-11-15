import { useState } from "react"
import { UserContext } from "./UserContext"

// const user = {
//     id: 123,
//     name: 'Camilo Ramirez',
//     email: 'jucramirezay@gmail.com',
// }

// Al ser un HOC (High Order Component) es necesario que entre sus propiedades tenga los hijos que va a poseer
// * Utilizado para proveer toda la información que el UserContext va a proporcionar al árbol de componentes
// ? El value es la información que cualquier hijo del UserProvider va a obtener del UserContext
export const UserProvider = ({ children }) => {

  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{ user, setUser }}> {/* Permite pasar como value la función de cambio de estado */}
        { children }  {/* Se indica por medio de esta propiedad cuales hijos perteneceran al contexto. Árbol de componentes */}
    </UserContext.Provider>
  )
}
