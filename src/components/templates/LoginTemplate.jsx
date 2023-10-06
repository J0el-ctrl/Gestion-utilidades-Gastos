import styled from 'styled-components';
import { BtnSave } from '../moleculas';
import {v} from '../../styles/variables';
import { useAuthStore } from '../../store';
export  function LoginTemplate() {
  const {signInWithGoogle}=useAuthStore();
  return (
    <Container>
        <div className='contentCard'>
            <span className='version'>version 1.0</span>
            <div className='contentImg'>
                <img src={v.logo} />
            </div>
            <Titulo>Control de Gastos</Titulo>
            <p className='frase'>toma el control de tus ingresos & gastos</p>
        <ContainerBtn>
            <BtnSave titulo="Iniciar Con google" icono={<v.iconogoogle/>} bgcolor={v.colorSecundario} funcion={signInWithGoogle} />
        </ContainerBtn>
        </div>
    </Container>
  );
}
const Container=styled.div`
background-image:url(${v.imagenfondo});
/* no repite la imagen en caso este no alcance */
background-repeat:no-repeat;
//se adapta la imagen sobre la view
background-size:cover;
height: 100vh;
display:flex;
align-items:center;
justify-content:center;
color:rgba(255,255,255,0.87);
text-align:center;
.contentCard{
    background-color:#131313;
    border-radius:30px;
    gap:30px;
    display:flex;
    flex-direction:column;
    margin:10px;
    padding:10px;
    box-shadow:8px 5px 18px 3px grba(0,0,0,0.35);
    
    .version{
        color:#727272;
        text-align:start;

    }
    .contentImg{
        img{
            max-width:60%;
            /* animation:scale-down-top-right 1.5s ease-in-out infinite alternate; */
            animation:flotar 1.5s ease-in-out infinite alternate;
        }
    }
    .frase{
        color:#909090;
        font-size:1.2rem;
    }

}
@keyframes flotar {
    0% {
      transform: translate(0, 0px);
    }
    50% {
      transform: translate(0, 15px);
    }
    100% {
      transform: translate(0, -0px);
    }
  }
/* extraido de animatiss  */

/* @keyframes scale-down-top-right{0%{transform:scale(1);transform-origin:right top;}100%{transform:scale(.5);transform-origin:right top;}} */
`;


const Titulo=styled.span`
    font-size:5rem;
    font-weight:700;
`;
const ContainerBtn=styled.div`
display:flex;
justify-content:center;
`;
