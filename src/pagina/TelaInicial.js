import styled from "styled-components"


const WrapperTelaInicial = styled.main`
   display: flex;
   flex-direction: column;
   align-items: center;
   min-height: 50vh;
   background-image: url(./imagens/fundoconteudoinicial.png);
   background-repeat: no-repeat;
   background-position: right;
   text-align: center;
    
`
const Logo = styled.img`
    padding-bottom: 1.5em;
    text-align: center;
    width: 200px;
    
`
const Titulo = styled.h1`
    font-size: 1.5em;
    color: #FFF;
` 

const Texto = styled.p`
    text-align: center;
    color: #FFF;
    padding: 1.5em 3em;
`

const ImgCao = styled.img`
    position: absolute;
    bottom: 3.5em;
    height: 35%;
    
   
`

export const TelaInicial = () => (
   
   <WrapperTelaInicial>
        <Logo src="./imagens/logobranco.png" alt="Logo da Adopet" />
       <Titulo>Boas-Vindas!</Titulo>
       <Texto>
            Que tal mudar sua vida adotando seu novo melhor amigo ?
            Vem com a gente.
        </Texto>
        <ImgCao src="./imagens/ilustracao.png" alt="Cãozinho" />
    </WrapperTelaInicial>

)