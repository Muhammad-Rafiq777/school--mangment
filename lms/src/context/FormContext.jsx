import react, { createContext } from 'react'

export const FormContext =createContext()
const FormContextProvider = (props)=>{
   
 const backendUrl = import.meta.env.VITE_BACKEND_URL;

 const value = {
    backendUrl
 }



 return(
    <FormContext.Provider value={value}>{props.children}</FormContext.Provider> 
 )

}

export default FormContextProvider