import styled from "styled-components"

export const WrapperTelaInicial = styled.main`
   display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center;
   margin-top: 4em;
   
` 

export const WrapperConteudo = styled.main`
   display: flex;
   flex-direction: column;
   align-items: center;
   background-image: url('./imagens/fundoconteudo.png');
   background-repeat: no-repeat;
   background-position: bottom left;
   background-size: 18%;
   text-align: center;
   @media(min-width: 390px){
    background-image: url('./imagens/fundoconteudoinicial.png');
   background-repeat: no-repeat;
   background-position: right;
   background-size: 5%;
   }
   `

export const Logo = styled.img`
    text-align: center;
    width: 200px;
    
`
export const Titulo = styled.h1`
    padding-top: 0.5em;
    font-size: 1.5em;
    color: ${(props) => (props.primary ? "#FFF": "#3772FF")}; 
` 

export const Texto = styled.p`
    text-align: center;
    color: ${(props) => (props.primarycolor ? "#FFF": "#3772FF")};
    padding: ${(props) => (props.primary ? "1.5em 3em":"1.5em 2em")};
`

  

