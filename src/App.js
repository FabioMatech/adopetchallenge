import { Cabecalho } from './componentes/pagina/Cabecalho';
import { Conteudo } from './rotas/Route';
import { Rodape } from './componentes/pagina/Rodape';
import { BoxConteudo, Globalstyle, Pagina} from './estilos/GlobalStyle';


export const App = () => (

  
  
    <Pagina>
      <Globalstyle />        
       
       
        <Cabecalho />       
         
        <BoxConteudo>
         <Conteudo />           
       </BoxConteudo>
      
  
     
    </ Pagina>
    
 
 
 )
