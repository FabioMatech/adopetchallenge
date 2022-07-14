import styled, { createGlobalStyle } from "styled-components";

export const Globalstyle = createGlobalStyle`
  body{
    font-family: 'Poppins', sans-serif;
    font-size: 1em;    
}
`
export const Pagina = styled.body`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: url(./imagens/backgroundheader.png);
  background-repeat: no-repeat;
  background-position: top left;
  background-color:${(color) => (window.location.pathname === "/" ? "#3772FF":"#FFF")};
  
`

export const BoxConteudo = styled.main`
  flex-grow: 1;
`


