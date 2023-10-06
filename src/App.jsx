import { MyRoutes } from "./routes/routes"
import {Light,Dark} from './styles/themes';
//para proveer el tema claro y oscuro
import {ThemeProvider} from 'styled-components';

//creamos el contexto para el tema 
import {createContext,useState} from 'react';
import { AuthContextProvider } from "./context/AuthContext";
export const ThemeContext=createContext(null);



function App() {

  //creamos el estado para los temas 
  const [theme, setTheme] = useState("light");
  const themeStyle=theme==="light"?Light:Dark;

  return (
    <>
    {/* envolvemos todas las rutas para que disponga el proveedor de temas en cualquier ambito */}
        <ThemeContext.Provider value={{theme,setTheme}}>
          {/*  themas nos permite manejar los stilos en cualquier ambito de components */}
          <ThemeProvider theme={themeStyle}>
            <AuthContextProvider>
              <MyRoutes/>
            </AuthContextProvider>
          </ThemeProvider>
        </ThemeContext.Provider>
    </>
  )
}

export default App
