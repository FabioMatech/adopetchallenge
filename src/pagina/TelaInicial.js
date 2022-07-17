import '../estilos/imagemcachorrotelainicial.css'
import { WrapperTelaInicial, Logo, Titulo, Texto} from "../estilos/Conteudo"
import { Botao } from "../componentes/elementos/botao"
import Ilustracao from '../imagens/ilustracao.png'
import logobranco from '../imagens/logobranco.png'
import styled from 'styled-components'


const ImgCao = styled.img`  
   position: absolute;
   top:25em;
   height: 10em;
`
const WrapperBotao = styled.div`
    padding-bottom: 0.2em;
`


export const TelaInicial = () => (
   
   <WrapperTelaInicial>
        <Logo src={logobranco} alt="Logo da Adopet" />
       <Titulo primary>Boas-Vindas!</Titulo>
       <Texto primary primarycolor>
            Que tal mudar sua vida adotando seu novo melhor amigo ?
            Vem com a gente.
        </Texto>
        <WrapperBotao>
        <Botao href="/login">
            Já tenho conta
        </Botao>
        <Botao href="/cadastro">
            Quero me cadastrar
        </Botao>
       </WrapperBotao>
     
   

       <ImgCao src={Ilustracao} alt="Caozinho" className='imgcachorro'  />

    </WrapperTelaInicial>

)