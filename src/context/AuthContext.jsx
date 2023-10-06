/* eslint-disable react/prop-types */
//para gestionar y controlar el estado de usuario cuando inicie session en el sistema
import {createContext,useContext,useEffect,useState} from 'react';
import { supabase } from '../supabase';
const AuthContextUsuario=createContext();
// children son todas las paginas hijas que dependen de AuthContextProvider 
export const AuthContextProvider=({children})=>{
    const [user, setuser] = useState([]);
    useEffect(() => {
        const {data:authListener}=supabase.auth.onAuthStateChange(
            async(event,session)=>{
                if(session==null){
                    setuser(null);
                }else{
                    //ingresamos al objeto de user que nos permite traer la data del usuario logeado
                    setuser(session?.user.user_metadata);
                    console.log("evento",event);
                    console.log("session",session);
                }
            }
        );
        return ()=>{
            authListener.subscription;
        }
    }, []);
    // retorna un servicio que va a proveer a los children a todos los hijos que rodea el AuthContextProvider
    return(
        <AuthContextUsuario.Provider value={{user}} >
            {children}
        </AuthContextUsuario.Provider>
    );

};

//Hook para el uso de AuthContextUsuario de user
export const UserAuth=()=>{
    return useContext(AuthContextUsuario)
}