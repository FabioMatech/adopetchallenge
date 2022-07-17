import styled from "styled-components"
import { WrapperTelaInicial, Logo, Titulo, Texto} from "../estilos/Conteudo"
import { Botao } from "../componentes/elementos/botao"
import ilustracao from '../imagens/ilustracao.png'
import logobranco from '../imagens/logobranco.png'



const WrapperImg = styled.div`
    display: relative;


`


const ImgCao = styled.img`
    position: absolute;
    align-self: center;
    bottom: 2.8em;
    height: 16em;
   

       


    `

export const TelaInicial = () => (
   
   <WrapperTelaInicial>
        <Logo src={logobranco} alt="Logo da Adopet" />
       <Titulo primary>Boas-Vindas!</Titulo>
       <Texto primary primarycolor>
            Que tal mudar sua vida adotando seu novo melhor amigo ?
            Vem com a gente.
        </Texto>
        <Botao href="/login">
            Já tenho conta
        </Botao>
        <Botao href="/cadastro">
            Quero me cadastrar
        </Botao>
       
        <WrapperImg>
        <ImgCao src={ilustracao} alt="Cãozinho" />
        </WrapperImg>
   
    </WrapperTelaInicial>

)