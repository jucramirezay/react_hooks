import { createContext } from "react";

// Se le puede definir el estado inicial que deseamos que tenga
// UserContext es también un componente
// Posee tres caracteristicas
// * Permite saber como luce la información que se tiene alojada
// * Permite que el hook de react busque el contexto 
// * Define el proveedor
export const UserContext = createContext();