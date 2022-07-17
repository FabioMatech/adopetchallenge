import { Texto } from "../estilos/Conteudo";

import styled from "styled-components";

import Dunga from '../imagens/Dunga.png';

import {Message2} from "@styled-icons/remix-line/Message2"

const WrapperPagina = styled.div`
     display: flex;
     flex-direction: column;
     margin: auto;
`
const WrapperConteudo = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    @media(min-width: 390px){
        display:flex;
        flex-direction: row;
        flex-wrap: wrap;
    };    

`
const WrapperCards = styled.div`
    display: flex;
    padding: 0.2em;
    margin: 0.5em;
    flex-direction: column;
    background-color: #F6F6F6;
    
    

   
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
    height:15%;
    width: 15%;
`
export const Home = () => (
<WrapperPagina>
     <Texto>
        Olá! Veja os amigos disponíveis para adoção!
        </ Texto>
    <WrapperConteudo>
       

    <WrapperCards>
            <Card>
                <Animal src={Dunga} alt="Cãozinho Dunga" />
                <FichaTecnica>
                    <Titulo >Dunga </ Titulo>
                    <Descricao  >2 anos </ Descricao>
                    <Descricao>Porte pequeno</ Descricao>
                    <Descricao> Calmo e educado </ Descricao>
                    <Localizacao>Rio de Janeiro</Localizacao>
                    <IconeMensagem /> <Descricao>Falar com responsável</Descricao>
                </FichaTecnica>
            </Card>
    </ WrapperCards>


    <WrapperCards>
            <Card>
                <Animal src={Dunga} alt="Cãozinho Dunga" />
                <FichaTecnica>
                    <Titulo >Dunga </ Titulo>
                    <Descricao  >2 anos </ Descricao>
                    <Descricao>Porte pequeno</ Descricao>
                    <Descricao> Calmo e educado </ Descricao>
                    <Localizacao>Rio de Janeiro</Localizacao>
                    <IconeMensagem /> <Descricao>Falar com responsável</Descricao>
                </FichaTecnica>
            </Card>
    </ WrapperCards>
    <WrapperCards>
            <Card>
                <Animal src={Dunga} alt="Cãozinho Dunga" />
                <FichaTecnica>
                    <Titulo >Dunga </ Titulo>
                    <Descricao  >2 anos </ Descricao>
                    <Descricao>Porte pequeno</ Descricao>
                    <Descricao> Calmo e educado </ Descricao>
                    <Localizacao>Rio de Janeiro</Localizacao>
                    <IconeMensagem /> <Descricao>Falar com responsável</Descricao>
                </FichaTecnica>
            </Card>
    </ WrapperCards>
    </ WrapperConteudo>
</WrapperPagina>
)