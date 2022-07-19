import { WrapperConteudo, Logo,Texto } from "../estilos/Conteudo";
import Logoazul from "../imagens/logoazul.png"
import { Formulario, Label, Input} from "../componentes/elementos/Formulario";
import {WrapperBotao, BotaoFormulario } from '../componentes/elementos/BotaoFormulario';

import { Patas } from "../componentes/elementos/PatasTopo";
import PatasFundo from '../imagens/Patas.png'


export const Login = () => (
    <WrapperConteudo>
      <Patas src={PatasFundo} alt="Patas de cães"/>
      <Logo src={Logoazul} alt="Logo da Adopet" />
       
       <Texto>
            Já tem conta? Faça seu login:
        </Texto>
        
        <Formulario>
        
        <Label htmlFor="email">Email </Label>
        <Input type="email" id="email" name="email" placeholder="Escolha seu melhor email" />
        
        <Label htmlFor="senha">Senha </Label>
        <Input type="password" id="senha" name="senha" placeholder="Crie uma senha" />
        
        
        <WrapperBotao>
         <BotaoFormulario type="submit" value="Click Me" >Cadastrar</BotaoFormulario>
        </WrapperBotao>

        </Formulario>   

     
   
    </WrapperConteudo>    
       
       
       
)