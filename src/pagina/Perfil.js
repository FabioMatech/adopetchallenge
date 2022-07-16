import { WrapperConteudo, Texto } from "../estilos/Conteudo";
import { Botao } from "../componentes/elementos/botao";
import {Formulario, Input, Label} from "../componentes/elementos/Formulario";
import styled from "styled-components";
import Cachorro from "../imagens/cachorro.jpg"

const WrapperPerfil = styled(WrapperConteudo)`
    background-image: none;
`
const TextoPerfil = styled.p`
    text-align: center;
    font-family:'Poppins', sans-serif;
    font-size: 1.5em;
    color: #737380;
    font-weight: 600;
;
`

const FormularioPerfil = styled(Formulario)`
   
    
    
`


const InputPerfil = styled(Input)`
    display: flex;
    flex-direction: row;
    margin-left:2em;
    width:80%;
`


const LabelPerfil = styled(Label)`
    display: flex;
    flex-direction: row;
    padding-left: 1em;
    color: #3772FF;
    font-size: 1.5em;
    font-family:'Poppins', sans-serif;
    font-weight: 600;

`
const InputImg = styled.input`
    width: 20%;
    border-radius: 100%;
    margin: auto;
`
const WrapperBotao = styled.div`
    display: flex;
    flex-direction: row;
     
`
const BotaoPerfil = styled(Botao)`
    text-align: center;
`

export const Perfil = () => (
    <WrapperPerfil>
      
       
       <Texto primary>
            Esse é o perfil que aparece para responsáveis ou ONGs que recebem sua mensagem.
        </Texto>
        <TextoPerfil>Perfil</TextoPerfil>
       
        <FormularioPerfil>
        

            <LabelPerfil for="foto">Foto </LabelPerfil>        
            <InputImg type="image" id="image" alt="Login" src={Cachorro} />
        
             
        
        <LabelPerfil for="nome">Nome </LabelPerfil>
        <InputPerfil type="text" id="nomeperfil" name="nome" placeholder="Aqui será seu nome" />
        
        <LabelPerfil for="telefone">Telefone </LabelPerfil>
        <InputPerfil type="tel" id="telefone" name="telefone" placeholder="55 11 xxxxxxxx" />
        
        <LabelPerfil for="cidade">Cidade </LabelPerfil>
        <InputPerfil type="text" id="cidade" name="cidade" placeholder="São Paulo" />
       
        
        
        
        </FormularioPerfil>   
       <WrapperBotao>
        <BotaoPerfil href="/Home">
           Salvar   
        </BotaoPerfil>
        </WrapperBotao>
       
       
     
   
    </WrapperPerfil>    
       
       
       
)