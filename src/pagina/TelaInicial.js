import '../estilos/imagemcachorrotelainicial.css'
import { WrapperTelaInicial, Logo, Titulo, Texto} from "../estilos/Conteudo"
import { Botao } from "../componentes/elementos/botao"
import Ilustracao from '../imagens/ilustracao.png'
import logobranco from '../imagens/logobranco.png'




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
       <img src={Ilustracao} alt="Caozinho" className='imgcachorro'  />
   
    </WrapperTelaInicial>

)