/* eslint-disable react/prop-types */
import {Navigate,Outlet} from 'react-router-dom';
export const  ProtectedRoutes=({user,redirecTo,children})=> {
    //si usuario es nulo navega y renplaza el hispotirial
    if(user==null) return<Navigate replace to={redirecTo} />;
    //retorna los children, pero si los children se muestran muestrame los children  caso contrario muestrame los children restantes el Outlet
    return children?children:<Outlet/>;
    // el Outlet son las Route de paginas que s evan agregando al protectedRouter Global dentro de Routes 
//     <Route element={<ProtectedRoutes user={user} redirecTo="/login" />} >
//          parte de OUTLET
//     <Route exact path='/login' element={<Login/>} />
// </Route>
}
