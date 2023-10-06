import styled from 'styled-components';
export const Icono=styled.span`
/* invocamos desde styles mediante theme en themeProvider de App.jsx */
color:${(propsP)=>propsP.theme.text}
`;