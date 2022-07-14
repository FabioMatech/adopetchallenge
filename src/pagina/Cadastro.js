import { WrapperConteudo, Logo,Texto } from "../estilos/Conteudo";
import { Botao } from "../componentes/elementos/botao";


export const Cadastro = () => (
    <WrapperConteudo>
        <Logo src="./imagens/logoazul.png" alt="Logo da Adopet" />
       <Texto>
            Ainda não tem cadastro?
            Então, antes de buscar seu melhor amigo, precisamos de alguns dados:
        </Texto>
        <Botao href="/cadastro">
            Cadastrar
        </Botao>
    </WrapperConteudo>
)
  