import { WrapperConteudo, Logo,Texto } from "../estilos/Conteudo";
import { Botao } from "../componentes/elementos/botao";

export const Login = () => (
    <WrapperConteudo>
        <Logo src="./imagens/logoazul.png" alt="Logo da Adopet" />
       <Texto>
            Já tem conta? Faça seu login:
        </Texto>
        <Botao href="/cadastro">
           Entrar   
        </Botao>
    </WrapperConteudo>
)