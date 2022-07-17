import styled, { createGlobalStyle } from "styled-components";

export const Globalstyle = createGlobalStyle`

` 
export const Pagina = styled.body`
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
  font-size: 1em;
  display: flex;  
  flex-direction: column;
  background-image: url(./imagens/backgroundheader.png);
  background-repeat: no-repeat;
  background-position: top left;
  background-color:${(color) => (window.location.pathname === "/" ? "#3772FF":"#FFF")};
  
`
export const BoxConteudo = styled.div`
  flex-grow: 1;
`




