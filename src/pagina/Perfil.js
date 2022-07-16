import Cachorro from "../imagens/cachorro.jpg"
import { FormularioPerfil, WrapperPerfil,  
        InputPerfil, TituloFormulario, LabelPerfil, InputImg, TextoPerfil,
        WrapperBotao, BotaoPerfil} from "../componentes/elementos/FormularioPerfil";

export const Perfil = () => (
    <WrapperPerfil>
      
       
       <TextoPerfil primary>
            Esse é o perfil que aparece para responsáveis ou ONGs que recebem sua mensagem.
        </TextoPerfil>
        <TituloFormulario>Perfil</TituloFormulario>
       
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