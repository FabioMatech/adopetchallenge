import { WrapperConteudo, Logo,Texto } from "../estilos/Conteudo";
import { Botao } from "../componentes/elementos/botao";
import Logoazul from "../imagens/logoazul.png"
import { Formulario, Label, Input} from "../componentes/elementos/Formulario";

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
        
        <Label for="email">Email </Label>
        <Input type="email" id="email" name="email" placeholder="Escolha seu melhor email" />
        
        <Label for="senha">Senha </Label>
        <Input type="senha" id="senha" name="senha" placeholder="Crie uma senha" />
        

        </Formulario>   
       
       
        <Botao href="/cadastro">
           Entrar   
        </Botao>
     
   
    </WrapperConteudo>    
       
       
       
)