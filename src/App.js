import { Cabecalho } from './componentes/pagina/Cabecalho';
import { Conteudo } from './rotas/Route';
import { BoxConteudo, Globalstyle, Pagina} from './estilos/GlobalStyle';
import { Rodape } from './componentes/pagina/Rodape';

export const App = () => (

  
      <Pagina>
      <Globalstyle />        
       
       
        <Cabecalho />       
      

        <BoxConteudo>
         <Conteudo />           
       </BoxConteudo>
      
   
      <Rodape />
     


    </Pagina>
    
 
 
 )
