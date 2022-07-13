import { Cabecalho } from './componentes/pagina/Cabecalho';
import { Conteudo } from './rotas/Route';
import {Fragment} from 'react';
import { Rodape } from './componentes/pagina/Rodape';
import { Globalstyle } from './estilos/GlobalStyle';
import styled from 'styled-components';

const Pagina = styled.body`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const BoxConteudo = styled.main`
  flex-grow: 1;
`


export const App = () => (

  <Pagina>
    <Fragment>   
      <Globalstyle />
        
        <Cabecalho />  

        <BoxConteudo>      
          <Conteudo />
        </BoxConteudo>

        <Rodape /> 
          
    </Fragment>
 </Pagina>
 
 )
