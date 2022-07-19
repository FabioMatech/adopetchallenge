import { FormularioPerfil, WrapperPerfil,  
        InputPerfil,  LabelPerfil, TextoPerfil} from "../componentes/elementos/FormularioPerfil";
import {WrapperBotao, BotaoFormulario } from '../componentes/elementos/BotaoFormulario'

import styled from 'styled-components'

const FormularioMensagem = styled(FormularioPerfil)`

    width: 70%;`

const InputTextArea = styled(InputPerfil)`
    height: 6em;
    
    
`

export const Mensagem = () => (
    <WrapperPerfil>
      
       
       <TextoPerfil primary>
        Envie uma mensagem para a pessoa ou instituição que está cuidando do 
        animal:
        </TextoPerfil>
       
       
        <FormularioMensagem action="http://localhost:3001/mensagemadopet" method="POST"> 

             
        
        <LabelPerfil htmlFor="nome">Nome </LabelPerfil>
        <InputPerfil type="text" id="nomemensagem" name="nomemensagem" placeholder="Insira seu nome completo" />
        
        <LabelPerfil htmlFor="telefone">Telefone </LabelPerfil>
        <InputPerfil type="tel" id="telefonemensagem" name="telefonemensagem" placeholder="Insira seu telefone e/ou whatsapp" />
        
        <LabelPerfil htmlFor="nomedoanimal">Nome do animal </LabelPerfil>
        <InputPerfil type="text" id="nomedoanimal" name="nomedoanimal" placeholder="Por qual animal você se interessou?" />

        <LabelPerfil htmlFor="mensagem">Mensagem </LabelPerfil>
        <InputTextArea type="textarea" id="mensagem" name="mensagem" 
         rows="5" cols="33" placeholder="Escreva sua mensagem." />
       
        <WrapperBotao>
         <BotaoFormulario type="submit" value="Salvar" >Salvar</BotaoFormulario>
         </WrapperBotao>
        
        
        </FormularioMensagem>   

       
       
     
   
    </WrapperPerfil>    
       
       
       
)