import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import { Login,Home } from '../pages';
//invocando el context user mediante su Hook personalizado
import {UserAuth} from '../context';
import { ProtectedRoutes } from '../hooks';


export  function MyRoutes() {
  const {user}=UserAuth();

  return (
<div>
  <BrowserRouter>
    <Routes>
      <Route exact path='/login' element={<Login/>} />
        <Route element={<ProtectedRoutes user={user} redirecTo="/login" />} >
             <Route exact path='/' element={<Home/>} />
        </Route>
    </Routes>        
  </BrowserRouter>
</div>
  )
}
