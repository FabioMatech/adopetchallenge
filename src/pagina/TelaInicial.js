import '../estilos/imagemcachorrotelainicial.css'
import { WrapperTelaInicial, Logo, Titulo, Texto} from "../estilos/Conteudo"
import { Botao } from "../componentes/elementos/botao"
import Ilustracao from '../imagens/ilustracao.png'
import styled from 'styled-components'


const ImgCao = styled.img`  
   float: bottom;
   
`

const Espaco = styled.div`
    padding-top: 4em;
    @media(min-width: 770px) {
        padding:0.5px;
    }
`


const Footer = styled.footer`
    float: bottom;
    background-image: linear-gradient(transparent,#36D6AD);
    font-size: 1em;
    width: 100%;
;
`


export const TelaInicial = () => (
   
   <WrapperTelaInicial>
        <Logo src="./logobranco.png" alt="Logo da Adopet" />
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
     <Espaco></Espaco>
    <Footer>
      <ImgCao src={Ilustracao} alt="Caozinho" className='imgcachorro'  />
   </Footer>
   
    </WrapperTelaInicial>

)