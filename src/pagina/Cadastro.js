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
        <Formulario action="/teste.html" method="POST">
        
        <Label htmlFor="email">Email </Label>
        <Input type="email" id="email" name="email" placeholder="Escolha seu melhor email" />
        
        <Label htmlFor="fnome">Nome </Label>
        <Input type="text" id="fnome" name="fnome" placeholder="Digite seu nome completo" />
        
        <Label htmlFor="senha">Senha </Label>
        <Input type="senha" id="senha" name="senha" placeholder="Crie uma senha" />
        
        <Label htmlFor="confirmarsenha">Confirme sua senha </Label>
        <Input type="confirmarsenha" id="confirmarsenha" name="confirmarsenha" placeholder="Repita a senha criada acima" />

        <WrapperBotao>
         <BotaoFormulario type="submit" value="cadastrar" >Cadastrar</BotaoFormulario>
        </WrapperBotao>

        </Formulario>
      
    </WrapperConteudo>
)
  