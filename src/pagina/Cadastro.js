import { WrapperConteudo, Logo,Texto } from "../estilos/Conteudo";
import logoazul from "../imagens/logoazul.png"
import { Formulario, Label, Input} from "../componentes/elementos/Formulario";
import {WrapperBotao, BotaoFormulario } from '../componentes/elementos/BotaoFormulario';   

import { Patas } from "../componentes/elementos/PatasTopo";
import PatasFundo from '../imagens/Patas.png'

export const Cadastro = () => (
    <WrapperConteudo>
        <Patas src={PatasFundo} alt="Patas de cães"/>
        <Logo src={logoazul} alt="Logo da Adopet" />
       <Texto>
            Ainda não tem cadastro?
            Então, antes de buscar seu melhor amigo, precisamos de alguns dados:
        </Texto>
        <Formulario>
        
        <Label for="email">Email </Label>
        <Input type="email" id="email" name="email" placeholder="Escolha seu melhor email" />
        
        <Label for="fnome">Nome </Label>
        <Input type="text" id="fnome" name="fnome" placeholder="Digite seu nome completo" />
        
        <Label for="senha">Senha </Label>
        <Input type="senha" id="senha" name="senha" placeholder="Crie uma senha" />
        
        <Label for="fnome">Confirme sua senha </Label>
        <Input type="corfirmarsenha" id="confirmarsenha" name="confirmarsenha" placeholder="Repita a senha criada acima" />

        <WrapperBotao>
         <BotaoFormulario type="submit" value="Click Me" >Cadastrar</BotaoFormulario>
        </WrapperBotao>

        </Formulario>
      
    </WrapperConteudo>
)
  