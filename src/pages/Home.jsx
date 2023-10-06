import styled from 'styled-components';
import {useAuthStore} from '../store/AuthStore';
import {UserAuth} from '../context';
export  function Home() {
  const {signout}=useAuthStore();
  const {user}=UserAuth();
  return (
    <Container>
        <h2>Bienvenido {user.full_name}</h2>
        <button onClick={signout} >Cerrar session</button>
        <img src={user.picture}  />
    </Container>
  );
}

const Container=styled.div`
    height:100vh;
`;