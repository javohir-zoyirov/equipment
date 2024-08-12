import { createContext } from "react";

export const ApiContext = createContext({
    category:"",
    setCategory:(category) => {},
    catalog:"",
    setCatalog:(catalog) => {},
    id:null,
    setId:(id) => {},
})