import styled from 'styled-components'
import Cachorro from "../imagens/cachorro.jpg"
import { FormularioPerfil, WrapperPerfil,  
        InputPerfil, TituloFormulario, LabelPerfil, InputImg, TextoPerfil,
        } from "../componentes/elementos/FormularioPerfil";
import {WrapperBotao, BotaoFormulario } from '../componentes/elementos/BotaoFormulario'

const CreditoImagem = styled.p`
    text-align: right;
    font-size: 0.7em;
`
const CliqueFoto = styled.p`
    color: red;
    font-size: 0.8em;
    text-align: center;
    padding-top: 0.5em;
`


export const Perfil = () => (
    <WrapperPerfil>
      
       
       <TextoPerfil primary>
            Esse é o perfil que aparece para responsáveis ou ONGs que recebem sua mensagem.
        </TextoPerfil>
        <TituloFormulario>Perfil</TituloFormulario>
       
        <FormularioPerfil>
        

            <LabelPerfil for="foto">Foto </LabelPerfil>        
            <InputImg type="image" id="image" alt="Foto Perfil" src={Cachorro} />
            <CreditoImagem>Imagem de <a href="https://pixabay.com/pt/users/pixel2013-2364555/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3380548">S. Hermann &amp;amp; F. Richter</a> por <a href="https://pixabay.com/pt/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3380548">Pixabay</a></CreditoImagem>
            <CliqueFoto>Clique na foto para editar</CliqueFoto>
        
        <LabelPerfil for="nome">Nome </LabelPerfil>
        <InputPerfil type="text" id="nomeperfil" name="nome" placeholder="Aqui será seu nome" />
        
        <LabelPerfil for="telefone">Telefone </LabelPerfil>
        <InputPerfil type="tel" id="telefone" name="telefone" placeholder="55 11 xxxxxxxx" />
        
        <LabelPerfil for="cidade">Cidade </LabelPerfil>
        <InputPerfil type="text" id="cidade" name="cidade" placeholder="São Paulo" />

      
        <WrapperBotao>
         <BotaoFormulario type="submit" value="Click Me" >Salvar</BotaoFormulario>
         </WrapperBotao>
        
        </FormularioPerfil>   
       
      
    </WrapperPerfil>          
       
       
)