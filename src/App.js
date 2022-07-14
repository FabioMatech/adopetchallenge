import { Cabecalho } from './componentes/pagina/Cabecalho';
import { Conteudo } from './rotas/Route';
import {Fragment} from 'react';
import { Rodape } from './componentes/pagina/Rodape';
import { Globalstyle, Pagina} from './estilos/GlobalStyle';


export const App = () => (

  <Pagina>
    <Fragment>   
      <Globalstyle />        
        <Cabecalho />       
         <Conteudo />           
        <Rodape /> 
    </Fragment>
 </Pagina>
 
 )
