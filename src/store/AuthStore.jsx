// gestionando zustand para el control de estados global en el inicio de session con el backend de supabase con google
// import {useState} from 'react';
import {create} from 'zustand';
import {supabase} from '../supabase/index';

//permite controlar el ingreso y cierre de session del usuario al sistema
export const useAuthStore= create((set)=>({
    isAuth:false,
    signInWithGoogle:async()=>{
        try {
            const {data,error}=await supabase.auth.signInWithOAuth({
                provider:"google",
            }) ;
            if(error) throw new error("Error de Ingreso al sistema");
            set({isAuth:true})
            return data
        } catch (error) {
            console.log(error);
        }
    },
       signout:async()=>{
        const {error}=await supabase.auth.signOut();
        
        set({isAuth:false});
        if(error)
        throw new error("Error en el cierre de Session");
        
    },


}));