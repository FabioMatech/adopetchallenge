import { Texto } from "../estilos/Conteudo";

import styled from "styled-components";

import Dunga from '../imagens/Dunga.png';
import Felicia from '../imagens/Felicia.png';
import Sirius from '../imagens/sirius.png';
import Fiona from '../imagens/Fiona.png';
import Sid from '../imagens/Sid.png';
import Yoda from '../imagens/Yoda.png';
import Lua from '../imagens/Lua.png';
import Amora from '../imagens/Amora.png';
import Zelda from '../imagens/Zelda.png';


import {Message2} from "@styled-icons/remix-line/Message2"

const WrapperPagina = styled.div`
     display: flex;
     flex-direction: column;

`
const WrapperConteudo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media(min-width: 390px){
        display:flex;
        flex-direction: row;
        flex-wrap: wrap;
        
        
    };    

`
const WrapperCards = styled.div`
    display: flex;   
    margin: 0.4em;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: #F6F6F6;    

    @media(min-width: 770px){
        width: 30%;
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
    padding: 0.5em ;

    text-align: left;
`

const Descricao = styled.p`
    color: #737380;
  
`
const FalarComDono = styled.a`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 0.5em;
    text-decoration: none;
    &:hover{
        color:blue;
    }
`

const DescricaoDono = styled.p`
    color: #737380;
    font-size: 1em;
`
const Localizacao = styled(Descricao)`
    padding-top: 1.5em;
`

const IconeMensagem = styled(Message2)`
    color: blue;
    height:8%;
    width: 8%;
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
                    
                     
                <FalarComDono href="/mensagem">
                <IconeMensagem />
                 <DescricaoDono>Falar com responsável</DescricaoDono>
                 </FalarComDono>   
                </FichaTecnica>
            </Card>
    </ WrapperCards>


    <WrapperCards>
            <Card>
                <Animal src={Felicia} alt="Gatinha Felicia" />
                <FichaTecnica>
                    <Titulo >Felícia </ Titulo>
                    <Descricao  >3 meses </ Descricao>
                    <Descricao>Porte pequeno</ Descricao>
                    <Descricao>Ativa e carinhosa  </ Descricao>
                    <Localizacao>Nova Iguaçu (RJ)</Localizacao>
                    <FalarComDono href="/mensagem">
                    <IconeMensagem />
                    <DescricaoDono>Falar com responsável</DescricaoDono>
                    </FalarComDono> 
                </FichaTecnica>
            </Card>
    </ WrapperCards>
    <WrapperCards>
            <Card>
                <Animal src={Sirius} alt="Cãozinho Dunga" />
                <FichaTecnica>
                    <Titulo >Sirius </ Titulo>
                    <Descricao  > 6 meses </ Descricao>
                    <Descricao>Porte grande</ Descricao>
                    <Descricao>Ativo e educado   </ Descricao>
                    <Localizacao>Duque de Caxias (RJ)   </Localizacao>
                    <FalarComDono href="/mensagem">
                    <IconeMensagem />
                    <DescricaoDono>Falar com responsável</DescricaoDono>
                    </FalarComDono> 
                </FichaTecnica>
            </Card>
    </ WrapperCards>
   

    <WrapperCards>
            <Card>
                <Animal src={Fiona} alt="Cãozinha Fiona" />
                <FichaTecnica>
                    <Titulo >Fiona </ Titulo>
                    <Descricao  >3 anos </ Descricao>
                    <Descricao>Porte pequeno</ Descricao>
                    <Descricao> Calma e carinhosa </ Descricao>
                    <Localizacao>São Gonçalo (RJ)</Localizacao>
                    <FalarComDono href="/mensagem">
                    <IconeMensagem />
                    <DescricaoDono>Falar com responsável</DescricaoDono>
                    </FalarComDono> 
                </FichaTecnica>
            </Card>
    </ WrapperCards>
    


    <WrapperCards>
            <Card>
                <Animal src={Sid} alt="Cãozinho Sid" />
                <FichaTecnica>
                    <Titulo >Sid</ Titulo>
                    <Descricao  >8 meses </ Descricao>
                    <Descricao>Porte médio/grande</ Descricao>
                    <Descricao> Brincalhão e amável </ Descricao>
                    <Localizacao>Rio de Janeiro</Localizacao>
                    <FalarComDono href="/mensagem">
                    <IconeMensagem />
                    <DescricaoDono>Falar com responsável</DescricaoDono>
                    </FalarComDono> 
                </FichaTecnica>
            </Card>
    </ WrapperCards>
   
    <WrapperCards>
            <Card>
                <Animal src={Yoda} alt="Gatinho Yoda" />
                <FichaTecnica>
                    <Titulo >Yoda </ Titulo>
                    <Descricao  >1 ano </ Descricao>
                    <Descricao>Porte médio</ Descricao>
                    <Descricao> Ativo e carinhoso </ Descricao>
                    <Localizacao>Nova Iguaçu (RJ)</Localizacao>
                    <FalarComDono href="/mensagem">
                    <IconeMensagem />
                    <DescricaoDono>Falar com responsável</DescricaoDono>
                    </FalarComDono> 
                </FichaTecnica>
            </Card>
    </ WrapperCards>
    


    <WrapperCards>
            <Card>
                <Animal src={Lua} alt="Gatinha Lua" />
                <FichaTecnica>
                    <Titulo >Lua </ Titulo>
                    <Descricao  >2 anos </ Descricao>
                    <Descricao>Porte médio</ Descricao>
                    <Descricao> Ativa e carinhosa </ Descricao>
                    <Localizacao>Duque de Caxias (RJ)</Localizacao>
                    <FalarComDono href="/mensagem">
                    <IconeMensagem />
                    <DescricaoDono>Falar com responsável</DescricaoDono>
                    </FalarComDono> 
                </FichaTecnica>
            </Card>
    </ WrapperCards>
    


    <WrapperCards>
            <Card>
                <Animal src={Amora} alt="Cãozinha Amora" />
                <FichaTecnica>
                    <Titulo >Amora </ Titulo>
                    <Descricao  >45 dias </ Descricao>
                    <Descricao>Porte grande</ Descricao>
                    <Descricao> Calma e carinhosa </ Descricao>
                    <Localizacao>São Gonçalo (RJ)</Localizacao>
                    <FalarComDono href="/mensagem">
                    <IconeMensagem />
                    <DescricaoDono>Falar com responsável</DescricaoDono>
                    </FalarComDono> 
                </FichaTecnica>
            </Card>
    </ WrapperCards>



    <WrapperCards>
            <Card>
                <Animal src={Zelda} alt="Gatinha Zelda" />
                <FichaTecnica>
                    <Titulo >Zelda </ Titulo>
                    <Descricao  > 5 meses </ Descricao>
                    <Descricao>Porte médio</ Descricao>
                    <Descricao> Ativa e amável </ Descricao>
                    <Localizacao>Rio de Janeiro</Localizacao>
                    <FalarComDono href="/mensagem">
                    <IconeMensagem />
                    <DescricaoDono>Falar com responsável</DescricaoDono>
                    </FalarComDono> 
                </FichaTecnica>
            </Card>
    </ WrapperCards>
   



  </ WrapperConteudo>
</WrapperPagina>
)