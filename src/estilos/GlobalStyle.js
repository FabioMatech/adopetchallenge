import styled, { createGlobalStyle } from "styled-components";

export const Globalstyle = createGlobalStyle`
  body{ 
  font-family: 'Poppins', sans-serif;
  font-size: 1em;
}
` 
export const Pagina = styled.body`
  min-height: 100vh;
  display: flex;  
  flex-direction: column;
  background-image: url(./imagens/backgroundheader.png);
  background-repeat: no-repeat;
  background-position: top left;
  background-color:${(color) => (window.location.pathname === "/" ? "#3772FF":"#FFF")};
  
`
export const BoxRodadpe = styled.footer`
  flex-grow: 1;
`




