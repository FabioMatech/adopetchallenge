import { WrapperConteudo, Texto } from "../../estilos/Conteudo";
import { Botao } from "./botao";
import {Formulario, Input, Label} from "./Formulario";


import styled from "styled-components"

export const FormularioPerfil = styled(Formulario)``

export const WrapperPerfil = styled(WrapperConteudo)`
       background-image: none;
`

export const TituloFormulario = styled.p`
       text-align: center;
       font-family:'Poppins', sans-serif;
       font-size: 1.5em;
       color: #737380;
       font-weight: 600;
;
`

export const InputPerfil = styled(Input)`
       display: flex;
       flex-direction: row;
       margin-left:2em;
       width:80%;
`

export const LabelPerfil = styled(Label)`
      display: flex;
      flex-direction: row;
      padding-left: 1em;
      color: #3772FF;
      font-size: 1.5em;
      font-family:'Poppins', sans-serif;
      font-weight: 600;

`
export const InputImg = styled.input`
       width: 20%;
       border-radius: 100%;
       margin: auto;
    `
export const WrapperBotao = styled.div`
      display: flex;
      flex-direction: row;
     
`
export const BotaoPerfil = styled(Botao)`
      text-align: center;
`

export const TextoPerfil = styled(Texto)``