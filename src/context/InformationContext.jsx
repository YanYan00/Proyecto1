import { createContext,useContext,useState, useEffect } from "react";

export const InformationContext = createContext();

const InformationProvider = ({children}) =>{
    const [tarifas,setTarifas] = useState([]);
    const [descuentos,setDescuentos] = useState([]);
    useEffect(()=>{
        obtenerTarifasRemoto();
        obtenerDescuentosRemoto();
    },[])
    const obtenerTarifasRemoto = async() =>{
        try {
            const response = await fetch("http://localhost:8080/api/rates/");
            if(!response.ok){
                throw new Error('Error en la respuesta de las tarifas');
            }
            const data = await response.json();
            setTarifas(data);
        } catch (error) {
            console.error("Error al obtener tarifas:", error);
        }
    }
    const obtenerDescuentosRemoto = async() =>{
        try {
            const response = await fetch("http://localhost:8080/api/discounts/");
            if(!response.ok){
                throw new Error('Error en la respuesta de los descuentos');
            }
            const data = await response.json();
            setDescuentos(data);
        } catch (error) {
            
        }
    }
    return(
        <InformationContext.Provider value={{obtenerTarifasRemoto,obtenerDescuentosRemoto,tarifas,descuentos}}>
            {children}
        </InformationContext.Provider>
    )
}

export default InformationProvider;