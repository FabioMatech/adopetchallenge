import styled from "styled-components"
import logobranco from "../../imagens/logobranco.png"

const WrapperHeader = styled.header`
   padding-top: 2.5em;
   padding-bottom:4em;

    @media(min-width: 390px)  {
        background-image: url(${logobranco});
        background-repeat: no-repeat;
        background-size: 6em;
        background-position: 1.5em;
        background-position-y: 2.8em;
        
    }
    
`
const ImgCasa = styled.a`
    padding-left: 2em;
    @media(min-width: 390px)  {
        padding-left: 8.5em;
    }
`

const ImgMensagem = styled.a`
     padding-left: 2em;
`

export const Cabecalho = () => (
    <WrapperHeader>
        <ImgCasa href="/home">
            <img src="./imagens/casa.png" alt="Botão tela inicial" />
        </ImgCasa>
        <ImgMensagem href="/mensagem">
            <img src="./imagens/mensagens.png" alt="Botão tela mensagem" />
        </ImgMensagem>

    </WrapperHeader>
)