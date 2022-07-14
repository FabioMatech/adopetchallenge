import styled from "styled-components"
import { WrapperTelaInicial, Logo, Titulo, Texto} from "../estilos/Conteudo"
import { Botao } from "../componentes/elementos/botao"

export const ImgCao = styled.img`
    position: absolute;
    bottom: 3.5em;
    height: 32%;
    `

export const TelaInicial = () => (
   
   <WrapperTelaInicial>
        <Logo src="./imagens/logobranco.png" alt="Logo da Adopet" />
       <Titulo primary>Boas-Vindas!</Titulo>
       <Texto primary>
            Que tal mudar sua vida adotando seu novo melhor amigo ?
            Vem com a gente.
        </Texto>
        <Botao href="/login">
            Já tenho conta
        </Botao>
        <Botao href="/cadastro">
            Quero me cadastrar
        </Botao>
        <ImgCao src="./imagens/ilustracao.png" alt="Cãozinho" />
    </WrapperTelaInicial>

)