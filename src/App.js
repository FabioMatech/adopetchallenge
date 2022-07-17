import { Cabecalho } from './componentes/pagina/Cabecalho';
import { Conteudo } from './rotas/Route';
import { BoxConteudo, BoxCabecalho, BoxRodape, Globalstyle, Pagina} from './estilos/GlobalStyle';
import { Rodape } from './componentes/pagina/Rodape';

export const App = () => (

  
      <Pagina>
      <Globalstyle />        
       
       <BoxCabecalho>
        <Cabecalho />       
       </BoxCabecalho>

        <BoxConteudo>
         <Conteudo />           
       </BoxConteudo>
      
      <BoxRodape>
      <Rodape />
      </BoxRodape>

      
    </Pagina>
    
 
 
 )
