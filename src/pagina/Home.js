import { Texto } from "../estilos/Conteudo";

import styled from "styled-components";

import Dunga from '../imagens/Dunga.png';

import {Message2} from "@styled-icons/remix-line/Message2"


const WrapperConteudo = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;

`
const WrapperCards = styled.div`
    display: flex;
    padding: 0.5em;
    margin: 1em;
    flex-direction: column;
    background-color: #F6F6F6;
 ;
    

    @media(min-width: 390px){
        display:grid;
        grid-template-rows: 1fr 1fr;
    }
    @media(min-width: 700px){
        display:grid;
        grid-template-rows: 1fr 1fr 1fr;
    }
`
const Card = styled.div`
    display: flex;
    flex-direction: row;
`
const Animal = styled.img`
    display: inline;
`
const FichaTecnica = styled.div`
    
`
const Titulo = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    color: #3772FF;
    padding: 0.5em 1em;

    text-align: left;
`
const Descricao = styled.p`
    color: #737380;
    padding-left: 1em;
`
const Localizacao = styled(Descricao)`
    padding-top: 1.5em;
`

const IconeMensagem = styled(Message2)`
    color: blue;
`
export const Home = () => (
    <WrapperConteudo>
        <Texto>
        Olá! Veja os amigos disponíveis para adoção!
        </ Texto>

    <WrapperCards>
        <Card>
            <Animal src={Dunga} alt="Cãozinho Dunga" />
            <FichaTecnica>
            <Titulo >Dunga </ Titulo>
            <Descricao  >2 anos </ Descricao>
            <Descricao>Porte pequeno</ Descricao>
            <Descricao> Calmo e educado </ Descricao>
            <Localizacao>Rio de Janeiro</Localizacao>
            <Descricao><IconeMensagem />Falar com responsável</Descricao>

            </FichaTecnica>
        </Card>
    </ WrapperCards>
    </ WrapperConteudo>

)